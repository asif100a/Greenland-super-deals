import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Navber = () => {
    const { user, setUser, logOutUser } = useAuth();

    const handleSingOut = () => {
        logOutUser();
    };

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/update_profile'}>Update profile</NavLink></li>
        <li><NavLink to={'/about_us'}>About us</NavLink></li>
        <li><NavLink to={'/contact_us'}>Contact us</NavLink></li>

    </>

    // const profileStyle = ;

    return (
        <div className="navbar bg-base-100 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to={'/'} className="text-2xl font-semibold hover:cursor-pointer">Greenland Super Firms</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>


            <div className="navbar-end">
                {
                    user &&
                    <div className="dropdown dropdown-end mr-6">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                }

                {
                    user ? <Link onClick={handleSingOut} className="btn">Log out</Link> :
                        <Link to={'/login'} className="btn">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navber;