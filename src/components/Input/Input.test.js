import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './Input';

describe("Test Input", () => {
    it("renders correctly", () => {
        const onChange = jest.fn();
        render(<Input onChange={onChange} value=""></Input>);

        fireEvent.change(screen.getByRole('textbox'), { target: { value: "changed" } });
        expect(onChange).toHaveBeenCalled();
    });
});