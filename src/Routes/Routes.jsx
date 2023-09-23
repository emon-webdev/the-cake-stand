import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Layouts from "../Layout/Layouts";
import AllUsers from "../pages/Dashboard/Admin/AllUsers";
import MyCart from "../pages/Dashboard/Client/MyCart";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Secret from "../pages/Shared/Secret";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: '/secret',
        element: <PrivateRoute><Secret /></PrivateRoute>,
      }
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard/mycart',
        element: <MyCart />
      },
      {
        path: '/dashboard/allusers',
        element: <AllUsers />
      },
    ]
  }
]);
