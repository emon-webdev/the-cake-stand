import React from 'react';
import 'react-fancybox/lib/fancybox.css';
import Slider from 'react-slick';
import galleryImg1 from '../assets/gallery/gallery-1.jpg';
import galleryImg2 from '../assets/gallery/gallery-2.jpg';
import galleryImg3 from '../assets/gallery/gallery-3.jpg';
import galleryImg4 from '../assets/gallery/gallery-4.jpg';
import galleryImg5 from '../assets/gallery/gallery-5.jpg';
import galleryImg6 from '../assets/gallery/gallery-6.jpg';
import galleryImg7 from '../assets/gallery/gallery-7.jpg';
import SectionTitle from './SectionTitle';

const FoodGallery = () => {
    const settings = {
        dots: false,
        accessibility: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipe: true,
        touchMove: true,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        <div className='gallery-area'>
            <SectionTitle heading="Food " colorHeading="Gallery" />
            <div className='gallery-items mt-16 overflow-hidden max-h-[520px]'>
                <Slider {...settings} className='max-h-[520px]'>
                    <div className='single-gallery overflow-hidden h-[100%] '>
                        <img className='w-full h-[420px] lg:h-[520px]' src={galleryImg1} alt="" srcSet="" />
                    </div>
                    <div className='single-gallery overflow-hidden h-[100%] '>
                        <img className='w-full h-[420px] lg:h-[520px]' src={galleryImg2} alt="" srcSet="" />
                    </div>
                    <div className='single-gallery overflow-hidden h-[100%] '>
                        <img className='w-full h-[420px] lg:h-[520px]' src={galleryImg3} alt="" srcSet="" />
                    </div>
                    <div className='single-gallery overflow-hidden h-[100%] '>
                        <img className='w-full h-[420px] lg:h-[520px]' src={galleryImg4} alt="" srcSet="" />
                    </div>
                    <div className='single- overflow-hidden h-[100%] '>
                        <img className='w-full h-[420px] lg:h-[520px]' src={galleryImg5} alt="" srcSet="" />
                    </div>
                    <div className='single-gallery overflow-hidden h-[100%] '>
                        <img className='w-full h-[420px] lg:h-[520px]' src={galleryImg6} alt="" srcSet="" />
                    </div>
                    <div className='single-gallery overflow-hidden h-[100%] '>
                        <img className='w-full h-[420px] lg:h-[520px]' src={galleryImg7} alt="" srcSet="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default FoodGallery;