import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaRegTrashAlt } from 'react-icons/fa';
import SectionTitle from '../../../components/SectionTitle';

const ManageBooking = () => {

    const {
        data: reservation = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["reservation"],
        queryFn: async () => {
            const res = await fetch(
                `${import.meta.env.VITE_APP_API_URL}/all-reservation`
            );
            const data = res.json();
            return data;
        },
    });
    console.log(reservation)

    return (
        <div className='w-full md:px-10 '>
            <Helmet>
                <title>THE CAKE STAND || Add Item</title>
            </Helmet>
            <SectionTitle heading="All Reservation" subHeading=" Reservation" />
            <div>
                <div className="overflow-x-auto md:w-full w-[350px]">
                    <table className="table mt-8">
                        {/* head */}
                        <thead >
                            <tr className='bg-[#18975f] '>
                                <th>
                                    #
                                </th>
                                <th className='text-left font-semibold text-white text-lg'>Name</th>
                                <th className='text-left font-semibold text-white text-lg'>Phone</th>
                                <th className='text-left font-semibold text-white text-lg'>Guest</th>
                                <th className='text-left font-semibold text-white text-lg'>Start Time & End Time</th>
                                <th className='text-left font-semibold text-white text-lg'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reservation?.map((item, index) => <tr key={item?._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="">
                                                {item?.name}
                                                <br />
                                                {item?.email}
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item?.phone}
                                    </td>
                                    <td className='text-left'>{item?.guest}</td>
                                    <td className='text-left'>
                                        {item?.selectedDate.slice(0, 10)}
                                        <br />
                                        <span className="">{item?.startTime} to {item?.endTime}</span>
                                    </td>
                                    <td>
                                        <td>
                                            <button
                                                // onClick={() => handleDelete(item)}
                                                className="btn btn-ghost bg-red-500 text-white btn-md"><FaRegTrashAlt /></button>
                                        </td>
                                    </td>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageBooking;