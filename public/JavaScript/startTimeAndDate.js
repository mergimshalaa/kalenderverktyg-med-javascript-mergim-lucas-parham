
function startTimeAndDate() {
    setInterval(startClock, 1000);
}

function startClock() {
    const now = new Date();
    const locale = "en";
    renderDate();
    renderTime(now, locale);
    renderWeekday();
}

function renderWeekday() {window.addEventListener('DOMContentLoaded', main);

async function main() {
  const dates = await fetchLastFiveMidsummerDays();
  renderMidsummerDates(dates);
}

function renderMidsummerDates(dates) {
  const listElements = dates.map(date => {
    const li = document.createElement('li');
    li.textContent = date;
    return li;
  })
  const ul = document.querySelector('ul');
  ul.append(...listElements);
 }

async function fetchLastFiveMidsummerDays() {
  const currentYear = new Date().getFullYear();

  const midsummerDates = [];
  for (let year = currentYear; year > currentYear - 5; year--) {
    const midsummerDate = await fetchMidsummerDay(year);
    midsummerDates.push(midsummerDate);
  }
  return midsummerDates;
}

async function fetchMidsummerDay(year) {
  const url = `https://sholiday.faboul.se/dagar/v2.1/${year}/01-12`;
  const response = await fetch(url);
  const result = await response.json();

  for (const day of result.dagar) {
    if (day.helgdag === "Midsommarafton") {
      return day.datum
    }
  }
}
    const weekday = new Date();
    const weekdayToString = weekday.toLocaleString("sv-SE", {
        weekday: "long",
    });
    const weekdayDiv = document.querySelector(".day");
    weekdayDiv.textContent = weekdayToString;
}

function renderDate() {
    const date = new Date();
    const dateToString = date.toLocaleString("sv-SE", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    });
    const dateDiv = document.querySelector(".date");
    dateDiv.innerHTML = "";
    dateDiv.textContent = dateToString
}

function renderTime(today, locale) {
    const clock = document.querySelector(".time")
    const time = today.toTimeString(locale).split(" ")[0];
    clock.textContent = time;
 }