import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { BsFillBagHeartFill } from 'react-icons/bs';
import { FcManager } from 'react-icons/fc';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';
import { AuthContext } from '../../providers/AuthProvider';
const SingleFood = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const item = useLoaderData()
    const { image, price, recipe, name, _id } = item;
    console.log(_id)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [, refetch] = useCart()
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'MMMM d, yyyy');

    // const {
    //     data: reviews = [],
    //     refetch: reviewRefetch,
    //     isLoading,
    // } = useQuery({
    //     queryKey: ["reviews"],
    //     queryFn: async () => {
    //         const res = await fetch(
    //             `http://localhost:5000/product-review/${_id}`
    //         );
    //         const data = await res.json();
    //         console.log(data)
    //         return data;
    //     },
    // });

    const {
        data: reviews = [],
        refetch: reviewRefetch,
        isLoading,
    } = useQuery({
        queryKey: ["reviews", _id], // Include the _id as part of the query key
        queryFn: async ({ queryKey }) => {
            const [_key, _id] = queryKey; // Destructure the _id from the queryKey
            const res = await fetch(`http://localhost:5000/product-review/${_id}`);
            const data = await res.json();
            console.log(data);
            return data;
        },
    });

    const handleAddToCart = item => {
        if (user && user?.email) {
            const cartItem = {
                menuItemId: _id, name, image, price, email: user?.email
            }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            }).then(res => res.json()).then(data => {
                if (data.insertedId) {
                    refetch() // refetch cart to update the cart number
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food added on the cart',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        } else {
            Swal.fire({
                title: 'Please login to order the food?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    const handleComment = data => {
        if (user && user?.email) {
            const review = {
                name,
                productId: _id,
                date: formattedDate,
                userName: user?.displayName,
                userEmail: user?.email,
                userPhoto: user?.photoURL,
                comment: data.comment
            }
            console.log(review)
            fetch('http://localhost:5000/product-review', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            }).then(res => res.json()).then(data => {
                if (data.insertedId) {
                    refetch()
                    reset()
                    reviewRefetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Comment added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        } else {
            Swal.fire({
                title: 'Please login for the comment',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className='single-page'>
            <div className="container">
                <div className="py-12 md:py-16 md:flex gap-8">
                    <div
                        className="single-page-img shadow-md p-8 bg-[#fff8e8] rounded-lg  md:basis-5/12 mb-5">
                        <img
                            className='rounded-2xl w-full h-full'
                            src={item?.image} alt="" srcSet="" />
                    </div>
                    <div
                        data-aos="fade-right"
                        className="banner-content md:basis-6/12">
                        <h4 className="text-[#ffc222] text-3xl mb-1">{item?.name}</h4>
                        <h2 className=' mb-4 text-xl'>
                            Category: {item?.category}
                        </h2>

                        <p className='text-md mb-2  text-[#808080] '>
                            {item?.recipe}
                        </p>
                        <h4
                            className="text-[#ffc222] text-3xl mb-1">
                            $ {item?.price} <span className='line-through text-[#808080]'> $ {Math.ceil(item?.price * 1.05)}</span>
                        </h4>
                        <div className="divider my-2"></div>
                        <div className="single-item-action flex items-center gap-4 text-center">
                            {/* <div className="quantity-btn flex items-center">
                                <button
                                    className="bg-[#ffc222]">
                                    <AiOutlineMinus />
                                </button>
                                <h1 className='px-3 text-2xl'>
                                    1
                                </h1>
                                <button
                                    className="bg-[#ffc222]">
                                    <AiOutlinePlus className='' />
                                </button>
                            </div> */}
                            <button
                                onClick={() => handleAddToCart(item)}
                                className="primary-btn second-btn">
                                Add to Cart
                            </button>
                            <button
                                onClick={() => handleAddToCart(item)}
                                className="bg-[#ffc222]">
                                <BsFillBagHeartFill />
                            </button>
                        </div>
                    </div>

                </div>

                <div className="review-area mb-14 bg-[#fff8e8] shadow-md md:py-9 py-6 px-4 md:px-8">
                    <h2 className='text-3xl text-center mb-5'>Ratings & Reviews of <span className='text-[#ffc222]'>{item?.name}</span> </h2>
                    <div className="author-info flex items-center gap-4 py-4">
                        <img
                            className='rounded-full w-20'
                            src={user?.photoURL} alt="" srcSet="" />
                        <h2 className='text-[#ffc222] text-3xl mb-1'>{user?.displayName}</h2>
                    </div>
                    <div className="review-form">
                        <form
                            onSubmit={handleSubmit(handleComment)}
                            className="text-white mb-8 flex justify-between gap-4">
                            <div className="form-control basis-10/12">
                                <input
                                    {...register("comment", { required: true })}
                                    name="comment"
                                    type="text"
                                    placeholder="Add a comment"
                                    className="input input-bordered w-full text-black bg-[#e7e8e8]"
                                />
                            </div>

                            <div className="form-control basis-2/12 w-[30%] md:w-full">
                                <input
                                    className="primary-btn cursor-pointer p-0"
                                    type="submit"
                                    value="Comment"
                                />
                            </div>
                        </form>
                    </div>
                    <ul className="review-items">
                        {reviews.length > 0 ?
                            reviews?.map(review =>
                                <li key={review?._id}
                                    className='flex items-start gap-5 my-5'
                                >
                                    <div>
                                        {review?.userPhoto ?
                                            <img
                                                className='rounded-full w-16'
                                                src={review?.userPhoto} alt="" srcSet="" />
                                            :
                                            <FcManager className="text-6xl  rounded-full" />
                                        }
                                    </div>
                                    <div>
                                        <div className=''>
                                            <h4>{review?.userName}</h4>
                                            <p className='text-sm mt-1  text-[#808080] '>{review?.date}</p>
                                            <p className='mt-2'>
                                                {review?.comment}
                                            </p>
                                        </div>
                                    </div>
                                </li>)
                            :
                            <h2 className='text-4xl text-center mb-5'>There no review</h2>
                        }
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default SingleFood;