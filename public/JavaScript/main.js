window.addEventListener("DOMContentLoaded", main);

import { openAddEventWindow } from "./openAddEventWindow.js";
function main() {
    addEventListeners();
}

function addEventListeners() {
    const toDoDropdown = document.querySelector(".toDoDropdown");
    toDoDropdown.addEventListener("click", openToDos);


    const addEvent = document.querySelector(".addDayEvent");
    addEvent.addEventListener("click", openAddEventWindow);
}


function openToDos() {
    const toDoItemList = document.querySelector(".toDoItemList");
    toDoItemList.classList.toggle("displayBlock");
}

