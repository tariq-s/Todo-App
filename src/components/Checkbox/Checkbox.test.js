import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Checkbox from './Checkbox';

describe("Test Checkbox", () => {
    it("renders correctly", () => {
        const onChange = jest.fn();
        render(<Checkbox onChange={onChange} defaultChecked={false} />);

        expect(screen.getByRole('checkbox')).toBeInTheDocument();

        fireEvent.click(screen.getByRole('checkbox'));
        expect(onChange).toHaveBeenCalled();
    });
});