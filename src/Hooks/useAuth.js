import { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider/AuthProvider';

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;