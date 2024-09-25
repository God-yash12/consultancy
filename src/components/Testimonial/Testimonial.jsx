import React from 'react';
import JyotiImage from '../../assets/jyoti.jpg'; // Assuming it's in src/assets

const Testimonial = () => {
  return (
    <div className="bg-gray-100 p-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-6 lg:space-y-0 lg:space-x-16">
        {/* Left Side Text Section */}
        <div className="text-left lg:w-1/2">
          <h2 className="text-blue-700 text-lg font-bold">TESTIMONIAL</h2>
          <h1 className="text-5xl font-extrabold mt-4 mb-6">
            What Our Student Says About Us
          </h1>
          <p className="text-gray-600 text-lg max-w-lg">
            We work directly with the students, addressing their issues and concerns. 
            We're all listening to what students have to say about us.
          </p>
        </div>

        {/* Right Side Testimonial Section */}
        <div className="bg-white p-6 shadow-lg text-left lg:w-1/2 flex lg:flex-row items-start space-x-6">
          <img
            src={JyotiImage} 
            alt="Jyoti Gurung"
            className="w-24 h-24 border-2 border-orange-400"
          />
          <div>
            <p className="text-gray-700 text-lg mb-4">
              "I had a lot of questions about Australia’s admission and visa 
              procedure because I didn’t know much about it. Felix Education Consultancy assisted me 
              throughout the process and answered all of my questions. I would like to express 
              my gratitude to all the experts at Felix Eastern Educational Consultancy."
            </p>
            <h3 className="font-bold text-xl">Jyoti Gurung</h3>
            <p className="text-orange-500 font-semibold">Student</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
