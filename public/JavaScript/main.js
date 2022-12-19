
function main() {
  startTimeAndDate();
  displayCalendar();
  changeMonthView();
  addItemToDo();
  addEventListeners();
}

function addEventListeners() {
  document.querySelector("#addToDo").addEventListener("click", () => {
    console.log("asd")
    addItemToDo();
    addToLocalStorage();
  });
}
