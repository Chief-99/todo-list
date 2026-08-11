import { displayProject } from "./dom.js";
import { updateProjectStorage } from "./storage.js";

const mainList = [];
const projectList = [];

function projects() {
    function createProject(name) {
        const id = crypto.randomUUID();
        return { name, id, todos: [] };
    };

    const addToProject = (item, project) => project.todos.push(item);

    return { createProject, addToProject };
}

const projectManager = projects();

export { mainList, projectManager, projectList };