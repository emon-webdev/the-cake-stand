import React from "react";
import { Helmet } from "react-helmet-async";
import dessert from "../../assets/menu/dessert-bg.jpeg";
import coverImg from "../../assets/menu/menu-bg.png";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import Cover from "../Shared/Cover";
import MenuCategory from "./MenuCategory";
const Menu = () => {
  const [menu, loading] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>THE CAKE STAND || OUR MENU</title>
      </Helmet>
      <Cover coverImg={coverImg} title="our menu" />
      <SectionTitle subHeading="Don't Miss" heading="Today's Offered" />
      <MenuCategory items={offered} />
      <MenuCategory items={desserts} title="dessert" image={dessert} />
      <MenuCategory items={pizza} title="pizza" image={pizzaImg} />
      <MenuCategory items={salad} title="salad" image={saladImg} />
      <MenuCategory items={soup} title="soup" image={soupImg} />
    </div>
  );
};

export default Menu;
