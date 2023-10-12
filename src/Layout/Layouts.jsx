import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Header from "../pages/Shared/Header";
// import Navbar from "../pages/Shared/Navbar";

const Layouts = () => {
  // const location = useLocation();
  // const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      <Header />
      {/* {noHeaderFooter || <Navbar />} */}
      <Outlet />
      {/* {noHeaderFooter || <Footer />} */}
      <Footer />
    </div>
  );
};

export default Layouts;
