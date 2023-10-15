import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BsCartCheck, BsWallet } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useMenu from '../../../hooks/useMenu';

const UserHome = () => {
    const { user } = useAuth();
    const [menu, loading] = useMenu();
    const [axiosSecure] = useAxiosSecure();
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'MMMM d, yyyy');
    const result = (menu?.length / 7).toFixed(2);


    const {
        data: data = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["products", user?.email],
        queryFn: async () => {
            const res = await fetch(
                `${import.meta.env.VITE_APP_API_URL}/user-stats?email=${user?.email}`
            );
            const data = res.json();
            return data;
        },
    });
    return (
        <div className="w-full relative z-0">
            <Helmet>
                <title>THE CAKE STAND || User Home</title>
            </Helmet>
            <h2 className="text-3xl mb-5">Hi, {user.displayName}</h2>
            <div className="md:flex flex-wrap gap-4">
                <Link to="/order/salad"
                    style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
                    className="bg-[#f37b2a] text-white transition duration-300 hover:bg-[#824235]  flex items-center gap-2 py-5 rounded-md px-5 w-full h-[130px] md:w-72"
                >
                    <div className="mr-5">
                        <BsWallet className="text-5xl text-white" />
                    </div>
                    <div className="text-white">
                        <div className=" text-2xl mb-0">Food</div>
                        <div className="stat-value mb-1">
                            {menu?.length + 6}
                        </div>
                        <div className="stat-desc text-white">{formattedDate}</div>
                    </div>
                </Link>
                <Link
                    to="/menu"
                    style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
                    className="bg-[#18975f] h-[130px] transition duration-300 hover:bg-[#ffba00] flex items-center gap-2 py-5 rounded-md px-5 w-full md:w-72 "
                >
                    <div className="mr-5">
                        <BsCartCheck className="text-5xl text-white" />
                    </div>
                    <div className="text-white">
                        <div className="text-white text-2xl mb-0">Menu</div>
                        <div className="stat-value mb-1">
                            {menu?.length}
                        </div>
                        <div className="stat-desc text-white">{formattedDate}</div>
                    </div>
                </Link>
                <Link
                    to="/contactus"
                    style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
                    className="bg-[#c31162] h-[130px] transition duration-300 hover:bg-[#f37b2a] flex items-center gap-2 py-5 rounded-md px-5 w-full md:w-72"
                >
                    <div className="mr-5">
                        <FiPhoneCall className="text-5xl text-white" />
                    </div>
                    <div className="text-white">
                        <div className="text-white text-2xl mb-0">Contact</div>
                        <div className="stat-value mb-1 text-white">
                            {result}
                        </div>
                        <div className="stat-desc text-white">{formattedDate}</div>
                    </div>
                </Link>
            </div>
            <div className='flex items-start gap-8 mt-8'>
                <div className='bg-[#0096dc] h-[290px] transition duration-300 hover:bg-[#cc3433] text-center flex flex-col justify-center w-full max-w-[410px] max-h-[290px] rounded-md md:py-8 py-4 md:px-12 px-8 text-white'>
                    <img
                        className='rounded-full mx-auto'
                        src={user?.photoURL} alt="" srcSet="" />
                    <h2 className='text-center font-bold text-4xl mt-2'> {user?.displayName}</h2>
                </div>
                <div className='bg-[#cc3433] h-[290px] transition duration-300 hover:bg-[#0096dc] text-center flex flex-col justify-center w-full max-w-[410px] max-h-[290px] rounded-md md:py-8 py-4 md:px-12 px-8 text-white'>
                    <h2 className='text-center font-bold text-4xl mt-2'>Your Activity</h2>
                    <div className='text-left mt-2'>
                        <h2 className='text-3xl font-medium'>Reviews: {data?.reviews?.length > 0 ? data?.reviews?.length : 0}</h2>
                        <h2 className='text-3xl font-medium'>Bookings: {data?.bookings?.length > 0 ? data?.bookings?.length : 0}</h2>
                        <h2 className='text-3xl font-medium'>Payments: {data?.payments?.length > 0 ? data?.payments?.length : 0}</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserHome;