import React from "react";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "react-scroll-to-top";
import dessert from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import FoodGallery from "../../components/FoodGallery";
import Loading from "../../components/Loading";
import SectionTitle from "../../components/SectionTitle";
import { useGetProductsQuery } from "../../redux/api/apiSlice";
import InnerBanner from "../Shared/InnerBanner";
import MenuCategory from "./MenuCategory";
const Menu = () => {
  const { data: menu, isLoading } = useGetProductsQuery(undefined)
  const desserts = menu?.filter((item) => item.category === "dessert");
  const soup = menu?.filter((item) => item.category === "soup");
  const salad = menu?.filter((item) => item.category === "salad");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const offered = menu?.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>THE CAKE STAND || OUR MENU</title>
      </Helmet>
      {/* <Cover coverImg={coverImg} title="our menu" /> */}
      <InnerBanner title="Our" colorTitle="Menu" />
      <div className="md:pt-14 pt-10">
        <SectionTitle subHeading="Don't Miss" heading="Menus Of The Day" />
      </div>

      {
        isLoading ?
          <Loading />
          :
          <>
            <MenuCategory items={offered} />
            <MenuCategory items={desserts} title="Burger" image={dessert} />
            <MenuCategory items={pizza} title="Pizza" image={pizzaImg} />
            <MenuCategory items={salad} title="Meat Box" image={saladImg} />
            <MenuCategory items={soup} title="Cake" image={soupImg} />
          </>

      }


      <FoodGallery />
      <ScrollToTop smooth />
    </div>
  );
};

export default Menu;
