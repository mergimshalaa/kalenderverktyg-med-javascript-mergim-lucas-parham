/**
 * A function that retrieves the saved tasks from LS and
 * displays them in the task list in the DOM.
 * Eventlisteners for editing and deleting tasks
 * and updates the todo count.
 */
function addItemToDo() {
  
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  
  //filterera ut taskList baserat på clicked date
  //använd filterande listan igenom funktionen

  if (!storedTasks) {
    return;
  }
  const taskList = document.getElementById("taskList");
  taskList.textContent = "";

  for (const task of storedTasks) {

    const taskInput = document.querySelector("#taskInput");
    const dateTodo = document.querySelector("#dateTodo");
    const addBtn = document.querySelector("#addToDo");

    const taskItem = document.createElement("li");
    taskItem.classList.add("task");

    const taskTextAndDateContainer = document.createElement("div");
    taskTextAndDateContainer.classList.add("content");

    const taskText = document.createElement("div");
    taskText.classList.add("taskText");

    const dateContainer = document.createElement("div");
    dateContainer.classList.add("dateContainer");

    const taskActions = document.createElement("div");
    taskActions.classList.add("taskActions");

    const taskEdit = document.createElement("button");
    taskEdit.classList.add("edit");
    taskEdit.setAttribute("data-cy", "edit-todo-button");

    const deleteTask = document.createElement("i");
    deleteTask.classList.add("fa-solid", "fa-trash-can", "trash");
    deleteTask.setAttribute("data-cy", "delete-todo-button");

    taskActions.append(taskEdit, deleteTask);
    taskTextAndDateContainer.append(
      taskText,
      dateContainer,
    );
    taskItem.append(taskTextAndDateContainer, taskActions);
    taskList.append(taskItem);

    taskText.textContent = task.taskTitle;
    dateContainer.textContent = task.date;
    taskEdit.textContent = "Edit";

    
    displayCalendar();

    taskEdit.addEventListener("click", () => {
      const storedTasks = JSON.parse(localStorage.getItem("tasks"));
      addBtn.innerText = "Save";
      taskText.style.display = "none";
      dateContainer.style.display = "none";


      addBtn.addEventListener("click", () => {
        const task = storedTasks.find((task) => task.id === task.id);
        addBtn.textContent = "Add";
        task.taskTitle = taskInput.value;
        task.date = dateTodo.value;

        localStorage.setItem("tasks", JSON.stringify(storedTasks));

        taskText.style.display = "flex";
        dateContainer.style.display = "flex";

        addItemToDo();
        displayCalendar();
        
      });
    });
    
    deleteTask.addEventListener("click", () => {
      const storedTasks = JSON.parse(localStorage.getItem("tasks"));
      debugger;
      const filterdTasks = storedTasks.filter((t) => t.id !== task.id);
      
      localStorage.setItem("tasks", JSON.stringify(filterdTasks));
        
      updateTodoCount();
      displayCalendar();
      addItemToDo();
    });
    updateTodoCount();
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
