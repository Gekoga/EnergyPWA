export function extractLocalDateString(dateTime: Date) {
  const dateString = replaceSeperatorsWithSpaceInDate(dateTime);
  return dateString.split(" ").reverse().join("-");
}

function replaceSeperatorsWithSpaceInDate(dateTime: Date) {
  const seperatorRegex: RegExp = /[-/]/gi;
  return dateTime.toLocaleDateString().replace(seperatorRegex, " ");
}
