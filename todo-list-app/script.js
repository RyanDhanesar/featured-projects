const inputBox = document.getElementById('inputBox');
const listContainer = document.getElementById('list-container');

function addTask(){
    if (inputBox.value === '') {
        alert("Please enter a task!");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"; // Unicode for multiplication sign (×)
        li.appendChild(span);

    }
    inputBox.value = ''; // Clear the input box after adding the task
    saveData(); // Save the current tasks to localStorage
}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData(); // Save the current tasks to localStorage

    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData(); // Save the current tasks to localStorage
    }
}, false);

function saveData() {
    localStorage.setItem('tasks', listContainer.innerHTML);
}

function showTasks(){
    const saved = localStorage.getItem('tasks');
    if (saved){
        listContainer.innerHTML = saved;
    }
    listContainer.innerHTML = localStorage.getItem('tasks');
}
function loadPlaceholderTasks() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5') // Limit to 5 tasks
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => {
                let li = document.createElement('li');
                li.innerHTML = todo.title;
                if (todo.completed) {
                    li.classList.add('checked');
                }
                let span = document.createElement('span');
                span.innerHTML = "\u00d7";
                li.appendChild(span);
                listContainer.appendChild(li);
            });
            saveData(); // Optional: save to localStorage
        })
        .catch(error => console.error('Error loading placeholder tasks:', error));
}
loadPlaceholderTasks(); // Load placeholder tasks from JSONPlaceholder API
showTasks(); // Load tasks from localStorage when the page loads




