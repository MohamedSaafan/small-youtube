import moment, { ISO_8601 } from "moment";
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

const extractNumOfItemFromISO_8601 = (
  ISO_8601_time: string,
  item: "H" | "M" | "S"
) => {
  let numOfItems = ISO_8601_time.match(new RegExp(`\\d+${item}`, "i"));
  console.log(numOfItems, ISO_8601_time);
  if (numOfItems) return numOfItems[0].substring(0, numOfItems[0].length - 1);
};

export const renderVideoDuration = (ISO_8601_time: string) => {
  const numOfHours = extractNumOfItemFromISO_8601(ISO_8601_time, "H");
  const numOfMinutes = extractNumOfItemFromISO_8601(ISO_8601_time, "M");
  const numOfSeconds = extractNumOfItemFromISO_8601(ISO_8601_time, "S");
  if (numOfHours) return `${numOfHours}:${numOfMinutes}:${numOfSeconds}`;
  if (!numOfSeconds) return ``;
  if (!numOfMinutes) return `00:${numOfSeconds}`;

  return `${numOfMinutes}:${numOfSeconds}`;
};
export const isNew = (time: string) => {
  const numOfHours = moment().diff(time, "hours");
  const numOfDays = moment().diff(time, "days");

  if (numOfHours < 24 || numOfDays <= 2) return true;
  return false;
};
