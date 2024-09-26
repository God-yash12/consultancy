import React, { useEffect, useState } from "react";
import EventImage from "../../assets/event-img.jpg";
import { IoTriangle } from "react-icons/io5";
import { Link } from "react-router-dom";

const Event = () => {
  const [events, setEvent] = useState([]);

  useEffect(() => {
    fetch("/Event.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setEvent(data))
      .catch((error) =>
        console.error("Error while fetching event data", error)
      );
  }, []);

  return (
    <div className="bg-gray-300">
      <div className="container">
        {/* Wrapper Container */}
        <div className="flex flex-col lg:flex-row justify-between gap-9">
          {/* Image Wrapper Container */}
          <div className="flex items-center justify-end">
            <Link to={""}>
            <div className="flex flex-row justify-between items-center absolute w-54  bg-red-700 px-10 py-5 rounded-lg mt-44 ml-20  lg:left-80 cursor-pointer shadow-lg text-center animate-shake z-20">
              <div className="flex justify-between items-center gap-4">
                <span className="flex justify-center items-center w-16 h-16 rounded-full bg-white animate-pulse">
                  <IoTriangle className="text-3xl text-red-800 text-center rotate-90 ml-1" />
                </span>
                <p className="text-white text-2xl text-center p-3 font-poppins font-bold">
                  Watch Us !
                </p>
              </div>
            </div>
            </Link>
            <img
              src={EventImage}
              alt="Event Image"
              className="rounded-lg w-full h-screen lg:mt-24 lg:mb-32"
            />
          </div>

          {/* Event Details */}
          <div className="flex flex-col w-full lg:w-1/2 lg:mt-28">
            <div className="flex flex-col leading-10 tracking-wider mb-9">
              <header className="uppercase text-blue-600 text-3xl text-center lg:text-left space-x-6 font-bold tracking-wide mt-10">
                Our Event
              </header>
              <h1 className="text-gray-700 text-center lg:text-left space-x-6 text-4xl lg:text-6xl font-poppins font-extrabold mt-7">
                Join Our Upcoming <br /> Events
              </h1>
            </div>

            {/* Event Boxes */}
            <div className="space-y-7 mb-24">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="grid lg:grid-cols-[auto_1fr] grid-cols-1 shadow-xl bg-gray-200 p-6 rounded-lg group hover:border-s-4 hover:border-e-4 border-transparent hover:border-red-600 transition-all"
                >
                  {/* Date Section */}
                  <div className="mr-8 ml-5 text-blue-700 flex justify-start items-center">
                    <div className="text-center">
                      {/* Extracting the day, month, and year */}
                      <span className="block text-6xl font-bold">
                        {event.date.split(" ")[0]}
                      </span>
                      <span className="block text-md">
                        {event.date.split(" ").slice(1).join(" ")}
                      </span>
                    </div>
                  </div>

                  {/* Vertical Line Between Date and Right Section */}
                  <div className="relative">
                    <div className="absolute left-0 h-full border-l-2 border-gray-400"></div>

                    {/* Right Side: Time, Location, and Title */}
                    <div className="pl-4">
                      {/* Time and Location */}
                      <div className="flex items-center gap-4">
                        <div className="text-lg font-poppins text-gray-700">
                          <span>{event.time}</span>
                        </div>

                        {/* Vertical Line Between Time and Location */}
                        <div className="h-5 border-l-2 border-gray-500"></div>

                        <div className="text-lg text-gray-700">
                          <span className="font-poppins">{event.location}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <div className="flex mt-4">
                        <p className="text-xl lg:text-2xl font-poppins font-semibold tracking-wide text-gray-900 group-hover:text-orange-700 transition-all">
                          {event.title}
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
    </div>
  );
};

export default Event;
