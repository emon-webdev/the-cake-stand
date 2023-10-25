import React from 'react';
import { Link } from 'react-router-dom';
// import banner1 from '../../assets/Banner1.jpg';
import banner1 from '../../assets/hero_bg_4.jpg';
const InnerBanner = ({ title, colorTitle }) => {
    return (
        <div
            className="py-[70px] dynamic-banner bg-[#111121]"
            style={{
                backgroundImage: `url(${banner1})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="container">
                <div className="text-center">
                    <h1 className=" text-white text-4xl font-bold">{title} <span className="text-[#ffc222]">{colorTitle}</span></h1>
                    <p className="py-[10px] leading-[26px]	 text-white text-[16px]">
                        <Link to="/">Home</Link>
                        <span>
                            {" "}
                            {">"} {title} {colorTitle}
                        </span>
                    </p>
                </div>
                {/* <div className="bg-white">
          <h3>Find Your Car</h3>
        </div> */}
            </div>
        </div>
    );
};

export default InnerBanner;