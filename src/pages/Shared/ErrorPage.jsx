import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../assets/404.png';
import InnerBanner from './InnerBanner';
const ErrorPage = () => {
    return (
        <div>
            <InnerBanner colorTitle="404" />
            <div className='py-14'>
                <div className="container">
                    <div
                    // className="py-[70px] relative z-0 dynamic-banner bg-[#111121]"
                    // style={{
                    //     backgroundImage: `url(${errorImg})`,
                    //     backgroundPosition: "center",
                    //     backgroundSize: "cover",
                    //     backgroundRepeat: "no-repeat",
                    // }}
                    >

                    </div>
                    <div className='text-center'>
                        <img className='text-center mx-auto' src={errorImg} alt="" srcSet="" />
                        <h2 className='text-3xl my-5'>Oops! I think we just lost something</h2>
                        <Link
                            className='primary-btn mx-auto'
                            to='/' >
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;