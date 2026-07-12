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
    
}

function domFunctions() {
    function addTodo() {
        const { title, description, dueDate, priority } = first;
        titleText.textContent += title;
        descriptionText.textContent += description;
        dueDateText.textContent += dueDate;
        priorityText.textContent += priority
    }

    addToDoButton.addEventListener('click', addTodo);

    return; 
}


export { domFunctions };