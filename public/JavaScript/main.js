window.addEventListener("DOMContentLoaded", main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    const toDoDropdown = document.querySelector(".toDoDropdown");
    toDoDropdown.addEventListener("click", openToDos);
}

function openToDos() {
    const toDoItemList = document.querySelector(".toDoItemList");
    toDoItemList.classList.toggle("displayBlock");
}

