import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import useCart from '../../hooks/useCart';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar2 = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart, refetch] = useCart()
    const [isAdmin] = useAdmin()
    return (
        <div>
            <div className="menu-area">
                <nav className="pt-8 lg:pt-0">
                    <ul className="lg:flex items-center">
                        <li>
                            <Link
                                to="/"
                                className=" mx-0 text-[#1e1d23] hover:text-[#ffc222]  transition duration-300 font-bold ml-1 py-[14px] px-[16px] text-[16px] "
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/menu"
                                className=" mx-0 text-[#1e1d23] hover:text-[#ffc222]  transition duration-300 font-bold ml-1 py-[14px] px-[16px] text-[16px] "
                            >
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/order/salad"
                                className=" mx-0 text-[#1e1d23] hover:text-[#ffc222]  transition duration-300 font-bold ml-1 py-[14px] px-[16px] text-[16px] "
                            >
                                Order Food
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blog"
                                className=" mx-0 text-[#1e1d23] hover:text-[#ffc222]  transition duration-300 font-bold ml-1 py-[14px] px-[16px] text-[16px] "
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className=" mx-0 text-[#1e1d23] hover:text-[#ffc222]  transition duration-300 font-bold ml-1 py-[14px] px-[16px] text-[16px] "
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contactus"
                                className=" mx-0 text-[#1e1d23] hover:text-[#ffc222]  transition duration-300 font-bold ml-1 py-[14px] px-[16px] text-[16px] "
                            >
                                Contact
                            </Link>
                        </li>
                        
                    </ul>
                </nav>


            </div>
        </div>
    );
};

export default Navbar2;