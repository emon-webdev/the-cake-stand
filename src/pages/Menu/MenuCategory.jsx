import React from "react";
import { Link } from "react-router-dom";
import Cover from "../Shared/Cover";
import MenuItem from "../Shared/MenuItem";

const MenuCategory = ({ items, title, image }) => {
  return (
    <div className="relative z-0">
      <div className="pt-12 pb-10">
        {title && <Cover coverImg={image} title={title} />}
        <div className="container">
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {items?.map((item) => (
              <MenuItem key={item._id} item={item} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              className="primary-btn mx-auto"
              to={`/order/salad`}>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
