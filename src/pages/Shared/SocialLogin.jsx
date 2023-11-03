import React, { useContext } from 'react';
import { FaGofore } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user

                const saveUser = {
                    name: loggedInUser?.displayName,
                    email: loggedInUser?.email
                }

                // save database user data
                fetch(`${import.meta.env.VITE_APP_API_URL}/users`, {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                        // navigate("/");
                    })
            })
    }

    return (
        <div>
            <div className='divider'></div>
            <div className='w-full text-center my-4'>
                <button onClick={handleGoogleSignIn} className="btn text-lg hover:bg-[#ffc222]">
                    <FaGofore />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;