/**
 * Function creating a todo item and displaying it in the DOM.
 * Also functions to edit and delete tasks.
 * @param {} task 
 */
function addToDoItem (task) {
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

        addAllToDos();
        displayCalendar();
        
      });
    });
    
    deleteTask.addEventListener("click", () => {
      const storedTasks = JSON.parse(localStorage.getItem("tasks"));
      const filterdTasks = storedTasks.filter((t) => t.id !== task.id);
      
      localStorage.setItem("tasks", JSON.stringify(filterdTasks));
        
      updateTodoCount();
      displayCalendar();
      addAllToDos();
    });

    updateTodoCount();
}