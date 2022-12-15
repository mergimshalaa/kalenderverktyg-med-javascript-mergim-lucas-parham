function addItemToDo() {
    document.querySelector('#addToDo').addEventListener('click', () => {

    const task = document.getElementById("taskInput").value;
    const li = document.createElement('li');

    li.innerText = task;
    document.getElementById("tasks").appendChild(li);
    })
}