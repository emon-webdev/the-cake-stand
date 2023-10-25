import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaRegTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import SectionTitle from '../../../components/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useMenu from '../../../hooks/useMenu';

const ManageItems = () => {
    const [menu, , refetch] = useMenu()
    const [axiosSecure] = useAxiosSecure()

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log('deleted res', res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    };

    return (
        <div className='w-full'>
            <Helmet>
                <title>THE CAKE STAND || Manage Items</title>
            </Helmet>
            <SectionTitle heading="Manage All Items" subHeading="Hurry up" />
            <div>
                <div className="overflow-x-auto mt-5 md:w-full w-[350px]">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='bg-[#18975f]'>
                                <th className='text-left font-semibold text-white text-lg'>
                                    #
                                </th>
                                <th className='text-left font-semibold text-white text-lg'>Name</th>
                                <th className='text-left font-semibold text-white text-lg'>Category</th>
                                <th className='text-left font-semibold text-white text-lg'>Price</th>
                                <th className='text-left font-semibold text-white text-lg'>Update</th>
                                <th className='text-left font-semibold text-white text-lg'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu?.map((item, index) => <tr key={item?._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">  {item?.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item?.category}
                                    </td>
                                    <td className='text-right'>${item?.price}</td>
                                    <td>
                                        <button className="btn btn-ghost bg-green-600 text-white btn-xs">Update</button>
                                    </td>
                                    <td>
                                        <td>
                                            <button
                                                onClick={() => handleDelete(item)}
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

export default ManageItems;