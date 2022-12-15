
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

function renderWeekday() {
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