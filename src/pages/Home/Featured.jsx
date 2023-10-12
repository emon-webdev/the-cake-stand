import React from "react";
import { Link } from "react-router-dom";
import featuredImg from "../../assets/home/feature_item.png";
import SectionTitle from "../../components/SectionTitle";

const Featured = () => {
  return (
    <div className="featured-item py-16 bg-fixed text-white">
      <div className="container">
        <SectionTitle subHeading="check it out" colorHeading="ITEM" heading="Featured " />
        <div className="md:flex pt-10 pb-6 justify-center items-center">
          <div className="md:basis-6/12 w-full">
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10 w-full md:basis-6/12">
            <h2 className="text-2xl text-[#ffc222]">Hot Fresh</h2>
            <p className="uppercase text-3xl my-2">SPECIAL OFFER</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae
            </p>
            <Link to="/menu" className="mt-6 primary-btn second-btn">
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
