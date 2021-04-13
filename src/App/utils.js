export const addNewUtil = (task, tasks) => {
    const newTasks = [...tasks];
    newTasks.push(task);
    return newTasks;
}

export const updateCompletedUtil = (idx, tasks) => {
    const newTasks = [...tasks];
    newTasks[idx].toggleCompleted();
    return newTasks;
}

export const deleteTaskUtil = (idx, tasks) => {
    const newTasks = [...tasks];
    newTasks[idx].setDeleted();
    return newTasks;
}