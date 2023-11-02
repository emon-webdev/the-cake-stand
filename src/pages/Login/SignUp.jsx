import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import bg from '../../assets/signup.jpg';
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../Shared/SocialLogin";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token

// emonhossain71@gamil.com
const SignUp = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/"

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
          // console.log(imgURL)

          createUser(data.email, data.password)
            .then(result => {
              const loggedUser = result.user;
              console.log(loggedUser);
              updateUserProfile(data.name, imgURL)
                .then(() => {
                  console.log('user profile info updated')
                  const saveUser = { name: data.name, email: data?.email }
                  // save database user data
                  fetch(`${import.meta.env.VITE_APP_API_URL}/users`, {
                    method: "POST",
                    headers: {
                      'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                  })
                    .then(res => res.json())
                    .then(data => {
                      if (data.insertedId) {
                        Swal.fire({
                          position: 'top-center',
                          icon: 'success',
                          title: 'User created successfully.',
                          showConfirmButton: false,
                          timer: 500
                        });
                      }
                    })
                  reset();
                  navigate(from, { replace: true });
                })
                .catch(error => console.log(error))
            })
        }
      })



  };

  // console.log(onSubmits)

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero py-16 bg-base-200"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="">
          <div className="rounded-3xl px-[35px] md:px-[85px] md:py-[60px] py-[40px] md:w-[620px] w-[380px] border border-[#888888] shadow-2xl bg-[#141414]">
            <div className="text-center text-white">
              <h1 className="md:text-5xl text-4xl font-bold">Sign <span className="text-[#ffc222]">Up!</span></h1>
              <p className="py-6">
                Hey, Enter your details to get sign up to your account
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="form-control mb-2">
                <label className="label">
                  <span className="label-text text-white">Name *</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control mb-2">
                <label className="label">
                  <span className="label-text text-white">Photo *</span>
                </label>
                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="file-input w-full"
                />
                {errors.image && (
                  <span className="text-red-600">Photo  is required</span>
                )}
              </div>
              <div className="form-control mb-2">
                <label className="label">
                  <span className="label-text text-white">Email *</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password *</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
                <label className="label">
                  <Link to="/"
                    className="label-text-alt text-white link hover:text-yellow-400 ">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-3">
                <input
                  className="btn bg-[#ffc222]"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <div>
              <p className="text-center mt-3 text-white">
                <small>
                  You don`t have an account then
                  <Link
                    className="text-[#ffc222] mx-1"
                    to="/login">
                    Sing In
                  </Link>
                  now
                </small>
              </p>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
