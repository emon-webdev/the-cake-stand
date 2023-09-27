import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../../components/SectionTitle';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token
console.log(img_hosting_token)

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    };
    console.log(errors)

    return (
        <div className='w-full px-10'>
            <Helmet>
                <title>THE CAKE STAND || Add Item</title>
            </Helmet>
            <SectionTitle heading="Add An Item" subHeading="What's New" />
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                                {...register("category", { required: true })}
                                className="select select-bordered"
                            >
                                <option disabled selected>Pick one</option>
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
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Pick a file</span>
                        </label>
                        <input
                            type="file"
                            {...register("image", { required: true })}
                            className="file-input file-input-bordered w-full max-w-xs"
                        />
                    </div>
                    <input className='btn btn-sm mt-4' type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;