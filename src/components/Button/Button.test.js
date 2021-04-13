import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

describe("Test Button", () => {
    it("renders correctly", () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick}>Click me</Button>);

        expect(screen.getByText("Click me")).toBeInTheDocument();

        fireEvent.click(screen.getByRole('button'));
        expect(onClick).toHaveBeenCalled();
    });
});