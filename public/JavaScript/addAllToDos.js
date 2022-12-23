/**
 * A function that retrieves the saved tasks from LS and
 * displays them in the task list in the DOM.
 * Eventlisteners for editing and deleting tasks
 * and updates the todo count.
 */
function addAllToDos() {
  
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  
  //filterera ut taskList baserat på clicked date
  //använd filterande listan igenom funktionen

  if (!storedTasks) {
    return;
  }
  const taskList = document.getElementById("taskList");
  taskList.textContent = "";

  for (const task of storedTasks) {
    addToDoItem(task);
  }
}

/**
 * Updates the todo count of task list items
 * and displays this count in a element in the DOM.
 */
function updateTodoCount() {
  const todoCount = document.querySelectorAll(".task").length;
  document.querySelector("#todoCount").textContent = `${todoCount}`;
}
