import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const handleActiveItem = (item) => {
    setActiveItem(item)
  }

  return (
    <nav className="bg-gray-900">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-20 px-4">
          {/* Logo Section */}
          <div>
            <img
              src={Logo}
              alt="Logo"
              className="sm:w-32 md:w-32 lg:w-42 xl:w-40"
            />
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* NavLinks */}
          <div className="hidden md:flex font-poppins space-x-9">
            <Link to="/" 
            onClick={() => handleActiveItem("Home")}
            className={`text-gray-200  hover:text-orange-500 ${activeItem === "Home" ? "text-orange-500" : ""}`}>
              Home
            </Link>
            <Link to="/about" 
            onClick={()=> handleActiveItem("About")}
            className={`hover:text-orange-500 ${activeItem === "About Uss" ? "text-orange-500" : "text-gray-300"}`}>
              About Us
            </Link>
            <Link to="/courses" 
            onClick={()=> handleActiveItem("Coureses")}
            className={` hover:text-orange-500 ${activeItem === "Courses" ? "text-orange-500" : "text-gray-200"}`}>
              Courses
            </Link>
            <Link to="/team" 
            onClick={()=> handleActiveItem("Team")}
            className={` hover:text-orange-500 ${activeItem === "Team" ? "text-orange-500" : "text-gray-200"}`}>
              Team
            </Link>
            <Link to="/contactus" 
            onClick={()=> handleActiveItem("Contact Us")}
            className={` hover:text-orange-500 ${activeItem === "Contact Us" ? "text-orange-500" : "text-gray-200"}`}>
              Contact Us
            </Link>
          </div>

          {/* Join Us Button */}
          <div className="hidden md:block">
            <Link
              to="/contactus"
              className="w-32 h-14 bg-orange-600 rounded-xl flex items-center justify-center text-gray-300 font-semibold text-lg uppercase hover:bg-orange-700 transition duration-300"
            >
              Join Us
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center space-y-4 pt-4">
              <Link
                to="/"
                className="text-gray-200 text-xl hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-200 hover:text-white text-xl"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/courses"
                className="text-gray-200 hover:text-white text-xl"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/team"
                className="text-gray-200 hover:text-white text-xl"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link
                to="/contactus"
                className="text-gray-200 hover:text-white text-xl"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                to="/contactus"
                className="w-32 h-14 bg-orange-600 rounded-xl flex items-center justify-center text-gray-300 font-semibold text-lg uppercase hover:bg-orange-700 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
