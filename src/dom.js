import { createToDo } from "./todo.js";

const addToDoButton = document.querySelector('#add-todo');
const titleText = document.querySelector('.title');
const descriptionText = document.querySelector('.description');
const dueDateText = document.querySelector('.due-date');
const priorityText = document.querySelector('.priority');

const first = createToDo('Title', 'description and stuff', '2026/07/3', 'high');

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