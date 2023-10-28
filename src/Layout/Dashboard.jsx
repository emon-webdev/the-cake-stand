import React, { useContext } from 'react';
import { AiOutlineMenu, AiOutlineMenuFold } from 'react-icons/ai';
import { BiHomeAlt } from 'react-icons/bi';
import { BsCart3 } from 'react-icons/bs';
import { FaBookMedical, FaHospitalUser, FaRegCalendarAlt, FaShopify, FaWallet } from 'react-icons/fa';
import { GrMailOption } from 'react-icons/gr';
import { MdReviews } from 'react-icons/md';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from "../assets/main-logo.png";
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../providers/AuthProvider';
import DashboardNavbar from './DashboardNavbar';
const Dashboard = () => {

    // TODO: load data from the server to have dynamic is admin based
    // const isAdmin = true ;
    const [isAdmin] = useAdmin()
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <DashboardNavbar />
            <div className="drawer lg:drawer-open">
                <input id="open-dashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content h-screen lg:ms-4 md:py-8 py-6 flex flex-col items-center container">
                    {/* Page content here */}

                    {/* <label htmlFor="open-dashboard" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    <Outlet />
                </div>
                <div className="drawer-side md:mt-[-72px]">
                    <label htmlFor="open-dashboard" className="drawer-overlay"></label>
                    <ul className="menu p-4 pt-2 w-80 min-h-full bg-[#D1A054] text-base-content">
                        <li>
                            <div
                                data-aos="zoom-in"
                                data-aos-duration="500"
                                className="logo mx-auto p-0 hover:bg-transparent ">
                                <Link to="/" className="text-3xl md:w-[80px] w-14 font-bold flex items-center">
                                    <img
                                        className="md:w-[80px] w-14"
                                        src={logo} alt="" srcSet="" />
                                </Link>
                            </div>
                        </li>
                        <div className="divider mt-1"></div>
                        {
                            isAdmin ?
                                <>
                                    {/* admin links */}
                                    <li>
                                        <NavLink to='adminhome'>
                                            <BiHomeAlt />
                                            <span>Admin Home</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='users'>
                                            <FaHospitalUser />
                                            <span>All Users</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='additem'>
                                            <BiHomeAlt />
                                            <span>Add Items</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='manageitems'>
                                            <AiOutlineMenu />
                                            <span>Manage Items</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='managebooking'>
                                            <FaBookMedical />
                                            <span>Manage Bookings</span>
                                        </NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    {/* User links */}
                                    <li>
                                        <NavLink to='userhome'>
                                            <BiHomeAlt />
                                            <span>User Home</span>
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to='mycart'>
                                            <BsCart3 />
                                            <span>My Cart</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='paymenthistory'>
                                            <FaWallet />
                                            <span>Payment History</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='reservation'>
                                            <FaRegCalendarAlt />
                                            <span>Reservation</span>
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to='addreview'>
                                            <MdReviews />
                                            <span>Add Review</span>
                                        </NavLink>
                                    </li>

                                </>
                        }



                        <div className="divider"></div>
                        <li>
                            <NavLink to='/'>
                                <BiHomeAlt />
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/menu'>
                                <AiOutlineMenuFold />
                                <span>Menu</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/order/salad'>
                                <FaShopify />
                                <span>Shop</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contactus'>
                                <GrMailOption />
                                <span>Contact</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;