import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import SectionTitle from '../../../components/SectionTitle';
import useAuth from '../../../hooks/useAuth';
const Reservation = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [startTime, setStartTime] = useState(format(new Date(), 'HH:mm'));
    const [endTime, setEndTime] = useState(format(new Date(), 'HH:mm'));

    const {
        data: reservation = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["reservation", user?.email],
        queryFn: async () => {
            const res = await fetch(
                `${import.meta.env.VITE_APP_API_URL}/reservation?email=${user?.email}`
            );
            const data = res.json();
            return data;
        },
    });
    console.log(reservation)

    const onSubmit = data => {
        console.log(data)
        const { guest, email, name, phone } = data;
        const newReservation = { selectedDate, startTime, endTime, name, email, phone, guest }
        console.log(newReservation)

        fetch(`${import.meta.env.VITE_APP_API_URL}/reservation`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newReservation),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    reset()
                    refetch()
                    Swal.fire('Table Booking Successful')
                }
            });


    };

    return (
        <div className="w-full bg-">
            <Helmet>
                <title>THE CAKE STAND || Reservation</title>
            </Helmet>
            <SectionTitle heading="BOOK A TABLE" subHeading="Reservation!!" />
            <div className=''>
                <form
                    className=' bg-white rounded-md mt-7 md:px-12 px-4 py-6'
                    onSubmit={handleSubmit(onSubmit)}>
                    <div className='md:flex items-center gap-5 mb-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Date</span>
                            </label>
                            <input
                                type="date"
                                value={format(selectedDate, 'yyyy-MM-dd')}
                                onChange={(e) => setSelectedDate(new Date(e.target.value))}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Stat Time</span>
                            </label>
                            <input
                                type="time"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">End Time</span>
                            </label>
                            <input
                                type="time"
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>
                    <div className='md:flex items-center gap-5 mb-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Guest</span>
                            </label>

                            <input
                                type="number"
                                {...register("guest", { required: true })}
                                placeholder="Type here"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Phone</span>
                            </label>

                            <input
                                type="number"
                                {...register("phone", { required: true })}
                                placeholder="Type here"
                                className="input input-bordered w-full"
                            />
                        </div>

                    </div>
                    <div className='md:flex items-center gap-5 mb-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input
                                type="text"
                                {...register("name")}
                                readOnly
                                defaultValue={user?.displayName}
                                placeholder={user?.displayName}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register("email")}
                                defaultValue={user?.email}
                                placeholder={user?.email}
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </div>

                    </div>
                    <input className='primary-btn mt-4' type="submit" value="Book A Table" />
                </form>
            </div>
        </div>
    );
};

export default Reservation;