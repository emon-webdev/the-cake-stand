import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../../components/SectionTitle';


import '@smastrom/react-rating/style.css';
import useAuth from '../../../hooks/useAuth';

const Demo = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [rating, setRating] = useState(0)

    // const onSubmit = data => {
    //     const { category, details, } = data;
    //     const newReview = { name: user?.displayName, email: user?.email, image: user?.photoURL, rating, category, details, }
    //     console.log(newReview)

    //     fetch(`${import.meta.env.VITE_APP_API_URL}/review`, {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json",
    //         },
    //         body: JSON.stringify(newReview),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data.insertedId) {
    //                 reset()
    //                 Swal.fire('Review Added Successful')
    //             }
    //         });


    // };
    return (
        <div className="add-review w-full ">
            <Helmet>
                <title>THE CAKE STAND || Add Review</title>
            </Helmet>
            <SectionTitle heading="Give a Review" subHeading="Sharing is Caring!!" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellat at reiciendis aliquid! Perferendis quas, rerum, quaerat explicabo sint mollitia hic, voluptas fugiat nostrum in voluptates id. Tempora dolore nam, consectetur fugiat excepturi veritatis ducimus, perspiciatis beatae maxime ex repellat facere eaque dolorum dolor aperiam neque ipsam facilis vero atque officiis, quasi molestias natus ratione? Earum velit perferendis quibusdam eligendi.</h2>
            <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Name</span>
                        </label>
                        <input
                            {...register("name", { required: true, maxLength: 80 })}
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full"
                        />
                    </div> 
                    <div className='md:flex items-center gap-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
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
                                <span className="label-text font-semibold">Price</span>
                            </label>
                            <input
                                type="number"
                                {...register("price", { required: true })}
                                placeholder="Type here"
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Pick a file</span>
                        </label>
                        <input
                            type="file"
                            {...register("image", { required: true })}
                            className="file-input  file-input-bordered w-full"
                        />
                    </div>
            {/*  <div className=''>
                <form
                // onSubmit={handleSubmit(onSubmit)}
                >
                 <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Name</span>
                        </label>
                        <input
                            {...register("name", { required: true, maxLength: 80 })}
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full"
                        />
                    </div> 
                
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea
                            {...register("recipe", { required: true })}
                            className="textarea textarea-bordered h-24"
                            placeholder="Recipe Details">

                        </textarea>
                    </div>
                  
                </form>
            </div> */}
        </div>
    );
};

export default Demo;