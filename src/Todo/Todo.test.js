import React from 'react';
import Todo from './Todo';
import Task from '../Task';
import { screen, render, getByRole, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("Testing Todo", () => {
    it("renders Todo correctly", () => {
        const tasks = [
            new Task("task1"),
            new Task("task2")
        ];
        render(<Todo tasks={tasks} />);

        expect(screen.getByText("Todo List")).toBeInTheDocument();

        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Add New' })).toBeInTheDocument();

        tasks.forEach(task => {
            expect(screen.getByText(task.name)).toBeInTheDocument();
        })

        expect(screen.getAllByRole('button', { name: 'Delete' })).toHaveLength(tasks.length);
    });


});