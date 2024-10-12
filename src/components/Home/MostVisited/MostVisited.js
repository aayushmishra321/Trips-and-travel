import React from "react";
import { useNavigate } from "react-router"; // Import useNavigate hook

function MostVisited() {
  const navigate = useNavigate(); // Initialize navigate

  const handleBookNow = () => {
    navigate("/booking"); // Replace with the correct path to your booking page
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="w-full mb-6 lg:mb-0 text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 pb-2">
              Most visited tourist places
            </h1>
            <div className="h-1 w-60 bg-blue-600 rounded m-auto"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/720x400"
                alt="Kashmir"
              />
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Kashmir
              </h2>
              <p className="leading-relaxed text-base">
                Experience the beauty of Kashmir with its breathtaking landscapes.
              </p>
              <button
                onClick={handleBookNow} // Attach the handler here
                className="inline-flex text-white bg-blue-500 border-0 py-1 px-4 mt-3 focus:outline-none hover:bg-blue-600 rounded"
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/721x401"
                alt="Manali"
              />
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Manali
              </h2>
              <p className="leading-relaxed text-base">
                Explore the stunning valleys of Manali.
              </p>
              <button
                onClick={handleBookNow} // Attach the handler here
                className="inline-flex text-white bg-blue-500 border-0 py-1 px-4 mt-3 focus:outline-none hover:bg-blue-600 rounded"
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/722x402"
                alt="Kerala"
              />
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Kerala
              </h2>
              <p className="leading-relaxed text-base">
                Immerse yourself in the serene backwaters of Kerala.
              </p>
              <button
                onClick={handleBookNow} // Attach the handler here
                className="inline-flex text-white bg-blue-500 border-0 py-1 px-4 mt-3 focus:outline-none hover:bg-blue-600 rounded"
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/723x403"
                alt="Jaisalmer"
              />
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Jaisalmer
              </h2>
              <p className="leading-relaxed text-base">
                Discover the golden city of Jaisalmer and its rich history.
              </p>
              <button
                onClick={handleBookNow} // Attach the handler here
                className="inline-flex text-white bg-blue-500 border-0 py-1 px-4 mt-3 focus:outline-none hover:bg-blue-600 rounded"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <a className="text-blue-500 inline-flex mt-3 items-center ml-4">
            View More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default MostVisited;