import { mainList, projects } from "./projects.js";

function createToDo(title, description, dueDate, priority) {
    const todo = { title, description, dueDate, priority };
    mainList.push(todo);
    return todo;
};

const first = createToDo('Title', 'description and stuff', '2026/07/3', 'high');
const second = createToDo('Birthday', 'The most important one in the year', '2026/10/13', 'highest');

const projectList = projects();
const test = projectList.createProject('test');
test.todos.push(first);

console.log(mainList, test.todos[0]);

export { createToDo };