import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../components/SectionTitle";

import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-16">
      <div className="container">
        <SectionTitle subHeading="What Our client Say?" heading="Testimonials" />
        <>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews?.map((review) => (
              <SwiperSlide key={review?._id}>
                <div className="flex flex-col text-center items-center px-4 py-8 md:px-16">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review?.rating}
                    readOnly
                  />
                  <p className="my-4">{review?.details}</p>
                  <h3 className="text-[#ffc222]">{review?.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </section>
  );
};

export default Testimonials;
