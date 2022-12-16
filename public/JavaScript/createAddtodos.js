function addItemToDo() {
  document.querySelector("#addToDo").addEventListener("click", () => {
    const task = document.getElementById("taskInput").value;
    const li = document.createElement("li");

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash-can", "trash");

    const div = document.createElement("div");
    div.classList.add("container-icon");

    document.getElementById("tasks").append(li);

    deleteIcon.addEventListener("click", () => {
      removeItemToDo(li);
    });

    li.innerText = task;
    li.append(deleteIcon);
  });
}

function removeItemToDo(item) {
  item.remove();
}
