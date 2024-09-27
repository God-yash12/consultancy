import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const handleActiveItem = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="bg-gray-900 fixed top-0 left-0 right-0 w-screen z-50">
      <div className="container">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div>
            <img src={Logo} alt="Logo" className="w-44" />
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden lg:hidden mr-10">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* NavLinks */}
          <div className="hidden md:flex font-poppins space-x-9">
            <Link 
              to="home" 
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => handleActiveItem("Home")}
              className={`text-gray-200 hover:text-orange-500 cursor-pointer ${activeItem === "Home" ? "text-orange-500" : ""}`}
            >
              Home
            </Link>
            <Link 
              to="about" 
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => handleActiveItem("About Us")}
              className={`hover:text-orange-500 cursor-pointer ${activeItem === "About Us" ? "text-orange-500" : "text-gray-300"}`}
            >
              About Us
            </Link>
            <Link 
              to="courses" 
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => handleActiveItem("Courses")}
              className={`hover:text-orange-500 cursor-pointer ${activeItem === "Courses" ? "text-orange-500" : "text-gray-200"}`}
            >
              Courses
            </Link>
            <Link 
              to="team" 
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => handleActiveItem("Team")}
              className={`hover:text-orange-500 cursor-pointer ${activeItem === "Team" ? "text-orange-500" : "text-gray-200"}`}
            >
              Team
            </Link>
            <Link 
              to="contact" 
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => handleActiveItem("Contact Us")}
              className={`hover:text-orange-500 cursor-pointer ${activeItem === "Contact Us" ? "text-orange-500" : "text-gray-200"}`}
            >
              Contact Us
            </Link>
          </div>

          {/* Join Us Button */}
          <div className="hidden lg:block">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="w-32 h-14 bg-orange-600 rounded-xl flex items-center justify-center text-gray-300 font-semibold text-lg uppercase hover:bg-orange-700 transition duration-300"
            >
              Join Us
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden w-full overflow-x-hidden">
            <div className="flex flex-col items-center space-y-3">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-gray-200 text-xl hover:text-orange-500 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-gray-200 hover:text-white text-xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="courses"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-gray-200 hover:text-white text-xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="team"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-gray-200 hover:text-white text-xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-gray-200 hover:text-white text-xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
