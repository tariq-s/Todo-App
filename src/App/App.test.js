import App from './App';
import { addNewUtil, updateCompletedUtil, deleteTaskUtil } from './utils';
import { render } from '@testing-library/react';
import Task from '../Task';

describe("Testing App", () => {
    it("renders correctly", () => {
        render(<App />);
    });

    it("adds new task successfully", () => {
        const initailTasks = [
            new Task("test1"),
            new Task("test2"),
        ];

        const newTodo = new Task("newtask");
        const expectation = [...initailTasks, newTodo];
        const newTodos = addNewUtil(newTodo, initailTasks);

        expect(newTodos).toEqual(expectation);
    });

    it("marks todo as completed", () => {
        const initailTasks = [
            new Task("test1"),
            new Task("test2"),
        ];

        const expectation = [
            new Task("test1"),
            new Task("test2"),
        ];
        expectation[1].completed = true;

        const newTodos = updateCompletedUtil(1, initailTasks);

        expect(newTodos).toEqual(expectation);
    });

    it("deletes todo", () => {
        const initailTasks = [
            new Task("test1"),
            new Task("test2"),
        ];

        const expectation = [
            new Task("test1"),
            new Task("test2"),
        ];
        expectation[0].deleted = true;

        const newTodos = deleteTaskUtil(0, initailTasks);

        expect(newTodos).toEqual(expectation);
    });

});