function main() {
  startTimeAndDate();
  displayCalendar();
  changeMonthView();
  addEventListeners();
  addAllToDos();
}

function addEventListeners() {
  document.querySelector("#addToDo").addEventListener("click", () => {
    addToDoToLS();
    addAllToDos();
  });
  document.querySelector(".burgerMenu").addEventListener("click", toggleAside);
  document.querySelector(".showAll").addEventListener("click", showAllTasks)
}
