export interface Task {
  id: string;
  name: string;
  frequency: string;
  duration?: string;
  category?: string;
  intervened?: boolean;
}

export interface Milestone {
  week: number;
  title: string;
  metric?: string;
}

export interface Plan {
  title: string;
  summary: string;
  duration: string;
  milestones: Milestone[];
  dailyTasks: Task[];
  tips: string[];
}

export interface Goal {
  id: string;
  area: AreaId;
  title: string;
  plan: Plan;
  paused?: boolean;
  createdAt: string;
}

export type AreaId = 'fitness' | 'study' | 'diet' | 'career' | 'mind' | 'money' | 'health' | 'habits' | 'custom';

export interface Area {
  id: AreaId;
  label: string;
  color: string;
  soft: string;
  emoji: string;
}

export interface Priority {
  id: string;
  text: string;
  done: boolean;
  rank: number;
}

export interface Reason {
  id: string;
  goalId: string;
  taskId: string;
  taskName: string;
  tags: string[];
  note: string;
  createdAt: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface StrikeData {
  goal: Goal;
  task: Task;
  count: number;
}

export interface Intervention {
  type: 'modify' | 'pause' | 'remove';
  message: string;
  rationale: string;
  changes?: {
    name?: string;
    frequency?: string;
    duration?: string;
  };
  days?: number;
}

export type DemoStep =
  | 'intro'
  | 'pickArea'
  | 'goalText'
  | 'aiDialogue'
  | 'planReview'
  | 'home'
  | 'strike'
  | 'coach'
  | 'done';

export interface DialogueMessage {
  role: 'user' | 'assistant';
  content: string;
}

export type Voice = 'drill' | 'strategist' | 'balanced';
