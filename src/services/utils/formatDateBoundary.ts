type BoundaryType = 'BEGIN' | 'END';

export function formatDateBoundary(dateStr: string, type: BoundaryType): string {
  const [year, month, day] = dateStr.split('-').map(Number);

  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (type === 'END') {
    hours = 23;
    minutes = 59;
    seconds = 59;
  }

  const utcDate = new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds));

  return utcDate.toISOString();
}