'use client';

import { useReducer, useCallback } from 'react';
import type { Goal, Priority, Reason, ChatMessage, DemoStep, DialogueMessage, AreaId } from '@/types';

interface DemoState {
  step: DemoStep;
  selectedArea: AreaId | null;
  goalText: string;
  dialogueIndex: number;
  dialogueMessages: DialogueMessage[];
  currentAnswer: string;
  goal: Goal | null;
  priorities: Priority[];
  completions: Record<string, string[]>; // taskId -> dates
  reasons: Reason[];
  chat: ChatMessage[];
  strikeShown: boolean;
  strikeProcessed: boolean;
  taskWithStrike: string | null;
}

type Action =
  | { type: 'SET_STEP'; step: DemoStep }
  | { type: 'PICK_AREA'; area: AreaId }
  | { type: 'SET_GOAL_TEXT'; text: string }
  | { type: 'ADD_DIALOGUE_MESSAGE'; message: DialogueMessage }
  | { type: 'SET_CURRENT_ANSWER'; value: string }
  | { type: 'ADVANCE_DIALOGUE' }
  | { type: 'SET_GOAL'; goal: Goal }
  | { type: 'ADD_PRIORITY'; text: string }
  | { type: 'TOGGLE_PRIORITY'; id: string }
  | { type: 'REMOVE_PRIORITY'; id: string }
  | { type: 'TOGGLE_TASK'; taskId: string; date: string }
  | { type: 'ADD_REASON'; reason: Reason }
  | { type: 'ADD_CHAT'; message: ChatMessage }
  | { type: 'SHOW_STRIKE'; taskId: string }
  | { type: 'PROCESS_STRIKE' }
  | { type: 'APPLY_INTERVENTION'; taskId: string; changes: { name?: string; frequency?: string; duration?: string } }
  | { type: 'RESET' };

const initialState: DemoState = {
  step: 'intro',
  selectedArea: null,
  goalText: '',
  dialogueIndex: 0,
  dialogueMessages: [],
  currentAnswer: '',
  goal: null,
  priorities: [],
  completions: {},
  reasons: [],
  chat: [],
  strikeShown: false,
  strikeProcessed: false,
  taskWithStrike: null,
};

function reducer(state: DemoState, action: Action): DemoState {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, step: action.step };
    case 'PICK_AREA':
      return { ...state, selectedArea: action.area };
    case 'SET_GOAL_TEXT':
      return { ...state, goalText: action.text };
    case 'ADD_DIALOGUE_MESSAGE':
      return { ...state, dialogueMessages: [...state.dialogueMessages, action.message] };
    case 'SET_CURRENT_ANSWER':
      return { ...state, currentAnswer: action.value };
    case 'ADVANCE_DIALOGUE':
      return { ...state, dialogueIndex: state.dialogueIndex + 1, currentAnswer: '' };
    case 'SET_GOAL':
      return { ...state, goal: action.goal };
    case 'ADD_PRIORITY': {
      if (state.priorities.length >= 3) return state;
      const newPriority: Priority = {
        id: `pri-${Date.now()}`,
        text: action.text,
        done: false,
        rank: state.priorities.length,
      };
      return { ...state, priorities: [...state.priorities, newPriority] };
    }
    case 'TOGGLE_PRIORITY':
      return {
        ...state,
        priorities: state.priorities.map((p) => (p.id === action.id ? { ...p, done: !p.done } : p)),
      };
    case 'REMOVE_PRIORITY':
      return {
        ...state,
        priorities: state.priorities.filter((p) => p.id !== action.id).map((p, i) => ({ ...p, rank: i })),
      };
    case 'TOGGLE_TASK': {
      const existing = state.completions[action.taskId] ?? [];
      const next = existing.includes(action.date)
        ? existing.filter((d) => d !== action.date)
        : [...existing, action.date];
      return { ...state, completions: { ...state.completions, [action.taskId]: next } };
    }
    case 'ADD_REASON':
      return { ...state, reasons: [...state.reasons, action.reason] };
    case 'ADD_CHAT':
      return { ...state, chat: [...state.chat, action.message] };
    case 'SHOW_STRIKE':
      return { ...state, strikeShown: true, taskWithStrike: action.taskId };
    case 'PROCESS_STRIKE':
      return { ...state, strikeProcessed: true };
    case 'APPLY_INTERVENTION': {
      if (!state.goal) return state;
      const newTasks = state.goal.plan.dailyTasks.map((t) =>
        t.id === action.taskId ? { ...t, ...action.changes, intervened: true } : t
      );
      return {
        ...state,
        goal: { ...state.goal, plan: { ...state.goal.plan, dailyTasks: newTasks } },
        strikeProcessed: true,
      };
    }
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export function useDemoState() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = {
    setStep: useCallback((step: DemoStep) => dispatch({ type: 'SET_STEP', step }), []),
    pickArea: useCallback((area: AreaId) => dispatch({ type: 'PICK_AREA', area }), []),
    setGoalText: useCallback((text: string) => dispatch({ type: 'SET_GOAL_TEXT', text }), []),
    addDialogueMessage: useCallback((message: DialogueMessage) => dispatch({ type: 'ADD_DIALOGUE_MESSAGE', message }), []),
    setCurrentAnswer: useCallback((value: string) => dispatch({ type: 'SET_CURRENT_ANSWER', value }), []),
    advanceDialogue: useCallback(() => dispatch({ type: 'ADVANCE_DIALOGUE' }), []),
    setGoal: useCallback((goal: Goal) => dispatch({ type: 'SET_GOAL', goal }), []),
    addPriority: useCallback((text: string) => dispatch({ type: 'ADD_PRIORITY', text }), []),
    togglePriority: useCallback((id: string) => dispatch({ type: 'TOGGLE_PRIORITY', id }), []),
    removePriority: useCallback((id: string) => dispatch({ type: 'REMOVE_PRIORITY', id }), []),
    toggleTask: useCallback((taskId: string, date: string) => dispatch({ type: 'TOGGLE_TASK', taskId, date }), []),
    addReason: useCallback((reason: Reason) => dispatch({ type: 'ADD_REASON', reason }), []),
    addChat: useCallback((message: ChatMessage) => dispatch({ type: 'ADD_CHAT', message }), []),
    showStrike: useCallback((taskId: string) => dispatch({ type: 'SHOW_STRIKE', taskId }), []),
    processStrike: useCallback(() => dispatch({ type: 'PROCESS_STRIKE' }), []),
    applyIntervention: useCallback(
      (taskId: string, changes: { name?: string; frequency?: string; duration?: string }) =>
        dispatch({ type: 'APPLY_INTERVENTION', taskId, changes }),
      []
    ),
    reset: useCallback(() => dispatch({ type: 'RESET' }), []),
  };

  return { state, actions };
}
