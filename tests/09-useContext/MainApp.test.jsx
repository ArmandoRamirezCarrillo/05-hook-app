import { render, screen } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routesConfig } from '../../src/09-useContext/routesConfig';
// import { MainApp } from '../../src/09-useContext/MainApp'


describe('Pruebas en </MainApp>', () => {

    test('Debe de mostrar el Home Page', () => {

        const router = createMemoryRouter(routesConfig, {initialEntries: ['/home'],});
        render(<RouterProvider router={router} />);
        
        expect(screen.getByText('HomePage')).toBeTruthy();

    });

    test('Debe de mostrar el Login Page', () => {

        const router = createMemoryRouter(routesConfig, {initialEntries: ['/login'],});
        render(<RouterProvider router={router} />);
        expect(screen.getByText('LoginPage')).toBeTruthy();

    });

})