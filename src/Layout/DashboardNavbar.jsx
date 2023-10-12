import { default as React, useContext, useEffect, useState } from 'react';
import { BsCart3 } from "react-icons/bs";
import { FcManager } from "react-icons/fc";
import { FiSearch, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/main-logo.png";
import useAdmin from '../hooks/useAdmin';
import useCart from '../hooks/useCart';
import Navbar2 from '../pages/Shared/Navbar2';
import { AuthContext } from '../providers/AuthProvider';

const DashboardNavbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart, refetch] = useCart()
    const [isAdmin] = useAdmin()
    const [isActive, setActive] = useState("false");
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const [stickyClass, setStickyClass] = useState('');
    const [scrollPosition, setScrollPosition] = useState(0);
    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive);
    };

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const stickNavbar = () => {
        const newScrollPosition = window.scrollY;
        setScrollPosition(newScrollPosition);

        if (newScrollPosition > 150) {
            setStickyClass('sticky-nav sticky-transition');
        } else {
            setStickyClass('');
        }
    };


    return (
        <div className="header relative z-0">
            <div className={`md:navbar ${stickyClass} header-main py-3 bg-[#fff]`}>
                <div className="container">
                    <div className="flex w-[100%] justify-between items-center">
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="500"
                            className="logo ">
                            <Link to="/" className="text-3xl md:w-[80px] w-14 font-bold flex items-center">
                                <img
                                    className="md:w-[80px] w-14"
                                    src={logo} alt="" srcSet="" />
                            </Link>
                        </div>

                        {/* desktop menu */}
                        <div className="hidden md:block">
                            {/* <Navbar2 /> */}
                        </div>
                        {/* header right action button */}
                        <div className="header-group-action hidden md:flex items-center gap-3">
                            <div className="site-search">
                                <Link
                                    className="flex items-center hover:bg-[#ffc222]  justify-center h-[50px] w-[50px] text-center relative leading-[50px] border rounded-full border-[#ffc222]"
                                    to="/mycart">
                                    <FiSearch className="text-xl" />
                                </Link>
                            </div>

                            {user &&
                                <div className="site-profile">
                                    <Link
                                        className=" bg-transparent hover:bg-[#ffc222] border rounded-full border-[#ffc222] flex w-[45px] h-[45px]   justify-center items-center text-black dark:text-white text-3xl"
                                        to={isAdmin ? 'adminhome' : 'userhome'}
                                    >
                                        <FcManager className="text-2xl" />

                                    </Link>

                                </div>
                            }
                            <div className="site-cart">
                                <Link
                                    className="flex items-center hover:bg-[#ffc222]  justify-center h-[50px] w-[50px] text-center relative leading-[50px] border rounded-full border-[#ffc222]"
                                    to="/mycart">
                                    <BsCart3 className="text-xl" />
                                    <span className="absolute top-[-20px] right-0">+{cart?.length || 0}</span>
                                </Link>
                            </div>
                        </div>

                        {/* mobile menu */}
                        <div className="drawer lg:hidden justify-end">
                            <input id="mobile-menu" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content flex items-center ">
                                {/* Page content here */}
                                <Link
                                    className="z-[0] flex items-center hover:bg-[#ffc222]  justify-center h-[45px] w-[45px] text-center relative leading-[50px] border rounded-full border-[#ffc222]"
                                    to="/mycart">
                                    <BsCart3 className="text-lg" />
                                    <span className="absolute text-sm top-[-10px] right-0">+{cart?.length || 0}</span>
                                </Link>
                                <label
                                    htmlFor="open-dashboard"
                                    className="">
                                    <span
                                        className="bg-transparent border rounded-full border-[#ffc222] flex w-[45px] h-[45px]   justify-center items-center text-black dark:text-white text-3xl ml-3"
                                    >
                                        <FiSettings className="text-xl" />
                                    </span>
                                </label>
                                <label htmlFor="mobile-menu" className="">
                                    <span
                                        className="md:hidden bg-transparent border rounded-full border-[#ffc222] flex w-[45px] h-[45px]   justify-center items-center text-black dark:text-white text-3xl ml-3 "
                                    >
                                        <svg
                                            className="text-2xl"
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 1024 1024"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                            <div className="drawer-side lg:hidden ">
                                <label htmlFor="mobile-menu" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu bg-[#fff8e8] p-4 w-80 min-h-full text-base-content">
                                    {/* Sidebar content here */}
                                    <div
                                        data-aos="zoom-in"
                                        data-aos-duration="500"
                                        className="logo pt-4">
                                        <Link to="/" className="text-3xl font-bold flex justify-center items-center">
                                            <img
                                                className="w-[85px]"
                                                src={logo} alt="" srcSet="" />
                                        </Link>
                                    </div>
                                    <Navbar2 />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;