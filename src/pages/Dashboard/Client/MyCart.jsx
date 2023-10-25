import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';
const MyCart = () => {

    const [cart, refetch] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0)

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
                fetch(`${import.meta.env.VITE_APP_API_URL}/carts/${item?._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
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
                <title>THE CAKE STAND || My Cart</title>
            </Helmet>
            <div className='uppercase py-4 mb-2 font-bold md:flex justify-evenly items-center'>
                <h3 className='text-3xl'>Items: {cart?.length}</h3>
                <h3 className='text-3xl my-3 md:my-0'>Price: $ {total.toFixed(2)}</h3>
                <Link to='/payment'>
                    <button className="btn btn-md bg-warning">Pay</button>
                </Link>
            </div>
            <div className="overflow-x-auto md:w-full w-[350px]">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th className='text-end'>Price</th>
                            <th className='text-end'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart?.map((item, index) =>
                            <tr key={item?._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item?.name}
                                </td>
                                <td className='text-end'>${item?.price}</td>
                                <td className='text-end'>
                                    <button
                                        onClick={() => handleDelete(item)}
                                        className="btn btn-ghost bg-red-500 text-white btn-md"><FaRegTrashAlt /></button>
                                </td>
                            </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;