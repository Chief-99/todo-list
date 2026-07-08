import { createToDo } from "./todo.js";

const addToDoButton = document.querySelector('#add-todo');


function domElements() {
    addToDoButton.addEventListener('click', () => createToDo('Title', 'description and stuff', '2026/07/3', 'high'));
}

export { domElements };