export function extractLocalDateString(dateTime: Date) {
  return dateTime.toLocaleDateString().split("-").reverse().join("-");
}
