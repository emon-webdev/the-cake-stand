// eslint-disable-next-line no-unused-vars
import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import "./Home.css";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>THE CAKE STAND || Home</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </>
  );
};

export default Home;
