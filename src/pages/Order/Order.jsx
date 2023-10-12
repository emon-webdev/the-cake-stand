import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodGallery from "../../components/FoodGallery";
import useMenu from "../../hooks/useMenu";
import InnerBanner from "../Shared/InnerBanner";
import OrderTab from "./OrderTab";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu, loading] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>THE CAKE STAND || Order Food</title>
      </Helmet>
      <InnerBanner title="Order" colorTitle="Food" />
      <div className=" relative z-0">
        <div className="container">
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
        </div>
      </div>
      <FoodGallery />
    </div>
  );
};

export default Order;
