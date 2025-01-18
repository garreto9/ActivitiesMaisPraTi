document.addEventListener('DOMContentLoaded', loadTasks);

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    if (taskInput.value.trim() === '') return;

    const task = {
        id: Date.now(),
        text: taskInput.value.toUpperCase(),
        completed: false
    };

    const tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);

    taskInput.value = '';
    renderTasks();
}

function renderTasks() {
    const tasks = getTasks();
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'mb-4 flex justify-between items-center';

        const span = document.createElement('span');
        span.textContent = task.text;
        span.className = task.completed ? 'line-through text-red-500' : '';
        li.appendChild(span);

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'flex gap-2';

        const completeButton = document.createElement('button');
        completeButton.className = 'complete-button';
        completeButton.textContent = 'Concluir';
        completeButton.onclick = () => toggleTaskCompletion(task.id);
        buttonContainer.appendChild(completeButton);

        const editButton = document.createElement('button');
        editButton.className = 'edit-button';
        editButton.textContent = 'Editar';
        editButton.onclick = () => editTask(task.id);
        buttonContainer.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'Excluir';
        deleteButton.onclick = () => deleteTask(task.id);
        buttonContainer.appendChild(deleteButton);

        li.appendChild(buttonContainer);
        taskList.appendChild(li);
    });
}

function toggleTaskCompletion(id) {
    const tasks = getTasks();
    const task = tasks.find(t => t.id === id);
    task.completed = !task.completed;
    saveTasks(tasks);
    renderTasks();
}

function editTask(id) {
    const tasks = getTasks();
    const task = tasks.find(t => t.id === id);
    const newText = prompt('Edite a tarefa:', task.text);
    if (newText !== null && newText.trim() !== '') {
        task.text = newText.toUpperCase().trim();
        saveTasks(tasks);
        renderTasks();
    }
}

function deleteTask(id) {
    let tasks = getTasks();
    tasks = tasks.filter(task => task.id !== id);
    saveTasks(tasks);
    renderTasks();
}

function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    renderTasks();
}
