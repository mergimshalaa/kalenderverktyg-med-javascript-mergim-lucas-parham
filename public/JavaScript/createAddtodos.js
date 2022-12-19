function addItemToDo() {
  document.querySelector("#addToDo").addEventListener("click", () => {
    const task = document.getElementById("taskInput").value;

    //Display date for todos in a div under todos
    const dateTodo = document.getElementById("dateTodo").value;
    
   const taskList = document.createElement('div');
   taskList.classList.add('task');

   const taskContent = document.createElement('div')
   taskContent.classList.add('content');
   taskList.append(taskContent);

   const taskInput = document.createElement('input');
   taskInput.classList.add('textInput');
   taskInput.type = 'text';
   taskInput.value = task;
   taskInput.setAttribute('readonly', 'readonly');

   const taskActions = document.createElement('div');
   taskActions.classList.add('taskActions');
   
   const taskEdit = document.createElement('button');
   taskEdit.classList.add('edit')
   taskEdit.innerText = 'Edit';

    const deleteTask = document.createElement("i");
    deleteTask.classList.add("fa-solid", "fa-trash-can", "trash");

    taskActions.append(taskEdit);
    taskActions.append(deleteTask);
    taskContent.append(taskInput);
    taskList.append(taskActions);

    document.getElementById('tasks').append(taskList);

    taskEdit.addEventListener('click', () => {
      if (taskEdit.innerText.toLowerCase() == "edit") {
        taskEdit.innerText = "Save";
        taskInput.removeAttribute("readonly");
        taskInput.focus()
      } else {
        taskEdit.innerText = "Edit";
        taskInput.setAttribute('readonly', 'readonly');
      }
    })

    deleteTask.addEventListener('click', () => {
      document.getElementById("tasks").removeChild(taskList);
      updateTodoCount();
    })
    updateTodoCount();
  })
}

function updateTodoCount() {
  const todoCount = document.querySelectorAll('.task').length;
  document.querySelector('#todoCount').textContent = `${todoCount}`;
}