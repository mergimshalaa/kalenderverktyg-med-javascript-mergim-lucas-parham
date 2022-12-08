window.addEventListener("DOMContentLoaded", main);

import { openToDos } from "./openToDos.js";
import { startClock } from "./startClock.js";

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
}