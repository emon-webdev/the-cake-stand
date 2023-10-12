import React from "react";
import FoodCard from "./FoodCard";

// import required modules

const OrderTab = ({ items }) => {

  return (
    <>
      <div>
        <div className="pt-8 align-content-center justify-items-center grid gap-4  grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-5 ">
          {items?.map((item) => (
            <FoodCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OrderTab;
