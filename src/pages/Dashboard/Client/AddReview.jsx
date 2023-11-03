import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../../components/SectionTitle';

import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
const AddReview = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [rating, setRating] = useState(0)

    const onSubmit = data => {
        const { category, suggest, details, } = data;
        const newReview = { name: user?.displayName, email: user?.email, image: user?.photoURL, rating, category, suggest, details, }

        fetch(`${import.meta.env.VITE_APP_API_URL}/review`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newReview),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    reset()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `$Review Added Successful`,
                        showConfirmButton: false,
                        timer: 500
                    })
                }
            });


    };
    return (
        <div className="w-full md:mt-0 mt-5">
            <Helmet>
                <title>THE CAKE STAND || Add Review</title>
            </Helmet>
            <SectionTitle heading="Give a Review" subHeading="Sharing is Caring!!" />
            <div className=''>
                <form
                    className='max-w-md mx-auto bg-white mt-7 md:px-12 px-6 py-6'
                    onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <h3 className='text-2xl mb-2 text-center  font-semibold'>Rate US</h3>
                        <Rating
                            className='mx-auto mb-2'
                            style={{ maxWidth: 200 }}
                            value={rating}
                            onChange={setRating}
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold ">Which recipe you liked most?</span>
                        </label>
                        <select
                            defaultValue="Pick One"
                            {...register("category", { required: true })}
                            className="w-full select select-bordered"
                        >
                            <option disabled >Pick One</option>
                            <option>Cake</option>
                            <option>Soup</option>
                            <option>Pizza</option>
                            <option>Dessert</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Do you have any suggestion for us?</span>
                        </label>
                        <input
                            type="text"
                            {...register("suggest", { required: true })}
                            placeholder="Type here"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Kindly express your care in a short way.</span>
                        </label>
                        <textarea
                            {...register("details", { required: true })}
                            className="textarea textarea-bordered h-24"
                            placeholder="Recipe Details">

                        </textarea>
                    </div>
                    <input className='primary-btn mt-5' type="submit" value="Add Review" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;