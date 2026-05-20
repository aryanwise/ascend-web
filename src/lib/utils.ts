export const todayStr = (): string => new Date().toISOString().slice(0, 10);

export function formatFrequency(freq: string): string {
  if (!freq || freq === 'daily') return 'Every day';
  if (freq.startsWith('weekly:')) {
    const part = freq.split(':')[1];
    if (/^\d+x$/.test(part)) return `${part} per week`;
    return part.split(',').join(', ');
  }
  return freq;
}

export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
