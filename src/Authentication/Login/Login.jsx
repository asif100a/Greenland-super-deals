import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const doNot = "Don't";
    // Error setup
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // Login method
    const { LoginWithEmailAndPassword, googleLogin, githubLogin } = useAuth();

    // Use location to go specific address
    const location = useLocation();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
    } = useForm();


    const onSubmit = (data, e) => {
        const { email, password } = data;
        // Reset error
        setEmailError("");
        setPasswordError("");

        // Email & Password validation setup
        if (!email) {
            setEmailError("Please provide an email")
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError("You should provide a valid email")
            return;
        }
        if (!password) {
            setPasswordError("Please provide your password")
            return;
        }
        if (password.length < 6) {
            setPasswordError("Please provide at least 6 characters of password")
            return;
        }

        // Login setup
        LoginWithEmailAndPassword(email, password)
            .then(res => {
                if(res.user) {
                    toast.success('You have logged in successfully');
                }
                navigate(location?.state ? location.state : '/');
            })
            .catch(err => {
                console.error(err.message);
                if(err.message === "Firebase: Error (auth/invalid-credential).") {
                    toast.error('Invalid email or password')
                }
                else if(err.message === "Firebase: Error (auth/network-request-failed).") {
                    toast.error("Please check your internet connection");
                }
            });

        // Reset input field
        e.preventDefault();
        e.target.email.value = "";
        e.target.password.value = "";

    };

    // Social login
    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                navigate(location?.state ? location.state : '/');
            })
            .catch(err => {
                console.error(err);
            });
    };
    const handleGithubLogin = () => {
        githubLogin()
            .then(() => {
                navigate(location?.state ? location.state : '/');
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className="my-16 flex justify-center items-center">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-[#f2f6f2dd] dark:text-gray-800">
                <h1 className="text-3xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-600">Email address</label>
                        <input
                            type="email"
                            {...register("email")}
                            name="email"
                            id="email"
                            placeholder="Enter email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                        />
                        {<p className="text-red-500">{emailError}</p>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                            {...register("password")}
                        />
                        {<p className="text-red-500">{passwordError}</p>}
                        <div className="flex justify-end text-xs dark:text-gray-600">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="btn block w-full p-3 text-center rounded-sm bg-green-500">Login</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16"></div>
                    <p className="px-3 text-lg font-medium">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-3 rounded-sm">
                        <FcGoogle className="w-8 h-8" />
                    </button>
                    
                    <button onClick={handleGithubLogin} aria-label="Log in with GitHub" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 fill-current">
                            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                        </svg>
                    </button>
                </div>
                <p className="text-base text-center sm:px-6 dark:text-gray-600">{doNot} have an account?
                    <Link to={'/sign_up'} className="ml-1 text-blue-600 hover:underline">Sign up</Link>
                </p>
            </div>
            <Toaster />
        </div>
    );
};

export default Login;