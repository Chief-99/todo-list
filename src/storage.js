function updateMainListStorage(mainList) {
    localStorage.setItem('mainTodo', JSON.stringify(mainList));
};

function retrieveMainList() {
    const currentList = JSON.parse(localStorage.getItem('mainTodo'));
    return currentList;
}

export { updateMainListStorage, retrieveMainList }