import React, { useState, useEffect } from 'react';
import { addNewUtil, updateCompletedUtil, deleteTaskUtil } from './utils';
import Todo from '../Todo/Todo';
import Service from '../Service';
import './App.css';

const App = () => {
	const initialTasks = Service.fetchTasks();
	const [tasks, setTasks] = useState(initialTasks);

	useEffect(() => {
		Service.saveTasks(tasks);
	}, [tasks]);

	const addNew = (task) => {
		const newTasks = addNewUtil(task, tasks);
		setTasks(newTasks);
	};

	const updateCompleted = (idx) => {
		const newTasks = updateCompletedUtil(idx, tasks);
		setTasks(newTasks);
	};

	const deleteTask = (idx) => {
		const newTasks = deleteTaskUtil(idx, tasks);
		setTasks(newTasks);
	};


	return (
		<div className="App">
			<Todo
				tasks={tasks}
				addNew={addNew}
				updateCompleted={updateCompleted}
				deleteTask={deleteTask} />
		</div>
	);
}

export default App;