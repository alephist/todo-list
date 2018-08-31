// Variables
let addTodo = document.querySelector('.todo__add-btn')
let todoList = document.querySelector('.todo__task-list')

// Add task
addTodo.addEventListener('click', () => {
    // Setup li element
    let todoItem = document.createElement('li')
    todoItem.setAttribute('class', 'todo__task')
    todoItem.textContent = document.querySelector('.todo__input').value

    // Print if no todo title is provided
    if (document.querySelector('.todo__input').value.length === 0) {
        todoItem.textContent = 'Untitled todo'
    }

    // Setup span element
    let deleteBtn = document.createElement('span')
    deleteBtn.textContent = 'x'
    deleteBtn.setAttribute('class', 'todo__del-btn')
    todoItem.appendChild(deleteBtn)

    // Append li to ul
    todoList.appendChild(todoItem)

    document.querySelector('.todo__input').value = ''
})

// Mark completed tasks
todoList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('todo__task--complete')
    }
})

// Remove task
todoList.addEventListener('click', (e) => {
    if (e.target.className === 'todo__del-btn') {
        e.target.parentNode.remove()
    }
})