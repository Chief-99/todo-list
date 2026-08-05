const mainList = [];
const projectList = [];

function projects() {
    function createProject(name) {
        return { name, todos: [] };
    };

    const addToProject = (item, project) => project.push(item);

    return { createProject, addToProject };
}

export { mainList, projects, projectList };