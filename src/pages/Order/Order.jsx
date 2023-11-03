import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodGallery from "../../components/FoodGallery";
import Loading from "../../components/Loading";
import { useGetProductsQuery } from "../../redux/api/apiSlice";
import InnerBanner from "../Shared/InnerBanner";
import OrderTab from "./OrderTab";

const Order = () => {
  const { data: products, isLoading } = useGetProductsQuery(undefined)
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const desserts = products?.filter((product) => product?.category === "dessert");
  const soup = products?.filter((product) => product?.category === "soup");
  const salad = products?.filter((product) => product?.category === "salad");
  const pizza = products?.filter((product) => product?.category === "pizza");
  const drinks = products?.filter((product) => product?.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>THE CAKE STAND || Order Food</title>
      </Helmet>
      <InnerBanner title="Order" colorTitle="Food" />
      <div className="">
        <div className="container">
          {isLoading ?
            <Loading />
            :
            <Tabs
              className="order-food  md:py-16 py-12"
              defaultIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList
                className="text-center"
              >
                <Tab>Burger</Tab>
                <Tab>Pizza</Tab>
                <Tab>Meat Box</Tab>
                <Tab>Cake</Tab>
                <Tab>French Fries</Tab>
              </TabList>
              <TabPanel>
                <OrderTab items={salad} />
              </TabPanel>
              <TabPanel>
                <OrderTab items={pizza} />
              </TabPanel>
              <TabPanel>
                <OrderTab items={soup} />
              </TabPanel>
              <TabPanel>
                <OrderTab items={desserts} />
              </TabPanel>
              <TabPanel>
                <OrderTab items={drinks} />
              </TabPanel>
            </Tabs>
          }
        </div>
      </div>
      <FoodGallery />
      <ScrollToTop smooth />
    </div>
  );
};

export default Order;
