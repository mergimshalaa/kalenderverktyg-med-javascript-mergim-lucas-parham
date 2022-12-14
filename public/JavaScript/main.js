
import { startTimeAndDate } from "./startTimeAndDate.js";
import { displayCalendar } from "./displayCalendar.js";
import { changeMonthView } from "./displayCalendar.js";

window.addEventListener('DOMContentLoaded', main);

function main() {
    startTimeAndDate();
    displayCalendar();
    changeMonthView();
}