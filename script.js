document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const newTask = document.createElement('li');

        newTask.innerHTML = `
            <span>${taskText}</span>
            <button class="remove-btn">Remover</button>
        `;

        newTask.querySelector('span').addEventListener('click', function() {
            this.parentElement.classList.toggle('completed');
        });

        newTask.querySelector('.remove-btn').addEventListener('click', function() {
            this.parentElement.remove();
        });

        taskList.appendChild(newTask);
        taskInput.value = '';
    }
});
