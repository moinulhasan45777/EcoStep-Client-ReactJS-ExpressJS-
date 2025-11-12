import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="min-h-[calc(100vh-72.594px)] ">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
