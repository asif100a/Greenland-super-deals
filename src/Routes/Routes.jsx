import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp/SignUp";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch('/landData.json')
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/sign_up',
                element: <SignUp />
            }
        ]
    }
]);

export default routes;