function addItemToDo() {
  document.querySelector("#addToDo").addEventListener("click", () => {
    const task = document.getElementById("taskInput").value;
    const dateTodo = document.getElementById("dateTodo").value;
    
    const li = document.createElement("li");

    const editIcon = document.createElement("i");
    editIcon.classList.add("fa-solid", "fa-pencil", "editPen");
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash-can", "trash");

    const div = document.createElement("div");
    div.classList.add("container-icon");

    div.append(editIcon, deleteIcon);

    document.getElementById("tasks").append(li);

    deleteIcon.addEventListener("click", () => {
      removeItemToDo(li);
    });

    li.innerText = task;
    li.append(dateTodo, div);
  });
}

function removeItemToDo(item) {
  item.remove();
}
