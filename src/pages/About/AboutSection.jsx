import React from 'react';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import about1 from '../../assets/about-1.jpg';
import about2 from '../../assets/about-2.jpg';
import about3 from '../../assets/about-3.jpg';
const AboutSection = () => {
    return (
        <div className="md:flex items-center gap-8 justify-between details ">
            <div className="md:basis-2/5 w-full  content-box">
                <div className="flex title-icon-box justify-between">
                    <div className="section-title">
                        <h2
                            className="font-bold text-xl tracking-wider mb-2 text-[#ffc222]">
                            Wellome!
                        </h2>
                        <p className="font-bold text-4xl tracking-wider mb-2 text-black">
                            Best cake & pizza from the whole world
                        </p>
                    </div>
                </div>
                <div className=" pt-4 pb-6">
                    <p className="text-black  dark:text-color-910 leading-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum. Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices</p>
                    <div className='mt-5'>
                        <Link
                            className='primary-btn '
                            to="/contactus">Contact now</Link>
                    </div>
                </div>
            </div>
            <div className="md:basis-3/5 flex gap-3 justify-center items-center w-full image-box">
                <div className=''>
                    <img src={about1} alt="Emon Hossain" className="rounded-md" />
                </div>
                <div className=''>
                    <img src={about2} className="mb-3 rounded-md" alt="Emon Hossain" />
                    <img src={about3} alt="Emon Hossain" className="rounded-md" />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;