import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Layouts from "../Layout/Layouts";
import About from "../pages/About/About";
import Blog from "../pages/Blogs/Blog";
import ContactUs from "../pages/ContactUs/ContactUs";
import AddItem from "../pages/Dashboard/Admin/AddItem";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import AllUsers from "../pages/Dashboard/Admin/AllUsers";
import ManageBooking from "../pages/Dashboard/Admin/ManageBooking";
import ManageItems from "../pages/Dashboard/Admin/ManageItems";
import AddReview from "../pages/Dashboard/Client/AddReview";
import MyBooking from "../pages/Dashboard/Client/MyBooking";
import MyCart from "../pages/Dashboard/Client/MyCart";
import PaymentHistory from "../pages/Dashboard/Client/PaymentHistory";
import Reservation from "../pages/Dashboard/Client/Reservation";
import UserHome from "../pages/Dashboard/Client/UserHome";
import Payment from "../pages/Dashboard/Payment/Payment";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import SingleFood from "../pages/Order/SingleFood";
import ErrorPage from "../pages/Shared/ErrorPage";
import Secret from "../pages/Shared/Secret";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/products/:id",
        element: <SingleFood />,
        // loader: ({ params }) =>
        //   fetch(`${import.meta.env.VITE_APP_API_URL}/menu/${params.id}`),
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
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
    path: "/",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    // errorElement: <ErrorPage />,
    children: [

      {
        path: '*',
        element: <ErrorPage />,
      },
      {
        path: '/userhome',
        element: <UserHome />
      },
      {
        path: '/mycart',
        element: <MyCart />
      },
      {
        path: '/paymenthistory',
        element: <PaymentHistory />
      },
      {
        path: '/reservation',
        element: <Reservation />
      },
      {
        path: '/addreview',
        element: <AddReview />
      },
      {
        path: '/mybooking',
        element: <MyBooking />
      },
      {
        path: '/payment',
        element: <Payment />
      },
      // Admin routes

      {
        path: '/adminhome',
        element: <AdminRoute><AdminHome /></AdminRoute>
      },
      {
        path: '/users',
        element: <AdminRoute><AllUsers /></AdminRoute>
      },
      {
        path: '/additem',
        element: <AdminRoute><AddItem /></AdminRoute>
      },
      {
        path: '/manageitems',
        element: <AdminRoute><ManageItems /></AdminRoute>
      },
      {
        path: '/managebooking',
        element: <AdminRoute><ManageBooking /></AdminRoute>
      },
    ]
  }
]);
