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
    updateStorage(mainList);
    console.log(retrieveList());
}

function displayTodos(item) {
    const checkbox = document.createElement('input');
    const titleDisplay = document.createElement('p');
    const descriptionDisplay = document.createElement('p');
    const dueDateDisplay = document.createElement('p');
    const priorityDisplay = document.createElement('p');
    const deleteButton = document.createElement('button');
    const itemContainer = document.getElementById(item.id);

    deleteButton.classList.add('delete-button');

    checkbox.type = 'checkbox';
    titleDisplay.textContent = `Title: ${item.title}`;
    descriptionDisplay.textContent = `Description: ${item.description}`;
    dueDateDisplay.textContent = `Due date: ${item.dueDate}`;
    priorityDisplay.textContent = `Priority: ${item.priority}`;
    deleteButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" width="1em" height="1em">
        // lid bar
        <rect x="60" y="152" width="392" height="20" rx="10" fill="currentColor"/>
        // handle on lid
        <path d="M192 152 C192 108 210 80 256 80 C302 80 320 108 320 152" stroke="currentColor" stroke-width="20" stroke-linecap="round" fill="none"/>
        // bin body
        <path d="M120 188 L148 420 C152 450 174 464 200 464 L312 464 C338 464 360 450 364 420 L392 188" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>
`;
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