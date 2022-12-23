/**
 * Starting a interval for a digital clock.
 */
function startTimeAndDate() {
  setInterval(startClock, 1000);
}

/**
 * Firing functions for time, day and date.
 */
function startClock() {
  const now = new Date();
  const locale = "en";
  renderDate();
  renderTime(now, locale);
  renderWeekday();
}

/**
 * Displaying the current day of the week.
 */
function renderWeekday() {
  const weekday = new Date();
  const weekdayToString = weekday.toLocaleString("sv-SE", {
    weekday: "long",
  });
  const weekdayDiv = document.querySelector(".day");
  weekdayDiv.textContent = weekdayToString;
}

/**
 * Displaying the current date.
 */
function renderDate() {
  const date = new Date();
  const dateToString = date.toLocaleString("sv-SE", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const dateDiv = document.querySelector(".date");
  dateDiv.innerHTML = "";
  dateDiv.textContent = dateToString;
}

/**
 * Displaying the current time.
 * @param {newDate} today 
 * @param {Location} locale 
 */
function renderTime(today, locale) {
  const clock = document.querySelector(".time");
  const time = today.toTimeString(locale).split(" ")[0];
  clock.textContent = time;
}
