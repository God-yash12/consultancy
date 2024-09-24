import React from "react";
import CourseImage1 from "../../assets/course-1.jpg";
import CourseImage2 from "../../assets/course-6.jpg";
import CourseImage3 from "../../assets/course-3.jpg";
import { MdOutlineAccessTime } from "react-icons/md";

const Courses = () => {
  return (
    <div>
      <div className="container mt-10">
        <div>
          {/* Heading Section */}
          <div>
            <header className="text-4xl lg:text-6xl text-gray-800 font-extrabold tracking-wide mb-10">
              Find The Right Course <br /> For You
            </header>
          </div>

          {/* Cards Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-24">
            {[ 
              { image: CourseImage1, title: "Elicos", price: "Approx AUD 4,000-1000" },
              { image: CourseImage2, title: "Vocational Education & Training", price: "Approx AUD 2,000 - 22,000" },
              { image: CourseImage3, title: "Higher Education", price: "Approx AUD 8,000 - 60,000" }
            ].map((course, index) => (
              <div
                key={index}
                className="flex flex-col gap-8 bg-blue-100 shadow-lg transition-transform duration-300 ease-in-out group w-full lg:w-1/3 overflow-hidden"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="shadow-sm transform transition-transform duration-300 ease-in-out group-hover:scale-105 w-full"
                />
                <div className="p-4">
                  <header className="text-2xl tracking-wider font-semibold mb-2">
                    {course.title}
                  </header>
                  {/* Horizontal Line */}
                  <div className="relative py-6">

                  <span className="absolute bg-gray-500 w-full h-0.5"></span> 
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <span className="text-orange-700 text-2xl font-bold">
                        {course.price}
                      </span>
                      <p className="flex justify-center items-center gap-3 text-gray-500 text-base font-poppins font-medium mr-5">
                        <MdOutlineAccessTime className="text-2xl font-md text-blue-700" />
                        Upto <br />1 year
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
