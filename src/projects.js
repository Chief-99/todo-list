const mainList = [];

function projects() {
    const createProject = (name) => {
        return { name, todos: [] };
    };

    const addToDo = (item, project) => project.push(item);

    return { createProject, addToDo };
}

export { mainList, projects };