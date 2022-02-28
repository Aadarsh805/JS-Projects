const form = document.getElementById('form')
const input = document.getElementById('input')
const todoUl = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))

form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo()
})

if (todos) {
    todos.forEach(todo => addTodo(todo))
}

function addTodo(todo) {
    let todoText = input.value

    if (todo) {
        todoText = todo.text
    }

    if (todoText) {
        const todoEl = document.createElement('li')

        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLS()
        })

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove()
            updateLS() 
        })

        todoUl.appendChild(todoEl)

        input.value = ''

        updateLS()
    }
}

function updateLS() {
    const todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}