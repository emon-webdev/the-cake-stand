import React from "react";

const MenuItem = ({ item }) => {
  const { image, price, recipe, name } = item;

  return (
    <div className="single-menu-item flex p-3 items-center rounded-lg space-x-4 border border-[#ffc222] ">
      <img className="w-[104px] h-[104px] transition duration-300 rounded-lg" src={image} />
      <div>
        <h2 className="font-semibold transition duration-300">{name}-------</h2>
        <p className="my-2">{recipe}</p>
        <h5 className="text-[#ffc222] font-bold">$ {price}</h5>
      </div>
    </div>
  );
};

export default MenuItem;
