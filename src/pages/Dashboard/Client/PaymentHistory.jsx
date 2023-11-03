import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Loading from '../../../components/Loading';
import useAuth from '../../../hooks/useAuth';

const PaymentHistory = () => {
    const { user } = useAuth();
    const {
        data: data = [],
        isLoading,
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
    if (isLoading) {
        <p><Loading /></p>
    }


    return (
        <div className='w-full'>
            <Helmet>
                <title>THE CAKE STAND || Payment History</title>
            </Helmet>
            <div className='uppercase py-4 mb-2 font-bold flex justify-center items-center'>
                <h3 className='text-3xl font-bold'>Payment History</h3>
            </div>
            {data?.payments ?
                <div className="overflow-x-auto md:w-full w-[350px]">
                    <h3 className='text-2xl mb-5 font-semibold'>Total Payment  {data?.payments.length > 0 ? data?.payments.length : 0}</h3>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Email</th>
                                <th>Status</th>
                                <th className='text-end'>Price</th>
                                <th className='text-end'>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.payments?.map((item, index) =>
                                <tr key={item?._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {item?.email}
                                    </td>
                                    <td>
                                        {item?.status}
                                    </td>
                                    <td className='text-end'>${item?.price}</td>
                                    <td className='text-end'>
                                        {item?.date.slice(0, 10)}
                                    </td>
                                </tr>)}

                        </tbody>
                    </table>
                </div>
                :
                <div>
                    You no payment history
                </div>

            }

        </div>
    );
};

export default PaymentHistory;