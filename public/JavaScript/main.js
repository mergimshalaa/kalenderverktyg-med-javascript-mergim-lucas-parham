
function main() {
  startTimeAndDate();
  displayCalendar();
  changeMonthView();
  addEventListeners();
  addItemToDo();
}

function addEventListeners() {
  document.querySelector("#addToDo").addEventListener("click", () => {
    addToDoToLS();
    addItemToDo();
  })
}
