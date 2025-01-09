import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/volunteer.png';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Avatar from "../assets/images/avatar.png"
import { IoSunny } from 'react-icons/io5';
import { FaMoon } from 'react-icons/fa';
import {ThemeContext} from '../provider/ThemeProvider'

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logout();
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const [imgSrc, setImgSrc] = useState(user?.photoURL || Avatar);

    const handleImageError = () => {
        setImgSrc(Avatar); // Fallback to Avatar on error
    };

    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <div className='py-5'>
            <div className="flex justify-between items-center bg-base-100 dark:bg-gray-800 text-black dark:text-white">
                <details className="dropdown lg:hidden">
                    <summary className="btn m-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </summary>
                    <ul
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/posts">All volunteer Need posts</NavLink></li>
                        <li>
                            <details className="dropdown">
                                <summary className="">My Profile</summary>
                                <ul className="menu dropdown-content dark:bg-gray-800 bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    <li><NavLink to="/add-volunteer-need-post">Add Volunteer need Post</NavLink></li>
                                    <li><NavLink to="/manage-my-posts">Manage My Posts</NavLink></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </details>
                <Link to="/" className="btn btn-ghost text-xl">
                    <img className='w-[50px]' src={Logo} alt="" />
                </Link>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/posts">All volunteer Need posts</NavLink></li>
                        <li>
                            <details className="dropdown">
                                <summary className="">My Profile</summary>
                                <ul className="menu dropdown-content dark:bg-gray-800 border bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    <li><NavLink to="/add-volunteer-need-post">Add Volunteer need Post</NavLink></li>
                                    <li><NavLink to="/manage-my-posts">Manage My Posts</NavLink></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-3'>
                    <button
                        onClick={toggleDarkMode}
                        className="text-3xl">
                        {isDarkMode ? <IoSunny></IoSunny> : <FaMoon></FaMoon>}
                    </button>
                    {
                        user && user?.email ? (
                            <div className="flex items-center gap-2">
                                <div className="relative group">
                                    <img
                                        src={imgSrc}
                                        alt="User Avatar"
                                        onError={handleImageError}
                                        className="lg:h-12 h-8 lg:w-12 w-8 rounded-full cursor-pointer"
                                    />
                                    <div className="absolute bg-base-300 rounded-lg lg:left-1/2 left-[-50px] transform -translate-x-1/2 lg:top-12 top-[-4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2 p-3">
                                        <span className="text-sm text-gray-700 font-medium">
                                            {user.displayName || "User"}
                                        </span>
                                        <button
                                            onClick={handleLogout}
                                            className="btn btn-outline btn-accent"
                                        >
                                            LogOut
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link to="/login" className="btn text-white bg-blue-600 hover:bg-blue-400">Login</Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;