import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { FcManager } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../../components/Loading';
import useCart from '../../hooks/useCart';
import { AuthContext } from '../../providers/AuthProvider';
import { useAddProductCommentMutation, useGetProductReviewQuery, useGetSingleProductsQuery } from '../../redux/api/apiSlice';
import { addToCart } from '../../redux/features/cart/cartSlice';
const SingleFood = () => {
    let image, price, recipe, name, _id, category
    const { id } = useParams()
    const { data: item, isLoading: loading } = useGetSingleProductsQuery(id)
    const {
        data: productReview,
        isLoading: reviewLoading,
        refetch: reviewRefetch
    } = useGetProductReviewQuery(id, {
        refetchOnMountOrArgChange: true,
        pollingInterval: 30000
    })
    // const item = useLoaderData()
    // const { image, price, recipe, category, name, _id } = item;

    if (!loading) {
        ({ image, price, recipe, category, name, _id } = item);
    }
    const [addProductComment, { isLoading, isError, isSuccess }] = useAddProductCommentMutation()
    const { products, totalPrice } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [, refetch] = useCart()
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'MMMM d, yyyy');


    const handleComment = (data) => {
        if (user && user?.email) {
            const review = {
                productId: item?._id,
                date: formattedDate,
                userName: user?.displayName,
                userEmail: user?.email,
                userPhoto: user?.photoURL,
                comment: data.comment
            }
            addProductComment(review)
            if (!isSuccess) {
                refetch()
                reset()
                reviewRefetch()
                Swal.fire({
                    title: 'Comment Done',
                })
            }
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


    const handleAddToCart = item => {

        dispatch(addToCart(item))
        console.log(dispatch(addToCart(item)))


        if (user && user?.email) {
            const cartItem = {
                menuItemId: item?._id,
                name: item?.name,
                image: item?.image,
                price: item?.price,
                email: user?.email
            }
            console.log(cartItem)
            fetch(`${import.meta.env.VITE_APP_API_URL}/carts`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            }).then(res => res.json()).then(data => {
                if (data.insertedId) {
                    refetch()
                    Swal.fire({
                        icon: 'success',
                        title: 'Food added on the cart'
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

    console.log(products)

    return (
        <div className='single-page'>
            <div className="container">
                <div className="py-12 md:py-16 md:flex gap-8">
                    <div
                        className="single-page-img shadow-md p-8 bg-[#fff8e8] rounded-lg  md:basis-5/12 mb-5">
                        <img
                            className='rounded-2xl w-full h-full'
                            src={image} alt="" srcSet="" />
                    </div>
                    <div
                        data-aos="fade-right"
                        className="banner-content md:basis-6/12">
                        <h4 className="text-[#ffc222] text-3xl mb-1">{name}</h4>
                        <h2 className=' mb-4 text-xl'>
                            Category: {category}
                        </h2>

                        <p className='text-md mb-2  text-[#808080] '>
                            {recipe}
                        </p>
                        <h4
                            className="text-[#ffc222] text-3xl mb-1">
                            $ {price}
                            <span className='line-through ml-3 text-[#808080]'>
                                $ {Math.ceil(price * 1.05)}
                            </span>
                        </h4>
                        <div className="divider my-2"></div>
                        <div className="single-item-action flex items-center gap-4 text-center">
                            <div className="quantity-btn flex items-center">
                                {/* <ButtonGroup size='sm' isAttached variant='outline'>
                                    <IconButton
                                        onClick={() => dispatch(removeOneProduct(item))}
                                        aria-label='Add to friends'
                                        icon={<MinusIcon />}
                                    />
                                    <h1 className='px-3 text-2xl'>
                                        {item.quantity}
                                    </h1>
                                    <IconButton
                                        onClick={() => dispatch(addToCart(item))}
                                        aria-label='Add to friends'
                                        icon={<AddIcon />}
                                    />
                                    <IconButton
                                        onClick={() => dispatch(removeFromCart(item))}
                                        aria-label='Add to friends'
                                        icon={<DeleteIcon />}
                                    />
                                </ButtonGroup> */}
                            </div>
                            <button
                                // onClick={() => dispatch(addToCart(item))}
                                onClick={() => handleAddToCart(item)}
                                className="primary-btn second-btn">
                                Add to Cart
                            </button>
                        </div>
                    </div>

                </div>

                <div className="review-area mb-14 bg-[#fff8e8] shadow-md md:py-9 py-6 px-4 md:px-8">
                    <h2 className='text-3xl text-center mb-5'>Ratings & Reviews of <span className='text-[#ffc222]'>{item?.name}</span> </h2>
                    <div className="author-info flex items-center gap-4 py-4">
                        <img
                            className='rounded-full w-20 h-20'
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
                        {
                            reviewLoading ?
                                <Loading />
                                :
                                <>
                                    {productReview.length > 0 ?
                                        productReview?.map(review =>
                                            <li key={review?._id}
                                                className='flex items-start gap-5 my-5'
                                            >
                                                <div>
                                                    {review?.userPhoto ?
                                                        <img
                                                            className='rounded-full w-16 h-16'
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
                                        <h2 className='text-4xl text-center mb-5'>There are no review</h2>
                                    }
                                </>

                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;