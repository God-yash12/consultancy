import React from "react";
import Logo from "../../assets/logo.png";

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white m-0">
      {/* Banner Section */}
      <div className="bg-blue-600 flex flex-col sm:flex-row justify-between items-start text-white py-12 px-10 w-[90%] mx-auto -mt-52 shadow-lg rounded-lg">
        <h1 className="text-7xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-0">
          Start Your Best Abroad Journey With Us
        </h1>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 w-56 mt-8 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
          CONTACT US
        </button>
      </div>

      {/* Footer Main Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-5 py-20">
        {/* Logo and Company Info */}
        <div>
          <img src={Logo} alt="Logo" className="w-40 mb-4" />
          <p className="text-sm mb-4">
            We are a well-known, government-approved test preparation center.
            We're here to assist you in selecting the appropriate destination
            and university for your objectives and aspirations.
          </p>
          <div className="flex space-x-5">
            <a
              href="https://www.facebook.com/YourPage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-500 transition duration-300"
            >
              <i className="fab fa-facebook-f text-3xl"></i>
            </a>
            <a
              href="https://www.instagram.com/YourPage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-500 transition duration-300"
            >
              <i className="fab fa-instagram text-3xl"></i>
            </a>
            <a
              href="https://www.tiktok.com/@YourPage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-500 transition duration-300"
            >
              <i className="fab fa-tiktok text-3xl"></i>
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="ml-20">
          <h2 className="font-bold text-lg mb-4 text-gray-300">Our Links</h2>
          <ul>
            <li className="mb-2">
              <a
                href="#home"
                className="text-gray-300 hover:text-orange-500 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block"
              >
                Home
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#about"
                className="text-gray-300 hover:text-orange-500 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block"
              >
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#courses"
                className="text-gray-300 hover:text-orange-500 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block"
              >
                Courses
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#blog"
                className="text-gray-300 hover:text-orange-500 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-300 hover:text-orange-500 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Other Links Section */}
        <div>
          <h2 className="font-bold text-lg mb-4 text-gray-300">Other Links</h2>
          <ul>
            <li className="mb-2">
              <a
                href="#instructor"
                className="text-gray-300 hover:text-orange-500 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block"
              >
                Instructor
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#faq"
                className="text-gray-300 hover:text-orange-500 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#event"
                className="text-gray-300 hover:text-orange-500 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block"
              >
                Event
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
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
            26 Kate Street, Kedron, QLD, 4031 Australia
          </p>
          <p className="text-sm mb-2 hover:text-orange-500 hover:translate-x-2 transition-all duration-300 ease-in-out">
            +977 1 4437975, 9843161346
          </p>
          <p className="text-sm hover:text-orange-500 hover:translate-x-2 transition-all duration-300 ease-in-out">
            kathmandu@felixeastern.info
          </p>
        </div>
      </div>

      {/* Copyright Section */}
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
