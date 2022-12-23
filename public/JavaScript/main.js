/**
 * Main function firing upon starting the page.
 */
function main() {
  startTimeAndDate();
  displayCalendar();
  changeMonthView();
  addEventListeners();
  addAllToDos();
}

/**
 * EventListeners thoughout the script.
 */
function addEventListeners() {
  document.querySelector("#addToDo").addEventListener("click", () => {
    addToDoToLS();
    addAllToDos();
  });
  document.querySelector(".burgerMenu").addEventListener("click", toggleAside);
  document.querySelector(".showAll").addEventListener("click", showAllTasks)
}
