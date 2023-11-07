import { MainApp } from './MainApp';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';

export const routesConfig = [
  {
    path: "/",
    element: <MainApp />,
    children: [
      {
        path: "about",
        element: <AboutPage/>
      },
      {
        path: "login",
        element: <LoginPage/>
      },
      {
        path: "home",
        element: <HomePage/>
      },
      {
        path: "*",
        element: <HomePage/>
      }
    ]
  },
];