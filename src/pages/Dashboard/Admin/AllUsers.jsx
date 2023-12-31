import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaRegTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get(`/users`)
        return res.data;
    })

    const handleMakeAdmin = (user) => {
        fetch(`${import.meta.env.VITE_APP_API_URL}/users/admin/${user?._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user?.name} is an Admin Now`,
                        showConfirmButton: false,
                        timer: 500
                    })
                }
            })
    }
    const handleDelete = (user) => {
        console.log(user)
    }

    return (
        <div className='w-full'>
            <Helmet>
                <title>THE CAKE STAND || All Users</title>
            </Helmet>
            <h3 className='text-3xl font-semibold text-center my-4 md:pl-4'>Total Users: {users?.length} </h3>

            <div>
                <div className="overflow-x-auto md:w-full w-[350px]">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='bg-[#18975f] '>
                                <th className='text-left font-semibold text-white text-lg'>#</th>
                                <th className='text-left font-semibold text-white text-lg'>Name</th>
                                <th className='text-left font-semibold text-white text-lg'>Email</th>
                                <th className='text-left font-semibold text-white text-lg'>Role</th>
                                <th className='text-left font-semibold text-white text-lg'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user?._id}>
                                    <th>{index + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>
                                        {user?.role == 'admin' ? 'admin' :
                                            <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="btn btn-ghost bg-orange-500 text-white btn-md">
                                                <FaUserShield />
                                            </button>
                                        }
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(user)}
                                            className="btn btn-ghost bg-red-500 text-white btn-md"><FaRegTrashAlt /></button>
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

export default AllUsers;