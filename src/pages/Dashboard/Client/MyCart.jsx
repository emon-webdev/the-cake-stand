import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaRegTrashAlt } from 'react-icons/fa';
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
                fetch(`http://localhost:5000/carts/${item?._id}`, {
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
            <div className='uppercase font-bold flex justify-evenly items-center'>
                <h3 className='text-3xl'>Total Items: {cart?.length}</h3>
                <h3 className='text-3xl'>Total Price: $ {total}</h3>
                <button className="btn btn-sm">Pay</button>
            </div>
            <div className="overflow-x-auto">
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
                            <th>Action</th>
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
                                <td>
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