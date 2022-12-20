function addToDoToLS() {
    const taskInput = document.querySelector("#taskInput");
    const dateInput = document.querySelector("#dateTodo");

    let storedTasks = [];
    
    const task = {
        id : Math.random(),
        taskTitle : taskInput.value,
        date : dateInput.value,
    };

    if ( !localStorage.getItem("tasks") ) {
        storedTasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
    } else {
        const addedTasks =  JSON.parse(localStorage.getItem("tasks"));
        addedTasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(addedTasks));
    }
}