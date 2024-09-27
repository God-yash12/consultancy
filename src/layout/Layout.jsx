import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import './Layout.css'; 
import Home from "../components/Home/Home";

const Layout = () => {
  return (
    <div className="layout-container">
      <header>
        <Navbar />
      </header>
      <main className="main-content">
        <Outlet />
        <Home /> 
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
