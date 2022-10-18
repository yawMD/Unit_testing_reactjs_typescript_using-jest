import React from 'react'
import Card from '../Components/Card/Card'
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Icon, { IconProp, ThickProp } from '../components/Icon/Icon';

describe('Card', () => {
    test('it should render correctly with button and description',()=>{
        const handleClick: (() => void) = jest.fn();
        render(
            <Card 
            title="title"
            description="description"
            buttons={handleClick}
            />
        );
        expect(Icon).toBeInTheDocument;
        expect(handleClick).toBeCalled;
    });
    test('it should have a title content displayed in document', () => {
        render(<Card title="title" />);
        expect(screen.getByText('title')).toBeInTheDocument;
        expect(screen.getByText('title')).toHaveTextContent('title');
    });
    test('it should have a description content displayed in document', () => {
        render(<Card description="description" />);
        expect(screen.getByText('description')).toBeInTheDocument;
        expect(screen.getByText('description')).toHaveTextContent('description');
    });
    test('it should handle button onClick events', () => {
        const handleClick: (() => void) = jest.fn();
        render(<Card title="title" onClick={handleClick} />);
        fireEvent.click(screen.getByText('title'));
        expect(handleClick).toBeCalled;
    });
    test('it should  display button  onClick event', () => {
        const handleClick:(() => void) = jest.fn();
        render(<Card onClick={handleClick} />);
        fireEvent.click(screen.getByRole('button'));
        expect(screen.getByRole('button')).toBeVisible();
    });
})