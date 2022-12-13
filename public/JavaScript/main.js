window.addEventListener('DOMContentLoaded', main);


function main() {
    startTimeAndDate();
}

const userLocation = navigator.language;

function startTimeAndDate() {
    setInterval(startClock, 1000);
}

function startClock() {
    const currently = new Date();
    const locale = "en";
    updateDate();
    updateTime(currently, locale);
    updateWeekday();
}

function updateWeekday() {
    const weekday = new Date();
    const weekdayToString = weekday.toLocaleString(userLocation, {
        weekday: "long",
    }).toUpperCase();
    const weekdayDiv = document.querySelector(".day");
    weekdayDiv.textContent = weekdayToString;
}

function updateDate() {
    const date = new Date();
    const dateToString = date.toLocaleString(userLocation, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    });
    const dateDiv = document.querySelector(".date");
    dateDiv.innerHTML = "";
    dateDiv.textContent = dateToString
}

function updateTime(today, locale) {
    const clock = document.querySelector(".time")
    const time = today.toTimeString(locale).split(" ")[0];
    clock.textContent = time;
 }