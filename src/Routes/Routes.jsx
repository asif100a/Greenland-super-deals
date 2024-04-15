import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp/SignUp";
import ViewProperty from "../Pages/ViewProperty/ViewProperty";
import PrivateRoute from "../ProtectedRoute/PrivateRoute";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import YourProfile from "../Pages/YourProfile/YourProfile";

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
            },
            {
                path: '/update_profile',
                element: <UpdateProfile />
            },
            {
                path: '/your_profile',
                element: <YourProfile />
            },
            {
                path: '/about_us',
                element: <AboutUs />
            },
            {
                path: '/contact_us',
                element: <ContactUs />
            }
        ]
    }
]);

export default routes;