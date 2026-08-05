function updateMainStorage(mainList) {
    localStorage.setItem('mainTodo', JSON.stringify(mainList));
};

function updateProjectStorage(projectList) {
    localStorage.setItem('projectList', JSON.stringify(projectList));
}

function retrieveMainList() {
    const currentMainList = JSON.parse(localStorage.getItem('mainTodo'));
    return currentMainList;
}

function retrieveProjectList() {
    const currentProjectList = JSON.parse(localStorage.getItem('projectList'));
    return currentProjectList;
}

export { updateMainStorage, updateProjectStorage, retrieveMainList, retrieveProjectList }