import React from "react";
import { Link } from "react-router-dom";
import Cover from "../Shared/Cover";
import MenuItem from "../Shared/MenuItem";

const MenuCategory = ({ items, title, image }) => {
  return (
    <div className="py-16">
      {title && <Cover coverImg={image} title={title} />}
      <div className="grid md:grid-cols-2 gap-4">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="mt-4 btn btn-outline border-0 border-b-4">
          Read More
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
