export function getFormattedDate(date) {
  // Ensure month and day are always two digits
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${date.getFullYear()}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
}

export function getDateMinusDays(date, days) {
  // Create a new Date object by subtracting days from the original date
  const result = new Date(date);
  result.setDate(date.getDate() - days);
  return result;
}
