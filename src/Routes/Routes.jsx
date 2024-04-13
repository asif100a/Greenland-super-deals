import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp/SignUp";
import ViewProperty from "../Pages/ViewProperty/ViewProperty";
import PrivateRoute from "../ProtectedRoute/PrivateRoute";

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
                path: `/view_details/:id`,
                element:
                    <PrivateRoute>
                        <ViewProperty />
                    </PrivateRoute>,
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