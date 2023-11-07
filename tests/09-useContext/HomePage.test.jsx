import { render, screen } from '@testing-library/react'
import { userContext } from '../../src/09-useContext/context/UserContext';
import { HomePage } from '../../src/09-useContext/HomePage'

describe('Pruebas en el componente </HomePage>', () => {

    const user = {
        id:1,
        name: 'Armando'
    }

    test('Debe de mostrar el componente sin el usuario', () => {
        render(
            <userContext.Provider value={{user: null}}>
                <HomePage/>
            </userContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null')
        // screen.debug()
    });

    test('Debe de mostrar el componente con el usuario', () => {
        render(
            <userContext.Provider value={{user}}>
                <HomePage/>
            </userContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(user.name)
        expect(preTag.innerHTML).toContain(user.id.toString())
        // screen.debug()
    });

})