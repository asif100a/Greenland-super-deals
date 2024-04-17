import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from '../../../public/logo.png';
import './navStyle.css';
import userDefaultPhoto from '../../assets/images.png';
import { useEffect, useState } from "react";

const Navber = () => {
    const { user, logOutUser } = useAuth();

    const handleSingOut = () => {
        logOutUser();
    };

    const [userPhoto, setUserPhoto] = useState(userDefaultPhoto);

    useEffect(() => {
        const profilePhoto = user?.photoURL?.includes('https');
        if (profilePhoto === false) {
            setUserPhoto(userDefaultPhoto);
        }
        else if (profilePhoto === true) {
            setUserPhoto(user.photoURL);
        }
    }, [user?.photoURL]);

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about_us'}>About us</NavLink></li>
        <li><NavLink to={'/contact_us'}>Contact us</NavLink></li>
    </>

    return (
        <div className="lg:navbar pl-3 py-3 w-full bg-base-100 shadow-md">
            <div className="flex flex-row-reverse lg:flex-row lg:navbar-start w-[100%] justify-between">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content right-0 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-pt_serif">
                        {navLinks}
                        <li><NavLink to={'/update_profile'}>My profile</NavLink></li>
                        <li>{user ? <Link onClick={handleSingOut}>Log out</Link> : <NavLink to={'/login'}>Login</NavLink>}</li>
                    </ul>
                </div>
                <Link to={'/'} className="text-2xl font-semibold hover:cursor-pointer flex justify-between md:justify-center items-center gap-1"><img src={logo} alt="" className="w-8 md:w-12 h-8 md:h-12 border border-green-600 bg-white" /><span className="font-noto_serif text-green-600">Greenland Super Deals</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-pt_serif">
                    {navLinks}
                </ul>
            </div>


            <div className="md:navbar-end">
                {
                    user &&
                    <>
                        <div className="profile md:mr-3 hidden lg:flex">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full mx-auto flex justify-center items-center">
                                    <div className="w-fit h-fit">
                                        <img alt="User image" src={userPhoto} />
                                    </div>
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm profile-child mt-3 z-[1] p-2 shadow bg-base-100 rounded-md w-52">
                                <li><a className="text-orange-600 font-pt_serif">{user.displayName}</a></li>
                            </ul>
                        </div>
                        
                        <button className="btn btn-ghost mr-3 hidden lg:flex font-pt_serif">
                            <Link to={'/update_profile'}>Update profile</Link>
                        </button>
                    </>


                }

                {
                    user ? <Link onClick={handleSingOut} className="btn hidden lg:flex">Log out</Link> :
                        <Link to={'/login'} className="btn hidden lg:flex">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navber;