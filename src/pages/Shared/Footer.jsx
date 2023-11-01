import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>

      <div className="footer md:py-16 py-10 bg-[#000]">
        <div className="container ">
          <div className="md:flex justify-between lg:gap-8 gap-4">
            <nav className="md:basis-1/2 basis-full">
              <header className="text-2xl my-4 text-white ">About Me</header>
              <p className='text-lg  text-[#fff] '>
                I`m Emon Hossain <span className='text-base'>as </span>
                a professional MERN Stack Developer | Frontend Developer | React Developer | WordPress with Elementor | Unbounce Developer.  I love to explore new technologies.
              </p>

              <a
                href="https://drive.google.com/file/d/1DgfPMEYiOOZtWiNrLDSvI8jXAmYWY_6Y/view"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 primary-btn second-btn hover:bg-[#18975f]"
              >
                Resume
              </a>

            </nav>
            <nav className="md:basis-1/4 basis-full">
              <header className="text-2xl my-4 text-white">Services</header>
              <Link to="/menu" className="link link-hover text-white block mb-2">Menu</Link>
              <Link to="/order/salad" className="link link-hover text-white block mb-2">Order Food</Link>
              <Link to="/contactus" className="link link-hover text-white block mb-2">Contact</Link>
              <Link to="/blog" className="link link-hover text-white block mb-2">Blog</Link>

            </nav>
            <nav className="md:basis-1/4 basis-full">
              <header className="text-2xl my-4 text-white">Social</header>
              <div className="flex gap-5">

                <a href="https://emon-36659.web.app/"
                  target="_blank" rel="noreferrer"
                >
                  <FaUserAlt
                    className="text-white text-xl"
                  />
                </a>
                <a href="https://www.linkedin.com/in/emon-webdev/"
                  target="_blank" rel="noreferrer"
                >
                  <BsLinkedin
                    className="text-white text-xl"
                  />
                </a>
                <a href="https://github.com/emon-webdev"
                  target="_blank" rel="noreferrer"
                >
                  <FaGithub
                    className="text-white text-xl"
                  />
                </a>
                <a href="https://www.facebook.com/emon.webdev"
                  target="_blank" rel="noreferrer"
                >
                  <AiFillFacebook
                    className="text-white text-xl"
                  />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="footer items-center p-4 bg-[#1e1d23] text-neutral-content">
        <div className="container text-center">
          <p className="mx-auto">Copyright © 2023 - All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
