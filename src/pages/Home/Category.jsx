import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import categorySlide1 from "../../assets/home/slide1.jpg";
import categorySlide2 from "../../assets/home/slide2.jpg";
import categorySlide3 from "../../assets/home/slide3.jpg";
import categorySlide4 from "../../assets/home/slide4.jpg";
import categorySlide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        heading={"ORDER ONLINE"}
        subHeading={"---From 11:00am to 10:00pm---"}
      />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24 "
      >
        <SwiperSlide>
          <img src={categorySlide1} />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={categorySlide2} />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={categorySlide3} />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={categorySlide4} />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={categorySlide5} />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
