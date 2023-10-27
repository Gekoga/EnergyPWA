export function extractDateString(dateTime: Date) {
  return dateTime.toISOString().split("T", 1)[0];
}