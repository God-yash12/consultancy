import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";

const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Home /> 
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
