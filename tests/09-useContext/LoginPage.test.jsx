import { fireEvent ,render, screen } from '@testing-library/react'
import { userContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Pruebas en <LoginPage/>', () => {

    test('Debe de mostrar el componente sin el usuario', () => {
        render(
            <userContext.Provider value={{user: null}}>
                <LoginPage/>
            </userContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    });

    test('Debe de llamar el setUser cuando se hace click', () => {
        
        const setUserMock = jest.fn();
        
        render(
            <userContext.Provider value={{user: null, setUser: setUserMock}}>
                <LoginPage/>
            </userContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalledWith({"email": "armando@armando.com", "id": 1, "name": "Armando"});
    })

})