import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";
import Slider from "react-slick";
// import slider3 from "../../assets/home/03.png";
// import slider4 from "../../assets/home/04.jpg";
// import slider5 from "../../assets/home/05.png";
// import slider6 from "../../assets/home/06.png";

const Banner = () => {


  const settings = {
    dots: true,
    accessibility: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    touchMove: true,
    swipeToSlide: true,
    // autoplay: true,
    autoplaySpeed: 3000,
  };


  return (
    <div className="hero-area">

      <Slider {...settings} className='max-h-[800px]'>
        <div
          className="banner-area bg-1 "
        >
          <div className="container">
            <div className="banner-wrapper h-[600px] md:h-[800px] flex items-center justify-between">
              <div
                data-aos="fade-right"
                className="banner-content md:basis-6/12">
                <h4 className="text-[#ffc222] text-3xl mb-3">Best Quality</h4>
                <h2 className='md:text-[50px] mb-4 text-[36px] font-semibold flex items-center '>
                  Options of
                </h2>

                <p className='text-xl mb-10  text-[#fff] '>
                  Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                <div className="hero-btn text-center">
                  <Link
                    className="primary-btn"
                    to="/contactus">
                    Order Now
                  </Link>
                </div>
              </div>
              <div
                data-aos="fade-left"
                className="banner-img md:basis-5/12 hidden md:block">

                <img src='https://demo2.pavothemes.com/poco/wp-content/uploads/2022/12/rev_home5_7.png' alt="" srcSet="" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="banner-area bg-2"
        >
          <div className="container">
            <div className="banner-wrapper h-[600px] md:h-[800px] flex items-center justify-between">
              <div
                data-aos="fade-right"
                className="banner-content md:basis-6/12">
                <h4 className="text-[#ffc222] text-3xl mb-3">Best Quality</h4>
                <h2 className='md:text-[50px] mb-4 text-[36px] font-semibold flex items-center text-[#fff] '>
                  Options of
                </h2>

                <p className='text-xl mb-10  text-[#fff] '>
                  Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                <div className="hero-btn text-center">
                  <Link
                    className="primary-btn"
                    to="/contactus">
                    Order Now
                  </Link>
                </div>
              </div>
              <div
                data-aos="fade-left"
                className="banner-img md:basis-5/12 hidden md:block">
                <img src='https://demo2.pavothemes.com/poco/wp-content/uploads/2022/12/rev_home5_7.png' alt="" srcSet="" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="banner-area bg-3"
        >
          <div className="container">
            <div className="banner-wrapper h-[600px] md:h-[800px] flex items-center justify-between">
              <div
                data-aos="fade-right"
                className="banner-content md:basis-6/12">
                <h4 className="text-[#ffc222] text-3xl mb-3">Best Quality</h4>
                <h2 className='md:text-[50px] mb-4 text-[36px] font-semibold flex items-center '>
                  Options of
                </h2>

                <p className='text-xl mb-10  text-[#fff] '>
                  Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                <div className="hero-btn text-center">
                  <Link
                    className="primary-btn"
                    to="/contactus">
                    Order Now
                  </Link>
                </div>
              </div>
              <div
                data-aos="fade-left"
                className="banner-img md:basis-5/12 hidden md:block">
                <img src='https://demo2.pavothemes.com/poco/wp-content/uploads/2022/12/rev_home5_7.png' alt="" srcSet="" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="banner-area bg-4"
        >
          <div className="container">
            <div className="banner-wrapper h-[600px] md:h-[800px] flex items-center justify-between">
              <div
                data-aos="fade-right"
                className="banner-content md:basis-6/12">
                <h4 className="text-[#ffc222] text-3xl mb-3">Best Quality</h4>
                <h2 className='md:text-[50px] mb-4 text-[36px] font-semibold flex items-center '>
                  Options of
                </h2>

                <p className='text-xl mb-10  text-[#fff] '>
                  Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                <div className="hero-btn text-center">
                  <Link
                    className="primary-btn"
                    to="/contactus">
                    Order Now
                  </Link>
                </div>
              </div>
              <div
                data-aos="fade-left"
                className="banner-img md:basis-5/12 hidden md:block">
                <img src='https://demo2.pavothemes.com/poco/wp-content/uploads/2022/12/rev_home5_7.png' alt="" srcSet="" />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
