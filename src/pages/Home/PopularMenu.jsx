import React from "react";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuItem from "../Shared/MenuItem";

const PopularMenu = () => {
  const [menu, loading] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-4">
      <SectionTitle subHeading="From Our Menu" heading="Popular Items" />
      <div className="grid md:grid-cols-2 gap-4">
        {popular?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <button className="mt-4 btn btn-outline border-0 border-b-4">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
