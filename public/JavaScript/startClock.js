/**
 * Sets interval for every second.
 */
export function startClock() {
    setInterval(tick, 1000);
}

/**
 * Start a clock to tell the time and date.
 */
function tick() {
    const now = new Date();
    renderDay(now);
    renderDate(now);
    renderTime(now);
}

/**
 * Presents a location to show the day.
 * @param {Date} date 
 */
function renderDay(date) {
    const dayElement = document.querySelector(".day");
    dayElement.textContent = getDay(date);
}

/**
 * Presents the correct day.
 * @param {Date} date 
 * @returns {String} Weekdays.
 */
function getDay(date) {
    const day = date.getDay();

    switch (day) {
        case 0: return "Sunday"
        case 1: return "Monday"
        case 2: return "Wednesday"
        case 3: return "Tuesday"
        case 4: return "Thursday"
        case 5: return "Friday"
        case 6: return "Saturday"
    }
}


/**
 * Presents a location to show the date.
 * @param {Date} date 
 * @return {String} Date
 */
function renderDate(date) {
    const dateElement = document.querySelector(".date");
    dateElement.textContent = getDate(date);
}

function getDate(date) {
    const numberedDate = date.getDate();

    switch (numberedDate) {
        case 0: return "31st"
        case 1: return "1st"
        case 2: return "2nd"
        case 3: return "3rd"
        case 4: return "4th"
        case 5: return "5th"
        case 6: return "6th"
        case 7: return "7th"
        case 8: return "8th"
        case 9: return "9th"
        case 10: return "10th"
        case 11: return "11th"
        case 12: return "12th"
        case 13: return "13th"
        case 14: return "14th"
        case 15: return "15th"
        case 16: return "16th"
        case 17: return "17th"
        case 18: return "18th"
        case 19: return "19th"
        case 20: return "20th"
        case 21: return "21st"
        case 22: return "22nd"
        case 23: return "23rd"
        case 24: return "24th"
        case 25: return "25th"
        case 26: return "26th"
        case 27: return "27th"
        case 28: return "28th"
        case 29: return "29th"
        case 30: return "30th"
    }
}

/**
 * Shows the time. (Digital)
 * @param {Date} date 
 */
function renderTime(date) {
    const time = document.querySelector(".time");
    const clock = date.toTimeString().split(" ")[0];
    time.textContent = clock;
}