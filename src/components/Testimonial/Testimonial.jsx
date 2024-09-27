import React from 'react';
import JyotiImage from '../../assets/jyoti.jpg'; 

const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-28 px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between space-y-6 lg:space-y-0 lg:space-x-16">
        {/* Left Side Text Section */}
        <div className="text-left lg:w-1/2 mt-8">
          <h2 className="text-blue-600 text-xl font-bold">TESTIMONIAL</h2>
          <h1 className="text-grey-900 text-5xl font-extrabold mt-4 mb-6 leading-tight">
            What Our Student Says About Us
          </h1>
          <p className="text-gray-600 text-lg max-w-lg">
            We work directly with the students, addressing their issues and concerns. 
            We're all listening to what students have to say about us.
          </p>
        </div>

        {/* Right Side Testimonial Section */}
        <div className="bg-white p-6 shadow-lg text-left lg:w-1/2">
          <p className="text-gray-700 text-lg mb-4">
            "I had a lot of questions about Australia’s admission and visa 
            procedure because I didn’t know much about it. Felix Education Consultancy assisted me 
            throughout the process and answered all of my questions. I would like to express 
            my gratitude to all the experts at Felix Eastern Educational Consultancy."
            <span className="text-4xl text-pink-200"> ”</span> {/* Decorative Quotation */}
          </p>

          {/* Image Card Section */}
          <div className="flex justify-left items-start space-x-4 mb-4">
            {/* Image Card with Thick Orange Border */}
            <div className="bg-white p-2 shadow-md rounded-lg border-2 border-orange-500">
              <img
                src={JyotiImage} 
                alt="Jyoti Gurung"
                className="w-24 h-24 rounded-lg"
              />
            </div>

            {/* Name and Title */}
            <div className="flex flex-col justify-center mt-5">
              <h3 className="font-bold text-grey-900 text-xl mb-1">Jyoti Gurung</h3> 
              <p className="text-orange-500 font-semibold">Student</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
