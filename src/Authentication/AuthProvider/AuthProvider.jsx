import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Create user with email & password
    const emailAndPasswordToSignIn = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    
    // Login user with email & password
    const LoginWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    
    // Log out
    const logOutUser = () => {
        return signOut(auth);
    };

    // onAuthStateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })

        return () => {
            unsubscribe();
        };
    }, []);
    
    // Send authInfo
    const authInfo = {
        emailAndPasswordToSignIn,
        LoginWithEmailAndPassword,
        logOutUser,
        user
    };

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