import {
    Drawer,
    DrawerCloseButton, DrawerContent,
    DrawerOverlay,
    useDisclosure
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { BsCart3, BsTelephone } from "react-icons/bs";
import { FcManager } from "react-icons/fc";
import { IoMdLogIn } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/main-logo.png";
import useAdmin from "../../hooks/useAdmin";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar2 from "./Navbar2";
const Header = () => {
    const { products } = useSelector((state) => state.cart)
    const { user, logOut } = useContext(AuthContext);
    const [cart, refetch] = useCart()
    const [isAdmin] = useAdmin()
    const [isActive, setActive] = useState("false");
    const navigate = useNavigate()
    const location = useLocation()
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

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [placement, setPlacement] = React.useState('left')

    const quantities = products.reduce((sum, item) => item.quantity + sum, 0)


    return (
        <div className="header-area">
            <div className="header-top py-3 bg-[#1e1d23]">
                <div className="container">
                    <div className="header-top-info flex items-center justify-between">
                        <div className="header-left flex md:flex-wrap items-center justify-between">
                            <p className="text-white mr-3 md:mr-4 hover:text-[#ffc222] text-[16px]">
                                <a href="tel:01919371381" className="flex items-center ">
                                    <BsTelephone className="mr-2 text-[#fff]" /> +01919371381
                                </a>
                            </p>
                            <p className=" hidden text-white md:flex items-center hover:text-[#ffc222] text-[16px] ">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="mr-2 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"></path></svg>R.A. Khan Chowdhury Rd, Kushtia</p>
                        </div>

                        <div className="header-right flex-wrap flex items-center ">
                            <div className="social-icon  flex ">
                                <Link
                                    className="text-[16px] hidden lg:block pr-[10px] ml-[10px] hover:text-[#ffc222] text-white border-r border-[#ddd]"
                                    to="/contactus">
                                    Contact Us
                                </Link>
                                {
                                    user ? <>
                                        <Link
                                            className="text-[16px] pr-[10px] md:ml-[10px] hover:text-[#ffc222] text-white border-r border-[#ddd]"
                                            to={isAdmin ? 'adminhome' : 'userhome'}
                                        >
                                            {user?.displayName}
                                        </Link>
                                        <button
                                            onClick={handleLogOut}
                                            className="text-[16px] p-0 h-0 pr-[10px] ml-[10px]  border-0 bg-transparent hover:text-[#ffc222] text-white border-r border-[#ddd]"
                                        >
                                            Sign Out
                                        </button>
                                    </> : <>
                                        <Link
                                            className="text-[16px] pr-[10px] ml-[10px] hover:text-[#ffc222] text-white border-r border-[#ddd]"
                                            to="/login">
                                            Sign In
                                        </Link>
                                        <Link
                                            className="text-[16px] pr-[10px] ml-[10px] hover:text-[#ffc222] text-white"
                                            to="/signup">
                                            Sign Up
                                        </Link>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`md:navbar ${stickyClass} header-main py-3 bg-[#fff]`}>
                <div className="container">
                    <div className="flex w-[100%] justify-between items-center">
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="500"
                            className="logo ">
                            <Link to="/" className="text-3xl md:w-[85px] w-14 font-bold flex items-center">
                                <img
                                    className="md:w-[75px] w-14"
                                    src={logo} alt="" srcSet="" />
                            </Link>
                        </div>
                        {/* desktop menu */}
                        <div className="hidden lg:block">
                            <Navbar2 />
                        </div>
                        {/* header right action button */}
                        <div className="header-group-action hidden lg:flex items-center gap-3">
                            {/* <div className="site-search">
                                <button
                                    className="p-0  bg-white border rounded-full hover:bg-[#ffc222] border-[#ffc222] h-[50px] w-[50px] text-center">
                                    <FiSearch className="text-center mx-auto text-xl" />
                                </button>
                            </div> */}
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
                            {user ? <div className="site-cart">
                                <Link
                                    className="flex items-center hover:bg-[#ffc222]  justify-center h-[50px] w-[50px] text-center relative leading-[50px] border rounded-full border-[#ffc222]"
                                    to="/mycart">
                                    <BsCart3 className="text-xl" />
                                    {/* <span className="absolute top-[-20px] right-0">+{cart?.length || 0}</span> */}
                                    <span className="absolute top-[-20px] right-0">+{quantities || 0}</span>
                                </Link>
                            </div>
                                :
                                <Link
                                    className="flex items-center hover:bg-[#ffc222]  justify-center h-[50px] w-[50px] text-center relative leading-[50px] border rounded-full border-[#ffc222]"
                                    to="/login">
                                    <IoMdLogIn className="text-xl" />
                                </Link>
                            }
                        </div>

                        {/* mobile menu */}
                        <div className="drawer lg:hidden justify-end">
                            <input id="mobile-menu" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content flex items-center ">
                                {/* Page content here */}
                                {user && <Link
                                    className="z-[0] flex items-center hover:bg-[#ffc222]  justify-center h-[45px] w-[45px] text-center relative leading-[50px] border rounded-full border-[#ffc222]"
                                    to="/mycart">
                                    <BsCart3 className="text-lg" />
                                    {/* <span className="absolute text-sm top-[-10px] right-0">+{cart?.length || 0}</span> */}
                                    <span className="absolute text-sm top-[-10px] right-0">+{quantities ? quantities : 0}</span>
                                </Link>}

                                {user &&
                                    <div className="site-profile">
                                        <Link
                                            className="ml-3 bg-transparent hover:bg-[#ffc222] border rounded-full border-[#ffc222] flex w-[45px] h-[45px]   justify-center items-center text-black dark:text-white text-3xl"
                                            to={isAdmin ? 'adminhome' : 'userhome'}
                                        >
                                            <FcManager className="text-2xl" />

                                        </Link>
                                    </div>
                                }
                                <label ref={btnRef} onClick={onOpen}>
                                    <span
                                        className="lg:hidden bg-transparent border rounded-full border-[#ffc222] flex w-[45px] h-[45px]   justify-center items-center text-black dark:text-white text-3xl ml-3 "
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
                            <>
                                <Drawer
                                    isOpen={isOpen}
                                    placement={placement}
                                    onClose={onClose}
                                    finalFocusRef={btnRef}
                                >
                                    <DrawerOverlay />
                                    <DrawerContent>
                                        <DrawerCloseButton />
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
                                    </DrawerContent>
                                </Drawer>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
