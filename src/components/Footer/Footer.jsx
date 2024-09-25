import React from 'react';
import Logo from "../../assets/logo.png";  // Ensure the correct path to the logo

const Footer = () => {

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-5 py-10">
        
        {/* Logo and Company Information */}
        <div>
          <img
            src={Logo}
            alt="Logo"
            className="w-40 mb-4"
          />
          <p className="text-sm mb-4">
            We are a well-known, government-approved test preparation center. We're here to assist you in selecting the appropriate destination and university for your objectives and aspirations.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="font-bold text-lg mb-4 text-gray-300">Our Link</h2>
          <ul>
            <li className="mb-2">
              <a href="#home" className="text-gray-300 hover:text-orange-500 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block relative">
                Home
              </a>          
            </li>
            <li className="mb-2">
              <a href="#about" className="text-gray-300 hover:text-orange-500 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block relative">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#courses" className="text-gray-300 hover:text-orange-500 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block relative">
                Courses
              </a>
            </li>
            <li className="mb-2">
              <a href="#blog" className="text-gray-300 hover:text-orange-500 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block relative">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-300 hover:text-orange-500 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block relative">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h2 className="font-bold text-lg mb-4 text-gray-300">Other Link</h2>
          <ul>
            <li className="mb-2">
              <a href="#instructor" className="text-gray-300 hover:text-orange-500 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block relative">
                Instructor
              </a>
            </li>
            <li className="mb-2">
              <a href="#faq" className="text-gray-300 hover:text-orange-500 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block relative">
                FAQ
              </a>
            </li>
            <li>
              <a href="#event" className="text-gray-300 hover:text-orange-500 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block relative">
                Event
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="font-bold text-lg mb-4 text-gray-300">Contact Us</h2>
          <p className="text-sm mb-2 hover:text-orange-500 hover:translate-x-2 transition-all duration-300 ease-in-out">
            1st Floor HBL Building
          </p>
          <p className="text-sm mb-2 hover:text-orange-500 hover:translate-x-2 transition-all duration-300 ease-in-out">
            Madan Bhandari Path
          </p>
          <p className="text-sm mb-2 hover:text-orange-500 hover:translate-x-2 transition-all duration-300 ease-in-out">
            New Baneshwor, Kathmandu-31
          </p>
          <p className="text-sm mb-2 hover:text-orange-500 hover:translate-x-2 transition-all duration-300 ease-in-out">
            26 Kate Street, Kedron
          </p>
          <p className="text-sm mb-2 hover:text-orange-500 hover:translate-x-2 transition-all duration-300 ease-in-out">
            QLD, 4031 Australia
          </p>
          <p className="text-sm mb-2 hover:text-orange-500 hover:translate-x-2 transition-all duration-300 ease-in-out">
            +977 1 4437975, 9843161346
          </p>
          <p className="text-sm hover:text-orange-500 hover:translate-x-2 transition-all duration-300 ease-in-out">
            kathmandu@felixeastern.info
          </p>
        </div>
      </div>

      {/* Copyright Section with Extra Dark Background */}
      <div className="bg-gray-800 text-center text-sm text-gray-400 py-4 mt-10">
        <p>
          &copy; 2022{" "}
          <span
            className="text-orange-500 cursor-pointer hover:text-blue-500 transition duration-300"
            onClick={scrollToTop}
          >
            Felix Education
          </span>
          . Developed by Global Innovatives. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
