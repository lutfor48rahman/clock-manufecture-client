import AOS from "aos";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";

import AddReviews from "./components/DashBoard/AddReviews";
import Dashboard from "./components/DashBoard/Dashboard";
import MyOrders from "./components/DashBoard/MyOrders";
import MyProfile from "./components/DashBoard/MyProfile";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import MyPortfolio from "./components/MyPortfolio/MyPortfolio";

import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import HomePart from "./components/pages/HomePart";
import Purchase from "./components/Purchase/Purchase";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import SignUp from "./components/SignUp/SignUp";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>

      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<HomePart></HomePart>}></Route>
        <Route path="/home" element={<HomePart></HomePart>}></Route>
        <Route path="/home" element={<HomePart></HomePart>}></Route>
        <Route path="/purchase/:toolId" element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route path="/dashboard/myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="/dashboard/myorders" element={<MyOrders></MyOrders>}></Route>
          <Route path="/dashboard/myreviws" element={<AddReviews></AddReviews>}></Route>


        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/myportfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>

  );
}

export default App;
