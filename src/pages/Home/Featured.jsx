import React from "react";
import featuredImg from "../../assets/home/featured.jpg";
import SectionTitle from "../../components/SectionTitle";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white">
      <SectionTitle subHeading="check it out" heading="Featured Item" />
      <div className="md:flex justify-center items-center py-16 px-16">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="mt-4 btn btn-outline border-0 border-b-4">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
