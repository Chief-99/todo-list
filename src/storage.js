function updateStorage(mainList) {
    localStorage.setItem('mainTodo', JSON.stringify(mainList));
};

function retrieveList() {
    const currentList = JSON.parse(localStorage.getItem('mainTodo'));
    return currentList;
}

export { updateStorage, retrieveList }