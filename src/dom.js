import { createToDo } from "./todo.js";
import { mainList } from "./projects.js";
import { format } from "date-fns";
import { updateStorage, retrieveList } from "./storage.js";

const addToDoButton = document.querySelector('#add-todo');
const form = document.getElementById('todo-form');
const titleInput = document.querySelector('#title-input');
const descriptionInput = document.querySelector('#description-input');
const dueDateInput = document.querySelector('#due-date-input');
const priorityInput = document.querySelector('#priority-input');
const displayDiv = document.querySelector('#display-div');
const openTodoForm = document.getElementById('open-todo-form');
const modalBox = document.getElementById('modal');

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
    updateStorage(mainList);

    itemContainer.id = todoObject.id;

    return;
}

function removeTodo(e) {
    const selectedDiv = e.target.closest('.todo-item');
    const index = mainList.findIndex(item => item.id === selectedDiv.id);
    selectedDiv.remove();
    mainList.splice(index, 1);
    console.log(retrieveList());
    updateStorage(mainList);
}

function displayTodos(item) {
    const checkbox = document.createElement('input');
    const titleDisplay = document.createElement('p');
    const descriptionDisplay = document.createElement('p');
    const dueDateDisplay = document.createElement('p');
    const priorityDisplay = document.createElement('p');
    const deleteButton = document.createElement('button');
    const itemContainer = document.getElementById(item.id);

    checkbox.type = 'checkbox';
    titleDisplay.textContent = `Title: ${item.title}`;
    descriptionDisplay.textContent = `Description: ${item.description}`;
    dueDateDisplay.textContent = `Due date: ${item.dueDate}`;
    priorityDisplay.textContent = `Priority: ${item.priority}`;
    deleteButton.textContent = 'Delete';
    itemContainer.classList.add('todo-item');
    itemContainer.append(checkbox, titleDisplay, descriptionDisplay, dueDateDisplay, priorityDisplay, deleteButton);

    deleteButton.addEventListener('click', removeTodo);
}

function displayAllItems(mainList) {
    const savedList = retrieveList();
    console.log(savedList);
    if (!savedList) return;
    for (let item of savedList) {
        mainList.push(item);
        const itemContainer = document.createElement('div');
        itemContainer.id = item.id;
        displayDiv.append(itemContainer);
        displayTodos(item);
    };
    return;
}

function domFunctions() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo();
        displayTodos(retrieveList().at(-1));
        modalBox.style.display = 'none';
    });
    return;
}

openTodoForm.addEventListener('click', () => modalBox.style.display = 'flex');
window.addEventListener('click', (e) => {
    if (e.target == modalBox) {
        modalBox.style.display = 'none';
    }
})


export { domFunctions, displayAllItems };