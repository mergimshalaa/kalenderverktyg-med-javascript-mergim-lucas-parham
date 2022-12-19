function addItemToDo() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  
  if (!storedTasks) {
    return;
  }
  const taskList = document.getElementById("taskList");
  taskList.textContent  = "";
  
  for ( const task of storedTasks ) {

    const taskInput = document.getElementById("taskInput");
    const dateInput = document.getElementById("dateTodo");

    const taskItem = document.createElement("div");
    taskItem.classList.add("task");
    
    const taskTextAndDateContainer = document.createElement("div");
    taskTextAndDateContainer.classList.add("content");
    
    const taskText = document.createElement("div");
    taskText.classList.add("taskText");
    
    const editTextInput = document.createElement("input");
    editTextInput.classList.add("editTextInput");

    const dateContainer = document.createElement("div");
    dateContainer.classList.add("dateContainer");

    const editDateInput = document.createElement("input");
    editDateInput.setAttribute("type", "date")
    editDateInput.classList.add("editDateInput");

    const taskActions = document.createElement("div");
    taskActions.classList.add("taskActions");

    const taskEdit = document.createElement("button");
    taskEdit.classList.add("edit");

    const deleteTask = document.createElement("i");
    deleteTask.classList.add("fa-solid", "fa-trash-can", "trash");
    
    taskActions.append(taskEdit, deleteTask);
    taskTextAndDateContainer.append(taskText, editTextInput, dateContainer, editDateInput);
    taskItem.append(taskTextAndDateContainer, taskActions);
    taskList.append(taskItem);

    taskText.textContent = task.taskTitle;
    dateContainer.textContent = task.date;
    taskEdit.textContent = "Edit";


    taskEdit.addEventListener("click", () => {
      const storedTasks = JSON.parse(localStorage.getItem("tasks"));
      taskEdit.textContent = "Save";
      taskText.style.display = "none";
      editTextInput.style.display = "flex";
      dateContainer.style.display = "none";
      editDateInput.style.display = "flex";
      
      taskEdit.addEventListener("click", () => {
        const task = storedTasks.find((task) => task.id === task.id);
        taskEdit.textContent = "Edit";
        task.taskTitle = editTextInput.value;
        task.date = editDateInput.value;
        
        localStorage.setItem("tasks", JSON.stringify(storedTasks));

        taskText.style.display = "flex";
        editTextInput.style.display = "none";
        dateContainer.style.display = "flex";
        editDateInput.style.display = "none";
        addItemToDo();
      })
    });


    // const task = document.getElementById("taskInput").value;

    // const dateTodo = document.getElementById("dateTodo").value;

    // const taskList = document.createElement("div");
    // taskList.classList.add("task");

    // const taskContent = document.createElement("div");
    // taskContent.classList.add("content");
    // taskList.append(taskContent);

    // const taskInput = document.createElement("input");
    // taskInput.classList.add("textInput");
    // taskInput.type = "text";
    // taskInput.value = task;
    // taskInput.setAttribute("readonly", "readonly");

    // const taskActions = document.createElement("div");
    // taskActions.classList.add("taskActions");

    // const taskEdit = document.createElement("button");
    // taskEdit.classList.add("edit");
    // taskEdit.innerText = "Edit";

    // const deleteTask = document.createElement("i");
    // deleteTask.classList.add("fa-solid", "fa-trash-can", "trash");

    // taskActions.append(taskEdit);
    // taskActions.append(deleteTask);
    // taskContent.append(taskInput, dateTodo);
    // taskList.append(taskActions);

    // document.getElementById("taskList").append(taskList);

    // taskEdit.addEventListener("click", () => {
    //   if (taskEdit.innerText.toLowerCase() == "edit") {
    //     taskEdit.innerText = "Save";
    //     taskInput.removeAttribute("readonly");
    //     taskInput.focus();
    //   } else {
    //     taskEdit.innerText = "Edit";
    //     taskInput.setAttribute("readonly", "readonly");
    //   }
    // });

    deleteTask.addEventListener("click", () => {
      const storedTasks = JSON.parse(localStorage.getItem("tasks"));
      const task = storedTasks.find((task) => task.id === task.id );
      storedTasks.splice(task, 1);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
      taskItem.remove();
      updateTodoCount();
    });
    updateTodoCount();
  }
}

function updateTodoCount() {
  const todoCount = document.querySelectorAll(".task").length;
  document.querySelector("#todoCount").textContent = `${todoCount}`;
}
