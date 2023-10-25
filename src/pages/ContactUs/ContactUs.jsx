import React from 'react';
import { CgMail } from "react-icons/cg";
import SectionTitle from '../../components/SectionTitle';
import InnerBanner from '../Shared/InnerBanner';
const ContactUs = () => {
    return (
        <div>
            <InnerBanner title='Contact' colorTitle="US" />
            <div className="contact-area  pt-12 md:pt-20">
                <div className="container">
                    <SectionTitle
                        heading="we'd love to hear from you" subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <div className='contact-info  py-12 md:mb-5 align-content-center justify-items-center grid gap-4  grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-5 '>

                        <div className="email-info rounded-lg w-full text-center border border-[#ffc222] py-4 px-5">
                            <div className='info-icon'>
                                <CgMail className='text-3xl mx-auto border-[#ffc222] border p-2 h-[60px] w-[60px] mb-5 rounded-full' />
                            </div>
                            <div className="p-6 pt-0">
                                <h3 className='text-xl mb-2 font-semibold'>Email</h3>
                                <p>Our friendly team is here to help</p>
                                <p>
                                    <a className='text-[#ffc222]' href="mailto:emon.hossain.web@gmail.com">thecakestand@gmail.com</a>
                                </p>
                            </div>
                        </div>
                        <div className="email-info rounded-lg w-full text-center border border-[#ffc222] py-4 px-5">
                            <div className='info-icon'>
                                <CgMail className='text-3xl mx-auto border-[#ffc222] border p-2 h-[60px] w-[60px] mb-5 rounded-full' />
                            </div>
                            <div className="p-6 pt-0">
                                <h3 className='text-xl mb-2 font-semibold'>Office</h3>
                                <p>Come say hello at our office HQ.</p>
                                <p>
                                    <a className='text-[#ffc222]' href="">59 R.A. Khan Chowdhury Rd, Kushtia 7000</a>
                                </p>
                            </div>
                        </div>
                        <div className="email-info rounded-lg w-full text-center border border-[#ffc222] py-4 px-5">
                            <div className='info-icon'>
                                <CgMail className='text-3xl mx-auto border-[#ffc222] border p-2 h-[60px] w-[60px] mb-5 rounded-full' />
                            </div>
                            <h3 className='text-xl mb-2 font-semibold'>Phone</h3>
                            <p>Fouucibus neque vel risus furpis</p>
                            <p>
                                <a className='text-[#ffc222]' href="tel:01919371381">+1-555-157-5651</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{ width: '100%', height: '500px' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d322.3888796527792!2d89.12605695853895!3d23.9103966383709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe974cc29f7593%3A0x63aabc8b6f97cc85!2sThe%20Cake%20Stand!5e0!3m2!1sen!2sbd!4v1696323666107!5m2!1sen!2sbd"
                        width="100%"
                        height="500px"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;