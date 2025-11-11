import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-72.594px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default MainLayout;
