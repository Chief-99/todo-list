import { mainList } from "./projects.js";

function createToDo(title, description, dueDate, priority) {
    let id = crypto.randomUUID();
    const todo = { title, description, dueDate, priority, id };

    mainList.push(todo);
    console.log(todo);
    return todo;
};

export { createToDo };