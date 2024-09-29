document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskTitle = document.getElementById('taskTitle').value.trim();
    const taskDescription = document.getElementById('taskDescription').value.trim();

    if (taskTitle === '') return;

    const taskItem = createTaskItem(taskTitle, taskDescription);
    document.getElementById('pendingTasks').appendChild(taskItem);
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDescription').value = '';
}

function createTaskItem(title, description) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${title}</strong><p>${description}</p>`;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'complete-button';
    completeButton.onclick = () => completeTask(li);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-button';
    editButton.onclick = () => editTask(li, title, description);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = () => deleteTask(li);

    li.appendChild(completeButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    return li;
}

function completeTask(taskItem) {
    taskItem.classList.toggle('completed');
    document.getElementById('completedTasks').appendChild(taskItem);
}

function editTask(taskItem, oldTitle, oldDescription) {
    const newTitle = prompt('Edit task title:', oldTitle);
    const newDescription = prompt('Edit task description:', oldDescription);
    
    if (newTitle !== null) {
        taskItem.childNodes[0].innerHTML = `<strong>${newTitle}</strong><p>${newDescription}</p>`;
    }
}

function deleteTask(taskItem) {
    taskItem.parentNode.removeChild(taskItem);
}
