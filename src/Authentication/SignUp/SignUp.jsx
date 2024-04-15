import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import auth from "../../firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const SignUp = () => {
    const { emailAndPasswordToSignIn, user } = useAuth();

    const [passwordError, setPasswordError] = useState("");
    const [repeatError, setRepeatError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        // resetField,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, e) => {
        let {
            name,
            email,
            photo_url,
            password,
            repeatPassword,
        } = data;

        const user = auth;
        console.log(user)


        // Reset error
        setPasswordError("");
        setRepeatError("");

        // Password validation
        if (password.length < 6) {
            setPasswordError("Password should be at least 6 characters");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setPasswordError('You should provide at least 1 character of "Uppercase"');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setPasswordError('You should provide at least 1 character of "Lowercase"')
        }
        else if (!(password === repeatPassword)) {
            setRepeatError("Please repeat password as the same password")
            console.log(password, repeatPassword)
            return;
        }

        // Create user
        emailAndPasswordToSignIn(email, password, name, photo_url)
            .then((credential) => {
                updateProfile(credential.user, {
                    displayName: name,
                    photoURL: photo_url,
                })
                    .then(res => {
                        console.log(res);
                    })
                    .catch(err => {
                        console.error(err);
                    });

                toast.success('You have signed up successfully');
            })
            .catch((err) => {
                console.error(err.message);
                if (err.message === "Firebase: Error (auth/email-already-in-use).") {
                    toast.error("You can't sign up for two times");
                }
                if (err.message === 'Firebase: Error (auth/network-request-failed).') {
                    toast.error("Please check your internet connection");
                }
            });

        // Reset field
        e.preventDefault();
        // const form = new FormData(e.currentTarget);
        // console.log(form)
        // const name2 = form.get('name');
        // console.log(name2)
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.photo_url.value = "";
        e.target.password.value = "";
        e.target.repeatPassword.value = "";
        e.target.terms.checked = false;
    }


    return (
        <div className="w-full h-full flex justify-center items-center mt-12 mb-12">
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto bg-[#f4ecf4a1] p-6 rounded-md">
                <h1 className="text-4xl font-bold text-center mb-6">Sign Up Your Account</h1>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                    <input
                        {...register("name", { required: true })}
                        type="text"
                        name="name"
                        id="name"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="Enter your name"
                    />
                    {errors.name && <span className="text-red-500">Please fill out this field</span>}
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input
                        {...register("email", { required: true })}
                        type="email"
                        name="email"
                        id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="Enter your email"
                    />
                    {errors.email && <span className="text-red-500">Please fill out this field</span>}
                </div>
                <div className="mb-5">
                    <label htmlFor="photo_url" className="block mb-2 text-sm font-medium text-gray-900">Your photo url</label>
                    <input
                        {...register("photo_url", { required: true })}
                        type="text"
                        name="photo_url"
                        id="photo_url"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Enter your photo url"
                    />
                    {errors.photo_url && <span className="text-red-500">Please fill out this field</span>}
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                    <div className="relative">  
                        <input
                            {...register("password", { required: true })}
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            id="password"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Enter your password"
                        />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 bottom-3">
                            {
                                showPassword && <FaRegEyeSlash /> || <FaRegEye />
                            }
                        </span>
                    </div>
                    {errors.password && <span className="text-red-500">Please fill out this field</span>}
                    <p className="text-red-500">{passwordError}</p>
                </div>
                <div className="mb-5">
                    <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900">Repeat password</label>
                    <input
                        {...register("repeatPassword", { required: true })}
                        type="password"
                        name="repeatPassword"
                        id="repeat-password"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Repeat your password"
                    />
                    {errors.repeatPassword && <span className="text-red-500">Please fill out this field</span>}
                    <p className="text-red-500">{repeatError}</p>
                </div>
                <div className="mb-5">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                {...register("checkbox", { required: true })}
                                id="terms"
                                type="checkbox"
                                name="checkbox"
                                value=""
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                            />
                        </div>
                        <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900">I agree with the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a></label>
                    </div>
                    <p>
                        {errors.checkbox && <span className="text-red-500">Please check out this box</span>}
                    </p>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
                <div className="pt-6">
                    Already have an account?
                    <Link to={'/login'} className="text-blue-600 hover:underline ml-1">Login now</Link>.
                </div>
            </form>
            <div>
                {
                    user && <Toaster />
                }
            </div>
            <Toaster />
        </div>
    );
};

export default SignUp;