import { mainList } from "./projects.js";

function createToDo(title, description, dueDate, priority) {
    const todo = { title, description, dueDate, priority };
    mainList.push(todo);
    console.log(todo);
    return todo;
};

export { createToDo };