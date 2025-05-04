export function formatDurationToMinutes(duration: string): string {
  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?/;
  const matches = duration.match(regex) ?? [];

  const hours = matches[1] ? parseInt(matches[1]) : 0;
  const minutes = matches[2] ? parseInt(matches[2]) : 0;

  return `${hours * 60 + minutes} мин`;
}
