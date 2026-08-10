const mainList = [];
const projectList = [];
const projectNameInput = document.getElementById('project-name-input');

function projects() {
    function createProject(name) {
        return { name, todos: [] };
    };

    const addToProject = (item, project) => project.todos.push(item);

    return { createProject, addToProject };
}

function addProject() {
    const projectName = projectNameInput.value;
    const currentProject = projectManager.createProject(projectName);
    projectList.push(currentProject);
    console.log(projectList);
    displayProject(projectName);
    updateProjectStorage(projectList);
    projectForm.reset();
}

const projectManager = projects();

export { mainList, projectManager, projectList, addProject };