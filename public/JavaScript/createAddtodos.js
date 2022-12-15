function addItemToDo() {
    const task = document.getElementById("taskInput").value;
    const li = document.createElement('li');
    li.innerText = task;
    document.getElementById("tasks").appendChild(li);
}


//Add function to remove todo item