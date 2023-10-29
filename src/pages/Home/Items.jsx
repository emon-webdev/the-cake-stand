import { Spinner } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import cat_img_4 from '../../assets/item-img/category-11.png';
import cat_img_6 from '../../assets/item-img/category-22.png';
import cat_img_5 from '../../assets/item-img/category-33.png';
import cat_img_1 from '../../assets/item-img/category3.png';
import cat_img_2 from '../../assets/item-img/category5.png';
import cat_img_3 from '../../assets/item-img/category7.png';
import Loading from '../../components/Loading';
import { useGetProductsQuery } from '../../redux/api/apiSlice';
const Items = () => {
    const { data: products, isLoading } = useGetProductsQuery(undefined)
    // const [menu, loading] = useMenu();

    const desserts = products?.filter((item) => item.category === "dessert");
    const soup = products?.filter((item) => item.category === "soup");
    const salad = products?.filter((item) => item.category === "salad");
    const pizza = products?.filter((item) => item.category === "pizza");
    const drinks = products?.filter((item) => item.category === "drinks");
    if (isLoading) {
        <Loading />
    }
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
        <div className='py-8 pt-10'>
            <div className="container">
                <div className='item-group'>
                    <Slider {...settings} className='max-h-[130px]'>
                        <div className='single-item overflow-hidden h-[100%] '>
                            <Link
                                to="/order/salad"
                                className="product-cat-link bg-[#18975f] h-[130px] transition duration-300 hover:bg-[#ffba00] p-3 md:px-4 rounded-lg flex items-center justify-between  gap-1"
                            >
                                <div className="product-cat-caption text-white">
                                    <h4 className='font-bold'>Burger</h4>
                                    <div className="flex items-center mt-1">
                                        {isLoading ?
                                            <Spinner size='sm' color='white.500' />
                                            :
                                            <span className="">
                                                {salad?.length} products
                                            </span>
                                        }
                                    </div>

                                </div>
                                <div className="category-product-img">
                                    <img
                                        className='transition duration-300'
                                        decoding="async"
                                        src={cat_img_2} alt="Hot Drinks"
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className='single-item overflow-hidden h-[100%] '>
                            <Link
                                to="/order/pizza"
                                className="product-cat-link bg-[#cc3433] h-[130px] transition duration-300 hover:bg-[#0096dc] p-3 md:px-4 rounded-lg flex items-center justify-between  gap-1"
                            >
                                <div className="product-cat-caption text-white">
                                    <h4 className='font-bold'>Pizza</h4>
                                    <div className="flex items-center mt-1">
                                        {isLoading ?
                                            <Spinner size='sm' color='white.500' />
                                            :
                                            <span className="">
                                                {pizza?.length} products
                                            </span>
                                        }
                                    </div>
                                </div>
                                <div className="category-product-img">
                                    <img
                                        className='transition duration-300'
                                        decoding="async"
                                        src={cat_img_1} alt="Hot Drinks"
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className='single-item overflow-hidden h-[100%] '>
                            <Link
                                to="/order/drinks"
                                className="product-cat-link bg-[#f37b2a] h-[130px] transition duration-300 hover:bg-[#824235] p-3 md:px-4 rounded-lg flex items-center justify-between  gap-1"
                            >
                                <div className="product-cat-caption text-white">
                                    <h4 className='font-bold'>Meat Box</h4>
                                    <div className="flex items-center mt-1">
                                        {isLoading ?
                                            <Spinner size='sm' color='white.500' />
                                            :
                                            <span className="">
                                                {drinks?.length} products
                                            </span>
                                        }
                                    </div>
                                </div>
                                <div className="category-product-img">
                                    <img
                                        className='transition duration-300'
                                        decoding="async"
                                        src={cat_img_3} alt="Hot Drinks"
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className='single-item overflow-hidden h-[100%] '>
                            <Link
                                to="/order/desserts"
                                className="product-cat-link bg-[#c31162] h-[130px] transition duration-300 hover:bg-[#f37b2a] p-3 md:px-4 rounded-lg flex items-center justify-between  gap-1"
                            >
                                <div className="product-cat-caption text-white">
                                    <h4 className='font-bold'>Cake</h4>
                                    <div className="flex items-center mt-1">
                                        {isLoading ?
                                            <Spinner size='sm' color='white.500' />
                                            :
                                            <span className="">
                                                {desserts?.length} products
                                            </span>
                                        }
                                    </div>
                                </div>
                                <div className="category-product-img">
                                    <img
                                        className='transition duration-300'
                                        decoding="async"
                                        src={cat_img_4} alt="Hot Drinks"
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className='single-item overflow-hidden h-[100%] '>
                            <Link
                                to="/order/soup"
                                className="product-cat-link bg-[#0096dc] h-[130px] transition duration-300 hover:bg-[#cc3433] p-3 md:px-4 rounded-lg flex items-center justify-between  gap-1"
                            >
                                <div className="product-cat-caption text-white">
                                    <h4 className='font-bold'>French Fries</h4>
                                    <div className="flex items-center mt-1">
                                        {isLoading ?
                                            <Spinner size='sm' color='white.500' />
                                            :
                                            <span className="">
                                                {soup?.length} products
                                            </span>
                                        }
                                    </div>
                                </div>
                                <div className="category-product-img">
                                    <img
                                        className='transition duration-300'
                                        decoding="async"
                                        src={cat_img_6} alt="Hot Drinks"
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className='single-item overflow-hidden h-[100%] '>
                            <Link
                                to="/order/pizza"
                                className="product-cat-link bg-[#c31162] h-[130px] transition duration-300 hover:bg-[#f37b2a] p-3 md:px-4 rounded-lg flex items-center justify-between  gap-1"
                            >
                                <div className="product-cat-caption text-white">
                                    <h4 className='font-bold'>Pizza</h4>
                                    <div className="flex items-center mt-1">
                                        {isLoading ?
                                            <Spinner size='sm' color='white.500' />
                                            :
                                            <span className="">
                                                {pizza?.length} products
                                            </span>
                                        }
                                    </div>
                                </div>
                                <div className="category-product-img">
                                    <img
                                        className='transition duration-300'
                                        decoding="async"
                                        src={cat_img_5} alt="Hot Drinks"
                                    />
                                </div>
                            </Link>
                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Items;