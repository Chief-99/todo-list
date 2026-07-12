import { createToDo } from "./todo.js";

const addToDoButton = document.querySelector('#add-todo');
const titleText = document.querySelector('.title');
const descriptionText = document.querySelector('.description');
const dueDateText = document.querySelector('.due-date');
const priorityText = document.querySelector('.priority');
const titleInput = document.querySelector('#title-input');
const descriptionInput = document.querySelector('#description-input');
const dueDateInput = document.querySelector('#due-date-input');
const priorityInput = document.querySelector('#priority-input');

const first = createToDo('Title', 'description and stuff', '2026/07/3', 'high');

function getTodoValues() {
    const title = titleInput.value;
    const description = descriptionInput.value;
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;

    const todoObject = createToDo(title, description, dueDate, priority);

    return todoObject;
}

function domFunctions() {
    function addTodo() {
        const { title, description, dueDate, priority } = getTodoValues();
        titleText.textContent += title;
        descriptionText.textContent += description;
        dueDateText.textContent += dueDate;
        priorityText.textContent += priority
    }

    addToDoButton.addEventListener('click', addTodo);

    return;
}


export { domFunctions };