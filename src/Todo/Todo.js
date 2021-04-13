import React, { useState } from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Checkbox from '../components/Checkbox/Checkbox';
import Task from '../Task';

const Todo = ({ tasks, addNew, updateCompleted, deleteTask }) => {
    const [newTask, setNewTask] = useState(new Task(""));

    const inputChangeHandler = (event) => {
        const newTask = new Task(event.target.value);
        setNewTask(newTask);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <Input onChange={inputChangeHandler} value={newTask.name} type="text" />
                <Button onClick={() => {
                    addNew(newTask);
                    setNewTask(new Task(""));
                }}>Add New</Button>
            </div>
            <div>
                {tasks.map((task, idx) => {
                    let renderTask = null;
                    if (!task.deleted) {
                        renderTask = (
                            <div key={idx}>
                                <Checkbox
                                    onChange={() => updateCompleted(idx)}
                                    defaultChecked={task.completed} type='checkbox' />
                                <span>{task.name}</span>
                                <Button onClick={() => deleteTask(idx)}>Delete</Button>
                            </div>
                        );
                    }
                    return renderTask;
                })}
            </div>
        </div>
    );
};

export default Todo;