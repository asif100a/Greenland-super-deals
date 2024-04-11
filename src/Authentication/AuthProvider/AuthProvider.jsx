import { createContext } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

// Create user with email & password
const emailAndPasswordToSignIn = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

// Login user with email & password
const LoginWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};


const authInfo = {
    emailAndPasswordToSignIn,
    LoginWithEmailAndPassword,
};

const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;