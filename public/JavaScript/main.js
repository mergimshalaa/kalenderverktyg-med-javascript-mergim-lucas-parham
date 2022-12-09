window.addEventListener("DOMContentLoaded", main);

import { openToDos } from "./openToDos.js";
import { startClock } from "./startClock.js";
import { openAddEventWindow } from "./openAddEventWindow.js";

/**
 * Main function read when the program starts.
 */
function main() {
    addEventListeners();
    startClock();
}

/**
 * All eventListeners thoughtout the script.
 */
function addEventListeners() {
    const toDoDropdown = document.querySelector(".toDoDropdown");
    toDoDropdown.addEventListener("click", openToDos);


    const addEvent = document.querySelector(".addDayEvent");
    addEvent.addEventListener("click", openAddEventWindow);
    const closeAddEventWindow = document.querySelector(".fa-xmark");
    closeAddEventWindow.addEventListener("click", openAddEventWindow)
}

