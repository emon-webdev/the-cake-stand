import React from "react";

const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Food Image" />
      </figure>
      <p className="absolute right-0 bg-slate-900 text-white p-2 mt-4">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline bg-slate-200 border-0 border-b-4 border-yellow-500">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
