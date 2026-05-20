import type { Plan, AreaId } from '@/types';

// Pre-written 5-question dialogue per area
export const DIALOGUE_SCRIPTS: Record<AreaId, string[]> = {
  fitness: [
    "What's your starting point right now — your current weight, fitness level, or relevant health context?",
    "How many hours per week can you realistically dedicate to this without burning out?",
    "Have you tried this before? What made it stick or fall apart last time?",
    "When during the day do you have the most energy — morning, midday, or evening?",
    'When you imagine succeeding at this 12 weeks from now, what does "success" actually look like for you?',
  ],
  study: [
    'What\'s your current level with this subject — total beginner, refresher, or building on existing knowledge?',
    'How many hours per week can you genuinely commit, factoring in work and other obligations?',
    'Have you tried learning this before? What stopped the previous attempts from sticking?',
    'When are you sharpest — early morning, focused afternoon, or quiet evening sessions?',
    'What does "I made it" look like — passing an exam, building a project, getting hired, or something else?',
  ],
  diet: [
    'How would you describe your current eating patterns honestly — not what you wish, but what actually happens?',
    'What are the hard constraints — allergies, conditions, family meals, eating out for work?',
    'Have you tried changing your diet before? What worked briefly and what made you stop?',
    'When are you most likely to slip — late-night cravings, stress eating, weekends, social pressure?',
    'How will you know this is working — a number on the scale, energy levels, blood markers, how you feel?',
  ],
  career: [
    'Where are you right now in your career and where specifically do you want to be in 12 months?',
    'How many hours per week can you spend on career growth outside your current job?',
    'Have you tried this kind of career move before? What slowed it down?',
    'When is your best time for deep work — before work, lunch, after work, weekends?',
    'When you imagine landing this, what specifically changes — title, money, work type, freedom?',
  ],
  mind: [
    'What\'s the current state — daily stress, anxiety, lack of focus, or something more specific?',
    'How much time per day are you willing to invest in mental practices realistically?',
    'Have you tried meditation, therapy, journaling before? What worked and what didn\'t stick?',
    'When do you most need this — morning anchor, midday reset, evening wind-down?',
    'What does mental clarity look like for you — fewer racing thoughts, better sleep, more presence?',
  ],
  money: [
    "What's your current financial picture — savings, income, biggest expense, debt situation?",
    'How much can you realistically save or invest each month without affecting essentials?',
    'Have you tried budgeting or saving systems before? What made them break down?',
    'What triggers your impulsive spending — stress, social, boredom, late-night browsing?',
    'What does financial freedom look like — emergency fund, debt-free, FIRE, specific number?',
  ],
  health: [
    'What\'s the health concern you\'re working on — sleep, energy, a specific condition, general vitality?',
    'How much do you sleep on a typical week night, and how does that compare to weekends?',
    'Have you tried fixing this before? What made the changes hard to sustain?',
    'What time of day do you feel worst — the dip that tells you something needs to change?',
    'When you imagine being healthier, what specifically is different about your daily life?',
  ],
  habits: [
    'Which specific habit are you trying to build or break, and why now?',
    'How many minutes per day, minimum, can you commit to this without it feeling like a chore?',
    'Have you tried building this habit before? How long did it last and why did it stop?',
    'When in your day does this habit naturally fit — morning ritual, post-work, before bed?',
    'How will you know this habit is locked in — a streak, a feeling, an external result?',
  ],
  custom: [
    'Describe what you\'re trying to do in your own words, including why it matters to you.',
    'How much time per week can you realistically dedicate?',
    'Have you attempted something similar before? What were the lessons?',
    'When during the week are you most likely to follow through?',
    'How will you know you\'ve succeeded — what specifically will be different?',
  ],
};

// Pre-written goal plans per area
export const PLAN_TEMPLATES: Record<AreaId, Plan> = {
  fitness: {
    title: 'Sustainable strength build',
    summary: "A realistic 12-week plan that respects your energy patterns and constraints. Focus is consistency over intensity — you'll build a base that compounds.",
    duration: '12 weeks',
    milestones: [
      { week: 4, title: 'Movement foundation', metric: 'Complete all sessions for 3 consecutive weeks' },
      { week: 8, title: 'Progressive overload', metric: 'Increase intensity 15% from baseline' },
      { week: 12, title: 'Embedded routine', metric: "Workouts feel non-negotiable, not optional" },
    ],
    dailyTasks: [
      { id: 'fit-1', name: 'Hit 8k steps', frequency: 'daily', duration: 'throughout day', category: 'habit' },
      { id: 'fit-2', name: 'Strength training session', frequency: 'weekly:3x', duration: '45 min', category: 'workout' },
      { id: 'fit-3', name: 'Mobility / stretching', frequency: 'daily', duration: '10 min', category: 'habit' },
      { id: 'fit-4', name: 'Log food intake', frequency: 'daily', duration: '5 min', category: 'nutrition' },
    ],
    tips: [
      'On low-energy days, do a 15-minute walk instead of skipping entirely. Showing up matters more than intensity.',
      "Schedule your hardest workouts on your highest-energy days — don't fight your biology.",
      'Track recovery, not just performance. Bad sleep = lighter session, not no session.',
    ],
  },
  study: {
    title: 'Deep focus learning sprint',
    summary: 'Built for a working professional with limited evening hours. Concentrates on active recall and project-based learning over passive reading.',
    duration: '10 weeks',
    milestones: [
      { week: 3, title: 'Foundation locked', metric: 'Core concepts explained without notes' },
      { week: 6, title: 'First real project', metric: 'Ship something using what you learned' },
      { week: 10, title: 'Practice-ready', metric: 'Pass mock exam or complete capstone' },
    ],
    dailyTasks: [
      { id: 'study-1', name: 'Active study session', frequency: 'weekly:Mon,Tue,Wed,Thu,Fri', duration: '45 min', category: 'study' },
      { id: 'study-2', name: 'Practice problems', frequency: 'weekly:3x', duration: '30 min', category: 'study' },
      { id: 'study-3', name: 'Weekly review notes', frequency: 'weekly:Sun', duration: '20 min', category: 'study' },
      { id: 'study-4', name: 'Read one article', frequency: 'daily', duration: '10 min', category: 'habit' },
    ],
    tips: [
      "After a long workday, don't try to learn new concepts — review what you already know. Save new material for weekend mornings.",
      'Teach what you learned to someone (or pretend to). If you can\'t explain it simply, you don\'t know it yet.',
      'Track problems you got wrong. Revisit them after a week, not the next day.',
    ],
  },
  diet: {
    title: 'Real-life nutrition reset',
    summary: 'Designed around your actual life — not a meal plan you\'ll abandon in 4 days. Focuses on principles, not restriction.',
    duration: '8 weeks',
    milestones: [
      { week: 2, title: 'Habit stack formed', metric: 'Eating windows feel automatic' },
      { week: 4, title: 'Mid-point check', metric: 'Energy and digestion noticeably better' },
      { week: 8, title: 'Sustainable rhythm', metric: 'Eat well without thinking about it' },
    ],
    dailyTasks: [
      { id: 'diet-1', name: 'Protein-first breakfast', frequency: 'daily', duration: '15 min', category: 'nutrition' },
      { id: 'diet-2', name: 'Drink 2-3L water', frequency: 'daily', duration: 'throughout day', category: 'habit' },
      { id: 'diet-3', name: 'Meal prep session', frequency: 'weekly:Sun', duration: '60 min', category: 'nutrition' },
      { id: 'diet-4', name: 'No food after 8pm', frequency: 'daily', duration: 'discipline', category: 'habit' },
    ],
    tips: [
      "Don't ban anything. Restriction creates rebound. Just add more of what you want to eat more of.",
      'Eat before social events. Hungry-you at a restaurant makes worse choices than satisfied-you.',
      'Track only what you eat, not calories. Awareness changes behavior more than math does.',
    ],
  },
  career: {
    title: 'Strategic career leverage',
    summary: 'Focus shifts from "more hours" to "compounding moves" — visible work, network surface area, and skill differentiation.',
    duration: '16 weeks',
    milestones: [
      { week: 4, title: 'Skill signal established', metric: 'Public proof of one new capability' },
      { week: 8, title: 'Network expansion', metric: '5 meaningful new conversations' },
      { week: 16, title: 'Position improved', metric: 'Offer, promotion, or significantly increased leverage' },
    ],
    dailyTasks: [
      { id: 'car-1', name: 'Deep work block', frequency: 'weekly:Mon,Wed,Fri', duration: '90 min', category: 'study' },
      { id: 'car-2', name: 'Outreach (1 message)', frequency: 'daily', duration: '10 min', category: 'habit' },
      { id: 'car-3', name: 'Ship something public', frequency: 'weekly:1x', duration: '2 hr', category: 'other' },
      { id: 'car-4', name: 'Weekly career review', frequency: 'weekly:Sun', duration: '20 min', category: 'other' },
    ],
    tips: [
      "Visible work compounds. One LinkedIn post a week beats five private wins your manager doesn't see.",
      'Ask for help before you need it. Building the network during good times costs nothing.',
      "Track outcomes, not activity. 'Sent 50 emails' isn't a metric. 'Got 3 calls' is.",
    ],
  },
  mind: {
    title: 'Grounded daily practice',
    summary: 'A minimalist approach to mental practice — built to survive the days when you don\'t feel like doing it. That\'s the whole point.',
    duration: '8 weeks',
    milestones: [
      { week: 2, title: 'Daily anchor established', metric: 'Practice happens without willpower' },
      { week: 4, title: 'Noticing patterns', metric: 'Can name triggers before reactions' },
      { week: 8, title: 'Embedded calm', metric: 'Equanimity holds under stress' },
    ],
    dailyTasks: [
      { id: 'mind-1', name: 'Morning meditation', frequency: 'daily', duration: '10 min', category: 'habit' },
      { id: 'mind-2', name: 'Evening journal entry', frequency: 'daily', duration: '5 min', category: 'habit' },
      { id: 'mind-3', name: 'Phone-free walk', frequency: 'weekly:3x', duration: '20 min', category: 'habit' },
      { id: 'mind-4', name: 'Weekly reflection', frequency: 'weekly:Sun', duration: '15 min', category: 'habit' },
    ],
    tips: [
      "On busy days, 2 minutes counts. Skipping entirely breaks the chain — short still keeps it.",
      'Notice the resistance. The day you don\'t want to do it is the day it works most.',
      'No clearing your mind. The practice is noticing thoughts, not having none.',
    ],
  },
  money: {
    title: 'Build the financial floor',
    summary: 'Practical money system focused on automation and behavior, not budgeting apps you\'ll stop opening in two weeks.',
    duration: '12 weeks',
    milestones: [
      { week: 3, title: 'Visibility established', metric: 'Know where money actually goes' },
      { week: 6, title: 'Buffer building', metric: 'Emergency fund growing automatically' },
      { week: 12, title: 'System on autopilot', metric: 'Money decisions happen without thinking' },
    ],
    dailyTasks: [
      { id: 'mon-1', name: 'Check accounts (2 min)', frequency: 'daily', duration: '2 min', category: 'habit' },
      { id: 'mon-2', name: 'No-spend evaluation', frequency: 'daily', duration: '1 min', category: 'habit' },
      { id: 'mon-3', name: 'Weekly money review', frequency: 'weekly:Sun', duration: '20 min', category: 'other' },
      { id: 'mon-4', name: 'Move money to savings', frequency: 'weekly:Fri', duration: '5 min', category: 'habit' },
    ],
    tips: [
      "Automate the savings transfer for the day after payday. If it's in checking, you'll spend it.",
      'Track recurring subscriptions monthly. The slow drain is invisible until you look.',
      "Don't optimize before automating. Boring works better than clever.",
    ],
  },
  health: {
    title: 'Foundational health repair',
    summary: 'Targets the leverage points — sleep, sunlight, movement — that affect everything else. Boring on purpose.',
    duration: '10 weeks',
    milestones: [
      { week: 3, title: 'Sleep stabilized', metric: 'Same sleep/wake times 5+ days a week' },
      { week: 6, title: 'Energy compound', metric: 'Afternoon dips noticeably milder' },
      { week: 10, title: 'Baseline reset', metric: 'Bloodwork and energy markers improved' },
    ],
    dailyTasks: [
      { id: 'hth-1', name: 'In bed by 10:30pm', frequency: 'daily', duration: 'discipline', category: 'habit' },
      { id: 'hth-2', name: 'Morning sunlight (10 min)', frequency: 'daily', duration: '10 min', category: 'habit' },
      { id: 'hth-3', name: 'No screens 30 min before bed', frequency: 'daily', duration: '30 min', category: 'habit' },
      { id: 'hth-4', name: 'Walk after lunch', frequency: 'daily', duration: '15 min', category: 'habit' },
    ],
    tips: [
      'Sleep is the foundation. If you fix nothing else, fix this. Everything compounds from there.',
      "Don't try to do all four habits at once. Start with bedtime. The rest gets easier.",
      'Track energy on a 1-10 scale daily. Patterns appear in 2 weeks you didn\'t see in a year.',
    ],
  },
  habits: {
    title: 'One habit, fully installed',
    summary: 'The plan that protects you from yourself. Tiny inputs, daily check-in, and a single anchor you can\'t skip.',
    duration: '8 weeks',
    milestones: [
      { week: 2, title: 'Trigger locked', metric: 'Habit happens reliably after the cue' },
      { week: 4, title: 'Streak compounding', metric: '21+ day streak active' },
      { week: 8, title: 'Identity shift', metric: '"I am someone who does this"' },
    ],
    dailyTasks: [
      { id: 'hab-1', name: 'Do the habit (minimum dose)', frequency: 'daily', duration: '5 min', category: 'habit' },
      { id: 'hab-2', name: 'Log it (one tap)', frequency: 'daily', duration: '10 sec', category: 'habit' },
      { id: 'hab-3', name: 'Weekly streak check', frequency: 'weekly:Sun', duration: '5 min', category: 'habit' },
    ],
    tips: [
      "Stack the habit on an existing routine. After morning coffee, before opening email. Don't rely on memory.",
      "When you miss a day, never miss two. One slip is a glitch. Two is a new pattern.",
      'Make the minimum dose embarrassingly small. The win is consistency, not intensity.',
    ],
  },
  custom: {
    title: 'Your custom plan',
    summary: 'A flexible structure built around the specific goal and constraints you described.',
    duration: '10 weeks',
    milestones: [
      { week: 3, title: 'Foundation laid', metric: 'Daily habit established' },
      { week: 6, title: 'Visible progress', metric: 'Tangible signs of movement' },
      { week: 10, title: 'Goal achieved', metric: 'Success criteria met' },
    ],
    dailyTasks: [
      { id: 'cus-1', name: 'Daily focused work', frequency: 'daily', duration: '30 min', category: 'other' },
      { id: 'cus-2', name: 'Weekly review', frequency: 'weekly:Sun', duration: '15 min', category: 'other' },
      { id: 'cus-3', name: 'Track one metric', frequency: 'daily', duration: '2 min', category: 'habit' },
    ],
    tips: [
      'Define what "done" looks like in the first week — vague goals stay vague.',
      "Find one other person doing something similar. Loneliness kills consistency.",
      'Review weekly, not daily. Daily review is anxious. Weekly review is strategic.',
    ],
  },
};

// Pre-written coach responses keyed by intent
export const COACH_RESPONSES = {
  pattern: "Looking at your last week — you completed mornings consistently but skipped two evening tasks. That's data, not failure. Your energy peaks early. Consider front-loading harder work and treating evenings as recovery, not productivity.",
  stuck: "Stuck is information. It usually means the next step is unclear, not that you're lazy. Pick the smallest possible action you could take in the next 5 minutes — open the file, send the email, put on the shoes. That's the whole job for now.",
  tired: "Tired is a signal, not a problem to push through. Today, do the minimum version of one thing — a 10-minute walk instead of a workout, one paragraph instead of a chapter. Showing up small is what builds the streak. Rest is part of the plan.",
  goal: "What you want to build matters less than how honestly you describe your constraints. Ascend works because the plan is built around your real schedule, your real energy, your real history of what stuck. Tell me yours.",
  motivation: "Motivation is unreliable. Systems and identity are reliable. Don't ask 'do I feel like it?' — ask 'what would the person I'm becoming do right now?' That question removes the emotion. The action follows.",
  default: "Tell me what's actually happening. Not what you think you should say — what's true. The coaching gets better when the input gets honest.",
} as const;

export type CoachIntent = keyof typeof COACH_RESPONSES;

export function classifyCoachInput(input: string): CoachIntent {
  const lower = input.toLowerCase();

  if (/pattern|notice|see|trend|insight|analy|why am i/.test(lower)) return 'pattern';
  if (/stuck|frozen|can't start|paralyz|procrastinat|don't know how|where do i/.test(lower)) return 'stuck';
  if (/tired|exhausted|burned|burnt|drain|low energy|no energy|spent/.test(lower)) return 'tired';
  if (/new goal|start|begin|first goal|how should i goal|set goal/.test(lower)) return 'goal';
  if (/motivation|motivated|don't feel|don't want|why bother|inspire/.test(lower)) return 'motivation';

  return 'default';
}

// Strike intervention proposal (pre-written)
export const STRIKE_PROPOSAL = {
  message:
    "Two misses in a row on this task is a clear signal — the plan needs to flex. You've cited 'tired' as the main reason, which makes sense for a daily task scheduled in the morning. Let's drop the frequency from daily to 3x per week and move it to your higher-energy days.",
  rationale: 'Reducing frequency turns a struggling daily task into an achievable weekly cadence — protects momentum without abandoning the goal.',
  changes: {
    name: 'Strength training (Mon, Wed, Fri only)',
    frequency: 'weekly:Mon,Wed,Fri',
    duration: '45 min',
  },
};
