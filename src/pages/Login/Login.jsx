import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import bg from '../../assets/login.jpg';
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../Shared/SocialLogin";
// A1!emon@gamil.com
// Aemon123@gamil.com
const Login = () => {
  // const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successfull",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });

    });
  };


  return (
    <>
      <Helmet>
        <title>THE CAKE STAND || Sign In</title>
      </Helmet>
      {/* <InnerBanner title="Login" colorTitle="Now" /> */}
      <div
        className="hero py-16 min-h-screen bg-base-200"
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
              <h1 className="md:text-5xl text-4xl font-bold">Login <span className="text-[#ffc222]">now!</span></h1>
              <p className="py-6">
                Hey, Enter your details to get sign in to your account
              </p>
            </div>
            <form onSubmit={handleLogin} className="text-white">
              <div className="form-control mb-2">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered w-full text-black bg-[#e7e8e8]"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  name="password"
                  type="text"
                  placeholder="password"
                  className="input input-bordered w-full text-black bg-[#e7e8e8]"
                />
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn bg-[#ffc222] "
                  type="submit"
                  value="Sign In"
                />
              </div>
            </form>
            <div>
              <p className="text-center mt-6 text-white">
                <small>
                  You don`t have an account then
                  <Link
                    className="text-[#ffc222] mx-1"
                    to="/signup">
                    Sing Up
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

export default Login;




















// const handleValidateCaptcha = (e) => {
//   const user_captcha_value = e.target.value;
//   if (validateCaptcha(user_captcha_value)) {
//     setDisabled(false);
//   } else {
//     setDisabled(true);
//   }
// };
// useEffect(() => {
//   loadCaptchaEnginge(4);
// }, []);

{/* <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  name="captcha"
                  type="text"
                  placeholder="type the captcha above"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div> */}