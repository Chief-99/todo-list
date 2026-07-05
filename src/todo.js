function createToDo(title, description, dueDate, priority) {
    return { title, description, dueDate, priority };
};

const first = createToDo('Title', 'description and stuff', '2026/07/3', 'high');
const second = createToDo('Birthday', 'The most important one in the year', '2026/10/13', 'highest');

console.log(first, second);

export { createToDo };