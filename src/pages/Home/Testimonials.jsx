import { Rating } from "@smastrom/react-rating";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../components/SectionTitle";

import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import reviewIMmg from '../../assets/review-img.png';
import Loading from "../../components/Loading";
import { useGetReviewsQuery } from "../../redux/api/apiSlice";
const Testimonials = () => {

  const { data: reviews, isLoading } = useGetReviewsQuery(undefined)


  return (
    <section className="md:my-16 my-10 mb-2">
      <div className="container">
        <SectionTitle subHeading="What Our client Say?" heading="Testimonials" />

        {
          isLoading ?
            <Loading />
            :
            <Swiper
              navigation={true}
              loop={true}
              modules={[Navigation]}
              autoplay={{ delay: 2000 }}
              speed={1000}
              className="mySwiper">
              {reviews?.slice(0, 7).map((review) => (
                <SwiperSlide key={review?._id}>
                  <div className="flex flex-col text-center items-center px-4 py-8 md:px-16">
                    <img
                      className="rounded-full mb-2 w-[90px] h-[90px]"
                      src={review?.image ? review?.image : reviewIMmg} alt="" srcSet="" />
                    <Rating
                      style={{ maxWidth: 170 }}
                      value={review?.rating}
                      readOnly
                    />
                    <p className="my-4">{review?.details.length > 300 ? review?.details.slice(0, 300) + ' ...' : review?.details}</p>
                    <h3 className="text-[#ffc222]">{review?.name}</h3>
                    <h3 className="text-[#888888] mt-2">{review?.email}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
        }
      </div>
    </section>
  );
};

export default Testimonials;
