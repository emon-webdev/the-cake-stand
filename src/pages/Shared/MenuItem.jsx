import React from "react";

const MenuItem = ({ item }) => {
  const { image, price, recipe, name } = item;

  return (
    <div className="flex space-x-4">
      <img className="w-[104px] h-[104px]" src={image} />
      <div>
        <h2>{name}-------</h2>
        <p>{recipe}</p>
      </div>
      <p className="text-">$ {price}</p>
    </div>
  );
};

export default MenuItem;
