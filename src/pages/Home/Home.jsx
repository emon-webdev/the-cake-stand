// eslint-disable-next-line no-unused-vars
import React from "react";
import { Helmet } from "react-helmet-async";
import FoodGallery from "../../components/FoodGallery";
import AboutSection from "../About/AboutSection";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import "./Home.css";
import Items from "./Items";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="relative z-0">
      <Helmet>
        <title>THE CAKE STAND || Home</title>
      </Helmet>
      <Banner />
      <Items />
      <div className="container py-12">
        <AboutSection />
      </div>
      <Category />
      <PopularMenu />
      <Featured />
      <Testimonials />
      <FoodGallery />
    </div>
  );
};

export default Home;
