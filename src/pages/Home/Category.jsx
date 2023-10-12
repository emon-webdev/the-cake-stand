
// Import Swiper styles
import React from "react";
import Slider from "react-slick";
import "swiper/css";
import "swiper/css/pagination";
import categorySlide1 from "../../assets/home/slide1.jpg";
import categorySlide2 from "../../assets/home/slide2.jpg";
import categorySlide3 from "../../assets/home/slide3.jpg";
import categorySlide4 from "../../assets/home/slide4.jpg";
import SectionTitle from "../../components/SectionTitle";

const Category = () => {
  const settings = {
    dots: false,
    accessibility: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,
    touchMove: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="bg-[#fff8e8] pt-16 md:pb-6">
      <SectionTitle
        heading={"ORDER "} colorHeading="ONLINE"
        subHeading={"Best selling dishes"}
      />

      <div>
        <div className="container py-14">
          <Slider {...settings} className='max-h-[]'>

            <div className='single-item relative overflow-hidden h-[100%] '>
              <img className="w-full" src={categorySlide1} alt="" srcSet="" />
              <h3 className="text-3xl font-bold w-full px-3 absolute bottom-[20px] left-[50%] translate-x-[-50%] uppercase text-center -mt-16 text-white">Meat Box</h3>
            </div>
            <div className='single-item relative overflow-hidden h-[100%] '>
              <img className="w-full" src={categorySlide2} alt="" srcSet="" />
              <h3 className="text-3xl font-bold w-full px-3 absolute bottom-[20px] left-[50%] translate-x-[-50%] uppercase text-center -mt-16 text-white">Cake</h3>
            </div>
            <div className='single-item relative overflow-hidden h-[100%] '>
              <img className="w-full" src={categorySlide3} alt="" srcSet="" />
              <h3 className="text-3xl font-bold w-full px-3 absolute bottom-[20px] left-[50%] translate-x-[-50%] uppercase text-center -mt-16 text-white">Pizza</h3>
            </div>
            <div className='single-item relative overflow-hidden h-[100%] '>
              <img className="w-full" src={categorySlide4} alt="" srcSet="" />
              <h3 className="text-3xl font-bold w-full px-3 absolute bottom-[20px] left-[50%] translate-x-[-50%] uppercase text-center -mt-16 text-white">French Fries</h3>
            </div>
            <div className='single-item relative overflow-hidden h-[100%] '>
              <img className="w-full" src={categorySlide3} alt="" srcSet="" />
              <h3 className="text-3xl font-bold w-full px-3 absolute bottom-[20px] left-[50%] translate-x-[-50%] uppercase text-center -mt-16 text-white">Salad</h3>
            </div>

          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Category;
