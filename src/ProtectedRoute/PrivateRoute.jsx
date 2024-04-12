import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = () => {
    const {user} = useAuth();

    if(user) {
        return <Navigate  />
    }
    return <Navigate to={'/'} />;
};

export default PrivateRoute;