import React from 'react';
import { AiOutlineMenu, AiOutlineMenuFold } from 'react-icons/ai';
import { BiHomeAlt } from 'react-icons/bi';
import { BsCart3, BsFillCalendar2HeartFill } from 'react-icons/bs';
import { FaBookMedical, FaHospitalUser, FaRegCalendarAlt, FaShopify, FaWallet } from 'react-icons/fa';
import { GrMailOption } from 'react-icons/gr';
import { MdReviews } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {

    // TODO: load data from the server to have dynamic is admin based
    // const isAdmin = true ;
    const [isAdmin] = useAdmin()


    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-base-content">
                        <li>
                            <NavLink to='/'>
                                <BiHomeAlt />
                                <span>The Stand Cake</span>
                            </NavLink>
                        </li>
                        <div className="divider"></div>
                        {
                            isAdmin ?
                                <>
                                    {/* admin links */}
                                    <li>
                                        <NavLink to='/dashboard'>
                                            <BiHomeAlt />
                                            <span>Admin Home</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/allusers'>
                                            <FaHospitalUser />
                                            <span>All Users</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/additem'>
                                            <BiHomeAlt />
                                            <span>Add Items</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/manageitem'>
                                            <AiOutlineMenu />
                                            <span>Manage Items</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/managebookings'>
                                            <FaBookMedical />
                                            <span>Manage Bookings</span>
                                        </NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    {/* User links */}
                                    <li>
                                        <NavLink to='/dashboard'>
                                            <BiHomeAlt />
                                            <span>User Home</span>
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to='/dashboard/mycart'>
                                            <BsCart3 />
                                            <span>My Cart</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/paymenthistory'>
                                            <FaWallet />
                                            <span>Payment History</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/reservation'>
                                            <FaRegCalendarAlt />
                                            <span>Reservation</span>
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to='/dashboard/addreview'>
                                            <MdReviews />
                                            <span>Add Review</span>
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to='/dashboard/mybooking'>
                                            <BsFillCalendar2HeartFill />
                                            <span>My Booking</span>
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
                            <NavLink to='/dashboard/shop'>
                                <FaShopify />
                                <span>Shop</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/mybooking'>
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