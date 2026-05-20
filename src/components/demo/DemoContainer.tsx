'use client';

import { useState, useEffect } from 'react';
import { useDemoState } from '@/lib/useDemoState';
import PhoneFrame from '@/components/shared/PhoneFrame';
import IntroScreen from './IntroScreen';
import PickAreaScreen from './PickAreaScreen';
import GoalTextScreen from './GoalTextScreen';
import AIDialogueScreen from './AIDialogueScreen';
import PlanReviewScreen from './PlanReviewScreen';
import HomeScreen from './HomeScreen';
import StrikeModal from './StrikeModal';
import CoachModal from './CoachModal';
import DemoComplete from './DemoComplete';
import type { Reason } from '@/types';
import { todayStr } from '@/lib/utils';
import { RotateCcw } from 'lucide-react';

interface DemoContainerProps {
  embedded?: boolean; // smaller, scoped variant for landing
  onWaitlistClick?: () => void;
}

export default function DemoContainer({ embedded = false, onWaitlistClick }: DemoContainerProps) {
  const { state, actions } = useDemoState();
  const [showStrike, setShowStrike] = useState(false);
  const [showCoach, setShowCoach] = useState(false);

  // Auto-trigger strike alert after user has been on home for a moment
  useEffect(() => {
    if (state.step === 'home' && state.goal && !state.taskWithStrike && !state.strikeProcessed) {
      const t = setTimeout(() => {
        // Pick the first non-completed task to mark as struck
        const firstTask = state.goal!.plan.dailyTasks[0];
        if (firstTask) {
          actions.showStrike(firstTask.id);
        }
      }, 3500);
      return () => clearTimeout(t);
    }
  }, [state.step, state.goal, state.taskWithStrike, state.strikeProcessed, actions]);

  const handleLogReason = (tags: string[], note: string) => {
    if (!state.goal || !state.taskWithStrike) return;
    const task = state.goal.plan.dailyTasks.find((t) => t.id === state.taskWithStrike);
    if (!task) return;

    const reason: Reason = {
      id: `r-${Date.now()}`,
      goalId: state.goal.id,
      taskId: task.id,
      taskName: task.name,
      tags,
      note,
      createdAt: new Date().toISOString(),
    };
    actions.addReason(reason);
  };

  const handleApplyIntervention = () => {
    if (!state.taskWithStrike) return;
    actions.applyIntervention(state.taskWithStrike, {
      name: 'Strength training (Mon, Wed, Fri only)',
      frequency: 'weekly:Mon,Wed,Fri',
      duration: '45 min',
    });
    setShowStrike(false);
  };

  const renderScreen = () => {
    switch (state.step) {
      case 'intro':
        return <IntroScreen onStart={() => actions.setStep('pickArea')} />;

      case 'pickArea':
        return (
          <PickAreaScreen
            selectedArea={state.selectedArea}
            onPick={actions.pickArea}
            onContinue={() => actions.setStep('goalText')}
          />
        );

      case 'goalText':
        return (
          <GoalTextScreen
            selectedArea={state.selectedArea!}
            goalText={state.goalText}
            onChange={actions.setGoalText}
            onBack={() => actions.setStep('pickArea')}
            onContinue={() => actions.setStep('aiDialogue')}
          />
        );

      case 'aiDialogue':
        return (
          <AIDialogueScreen
            area={state.selectedArea!}
            goalText={state.goalText}
            messages={state.dialogueMessages}
            currentAnswer={state.currentAnswer}
            dialogueIndex={state.dialogueIndex}
            onAnswerChange={actions.setCurrentAnswer}
            onAddMessage={actions.addDialogueMessage}
            onAdvance={actions.advanceDialogue}
            onPlanReady={(goal) => {
              actions.setGoal(goal);
              actions.setStep('planReview');
            }}
          />
        );

      case 'planReview':
        return state.goal ? (
          <PlanReviewScreen
            goal={state.goal}
            onSave={() => actions.setStep('home')}
          />
        ) : null;

      case 'home':
        return state.goal ? (
          <HomeScreen
            goal={state.goal}
            priorities={state.priorities}
            completions={state.completions}
            taskWithStrike={state.taskWithStrike}
            strikeProcessed={state.strikeProcessed}
            onAddPriority={actions.addPriority}
            onTogglePriority={actions.togglePriority}
            onRemovePriority={actions.removePriority}
            onToggleTask={actions.toggleTask}
            onOpenStrike={() => setShowStrike(true)}
            onOpenCoach={() => setShowCoach(true)}
          />
        ) : null;

      case 'done':
        return (
          <DemoComplete
            onRestart={() => actions.reset()}
            onWaitlist={() => {
              if (onWaitlistClick) {
                onWaitlistClick();
              } else {
                // Navigate to landing waitlist
                const isProd = process.env.NODE_ENV === 'production';
                const prefix = isProd ? '/ascend-web' : '';
                window.location.href = `${prefix}/#waitlist`;
              }
            }}
          />
        );

      default:
        return null;
    }
  };

  const strikeTask = state.taskWithStrike && state.goal
    ? state.goal.plan.dailyTasks.find((t) => t.id === state.taskWithStrike)
    : null;

  // Detect when user has "completed" enough to show DONE
  useEffect(() => {
    if (state.step === 'home' && state.strikeProcessed) {
      // Count user actions: at least 1 task done OR 1 priority added OR strike resolved
      const hasInteracted = Object.keys(state.completions).length > 0 || state.priorities.length > 0 || state.chat.length > 0;
      if (hasInteracted && state.chat.length > 0) {
        const t = setTimeout(() => actions.setStep('done'), 1500);
        return () => clearTimeout(t);
      }
    }
  }, [state.step, state.strikeProcessed, state.completions, state.priorities.length, state.chat.length, actions]);

  return (
    <div className={embedded ? 'flex flex-col items-center' : 'flex flex-col items-center justify-center min-h-screen py-12 px-4'}>
      <div className="relative">
        <PhoneFrame tilt={!embedded}>
          {renderScreen()}

          {showStrike && strikeTask && (
            <StrikeModal
              task={strikeTask}
              onClose={() => setShowStrike(false)}
              onLogReason={handleLogReason}
              onApply={handleApplyIntervention}
            />
          )}

          {showCoach && (
            <CoachModal
              chat={state.chat}
              onClose={() => setShowCoach(false)}
              onAddMessage={actions.addChat}
            />
          )}
        </PhoneFrame>

        {state.step !== 'intro' && state.step !== 'done' && (
          <button
            onClick={() => actions.reset()}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-[11px] text-text-muted hover:text-accent transition-colors"
          >
            <RotateCcw size={11} />
            Restart demo
          </button>
        )}
      </div>
    </div>
  );
}
