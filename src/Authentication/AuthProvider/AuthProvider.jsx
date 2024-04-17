import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { 
    GithubAuthProvider, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut, 
    updateProfile
} from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [userName, setUserName] = useState("");
    // console.log(userName)

    // Provider
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Create user with email & password
    const emailAndPasswordToSignIn = (email, password) => {
        setLoading(true);
        console.log(auth)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login user with email & password
    const LoginWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Google login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Github login
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    };

    // Update user profile
    const editUserProfile = (name, photo_url) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo_url
        });
    };

    // Log out
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    // onAuthStateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
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
        googleLogin,
        githubLogin,
        editUserProfile,
        user,
        loading,
        // setUserName,
        // userName,
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