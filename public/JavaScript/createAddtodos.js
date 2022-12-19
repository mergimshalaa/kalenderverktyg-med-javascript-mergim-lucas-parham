function addItemToDo() {
  const tasksInStorage = JSON.parse(localStorage.getItem("tasks"));

  if ( !tasksInStorage ) {
    return
  }
  
  const taskList = document.querySelector("#tasks");
  taskList.textContent = "";

  for ( const item of tasksInStorage ) {
    const task = document.getElementById("taskInput").value;
    const dateTodo = document.getElementById("dateTodo").value;
    
    const li = document.createElement("li");

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash-can", "trash");

    const div = document.createElement("div");
    div.classList.add("container-icon");


    document.getElementById("tasks").append(li);

    li.innerText = task;
    li.append(dateTodo, deleteIcon);
    
    deleteIcon.addEventListener("click", () => {
      const storedArray = JSON.parse(localStorage.getItem("tasks"));
      const taskItem = storedArray.find(task => task.id === item.id)

      storedArray.splice(taskItem, 1);
      localStorage.setItem("tasks", JSON.stringify(storedArray));
      removeItemToDo(li);
    });
      
  }
}

function removeItemToDo(item) {
  item.remove();
}
