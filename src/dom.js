import { createToDo } from "./todo.js";
import { mainList } from "./projects.js";
import { format } from "date-fns";

const addToDoButton = document.querySelector('#add-todo');
const form = document.getElementById('todo-form');
const titleInput = document.querySelector('#title-input');
const descriptionInput = document.querySelector('#description-input');
const dueDateInput = document.querySelector('#due-date-input');
const priorityInput = document.querySelector('#priority-input');
const displayDiv = document.querySelector('#display-div');

function addTodo() {
    const title = titleInput.value;
    const description = descriptionInput.value;
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;
    const todoObject = createToDo(title, description, dueDate, priority);
    form.reset();

    const itemContainer = document.createElement('div');
    displayDiv.appendChild(itemContainer);
    console.log(mainList);

    itemContainer.id = todoObject.id;

    return;
}

function displayTodos(mainList) {
    const lastTodo = mainList.at(-1);
    const titleDisplay = document.createElement('p');
    const descriptionDisplay = document.createElement('p');
    const dueDateDisplay = document.createElement('p');
    const priorityDisplay = document.createElement('p');
    const itemContainer = document.getElementById(lastTodo.id);

    titleDisplay.textContent = `Title: ${lastTodo.title}`;
    descriptionDisplay.textContent = `Description: ${lastTodo.description}`;
    dueDateDisplay.textContent = `Due date: ${lastTodo.dueDate}`;
    priorityDisplay.textContent = `Priority: ${lastTodo.priority}`;
    itemContainer.append(titleDisplay, descriptionDisplay, dueDateDisplay, priorityDisplay);
}

function domFunctions() {

    addToDoButton.addEventListener('click', () => {
        addTodo();
        displayTodos(mainList);
    });
    return;
}


export { domFunctions };