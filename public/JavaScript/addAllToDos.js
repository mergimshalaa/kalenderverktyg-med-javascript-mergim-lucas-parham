/**
 * A function that renders the tasks from local storage.
 */
function addAllToDos() {
  
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));

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
