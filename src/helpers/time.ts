import moment from "moment";
export const renderDurationPassed = (time: string) => {
  const numOfYears = moment().diff(time, "years");
  const numOfMonths = moment().diff(time, "months");
  const numOfDays = moment().diff(time, "days");
  const numOfHours = moment().diff(time, "hours");
  const numOfMinutes = moment().diff(time, "minutes");
  const numOfSeconds = moment().diff(time, "seconds");
  if (numOfYears) return `${numOfYears} year ago`;
  if (numOfMonths) return `${numOfMonths} months ago`;
  if (numOfDays) return `${numOfDays} days ago`;
  if (numOfHours) return `${numOfHours} hours ago`;
  if (numOfMinutes) return `${numOfMinutes} minutes ago`;
  if (numOfSeconds) return `${numOfSeconds} seconds ago`;
  return "just now";
};
