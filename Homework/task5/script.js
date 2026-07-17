let tasks = [];
let completed = 0;

function renderTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;

    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = 'x';
    deleteBtn.onclick = () => {
      tasks.splice(index, 1); 
      renderTasks();
    };

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  document.getElementById('taskSummary').textContent = 
    `${completed} of ${tasks.length} tasks done`;
}

function addTask() {
  const input = document.getElementById('taskInput');
  const value = input.value.trim();
  if (value) {
    tasks.push(value);
    input.value = '';
    renderTasks();
  }
}

renderTasks();
