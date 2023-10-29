import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import SectionTitle from '../../../components/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token


const AddItem = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`


    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
                    console.log(newItem)
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log('After posting new menu item', data)
                            if (data.data.insertedId) {
                                reset()
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Item added successfully',
                                })
                            }
                        })
                }
            })
    };

    return (
        <div className='w-full md:px-10'>
            <Helmet>
                <title>THE CAKE STAND || Add Item</title>
            </Helmet>
            <SectionTitle heading="Add An Item" subHeading="What's New" />
            <div className=''>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Name</span>
                        </label>
                        <input
                            {...register("name", { required: true, maxLength: 80 })}
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered  w-full"
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
                            className="file-input  file-input-bordered w-full"
                        />
                    </div>
                    <input className='primary-btn mt-4' type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;