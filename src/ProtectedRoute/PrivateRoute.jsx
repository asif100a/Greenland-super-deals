import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user} = useAuth();
    const location = useLocation();
    console.log(location);

    if(user) {
        return children;
    }
    return <Navigate to={'/login'} state={location.pathname} />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;