import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Pruebas en <TodoItem/>', () => {
    
    const todo = {
        id: 1,
        description: 'pierda del alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn(); 
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());
    
    test('Debe de mostrar el Todo pendiente de completar', () => {
        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/>)
        const liElement = screen.getByRole('listitem');
        // screen.debug();
        expect(liElement.classList[0]).toBe('list-group-item');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
    });

    test('Debe de mostrar el todo completado', () => {

        todo.done = true;

        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/>)

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    test('Debe de llamar el ToggleTodo cuando se hace click', () => {
        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/>)
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    });

    test('Button debe de llamar el deteleTodo', () => {
        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/>)
        const deleteElement = screen.getByLabelText('deleteBtn');
        fireEvent.click(deleteElement);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    })
})