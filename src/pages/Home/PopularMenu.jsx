import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuItem from "../Shared/MenuItem";

const PopularMenu = () => {
  const [menu, loading] = useMenu();
  const popular = menu?.filter((item) => item.category === "popular");

  return (
    <section className="py-16">
      <div className="container">
        <SectionTitle subHeading="From Our Menu" heading="Best " colorHeading="Items" />
        <div className="grid md:grid-cols-2 gap-4 py-10">
          {popular?.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
        <div className="text-center">
          <Link to='/menu' className="primary-btn mx-auto">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularMenu;
