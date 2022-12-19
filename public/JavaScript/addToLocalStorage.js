function addToLocalStorage() {
    const toDoInput = document.querySelector("#taskInput");
    const dateInput = document.querySelector("#dateTodo");

    let storedArray = [];

    const date = dateInput.value;

    const task = {
        id : Math.random(),
        text : toDoInput.value,
        date,
    }

    if ( !localStorage.getItem("tasks")) {
        storedArray.push(task);
        localStorage.setItem("tasks", JSON.stringify(storedArray));
    } else {
        const addedTask = JSON.parse(localStorage.getItem("tasks"));
        addedTask.push(task);
        localStorage.setItem("tasks", JSON.stringify(addedTask));
    }
}