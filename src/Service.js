import Task from './Task';

class Service {
    static fetchTasks = () => {
        const initialTasks = JSON.parse(window.localStorage.getItem('tasks'));
        let initTasks = [];
        if(initialTasks)
            initTasks = initialTasks.map(task => {
                const newTask = new Task(task.name);
                newTask.completed = task.completed;
                newTask.deleted = task.deleted;
                return newTask;
            });
        return initTasks;
    };

    static saveTasks = tasks => {
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
    };
};

export default Service;