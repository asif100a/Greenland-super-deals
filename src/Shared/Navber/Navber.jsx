import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from '../../../public/logo.png';
import './navStyle.css'

const Navber = () => {
    const { user, logOutUser, userName } = useAuth();
    console.log(user)

    const handleSingOut = () => {
        logOutUser();
    };

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about_us'}>About us</NavLink></li>
        <li><NavLink to={'/contact_us'}>Contact us</NavLink></li>

    </>

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
                <Link to={'/'} className="text-2xl font-semibold hover:cursor-pointer flex justify-center items-center gap-1"><img src={logo} alt="" className="w-12 h-12 border border-green-600 bg-white" /><span>Greenland Super Deals</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>


            <div className="navbar-end">
                {
                    user &&
                    <>
                        <div className="profile mr-6">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm profile-child mt-3 z-[1] p-2 shadow bg-base-100 rounded-md w-52">
                                <li><a className="text-orange-600">{user.displayName}</a></li>
                            </ul>
                        </div>
                        <button className="btn mr-6">
                            <Link to={'/update_profile'}>Update profile</Link>
                        </button>
                    </>


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