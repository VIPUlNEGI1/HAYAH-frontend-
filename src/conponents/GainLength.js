import React from "react";
import { img } from "../assets copy/image";

const GrainLength = () => {
  return (
    <div className="py-12 px-6 sm:px-12 lg:px-24 bg-[#faf3ee]">
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
        {/* Basmati Rice */}
        <div className="p-4 bg-white shadow-lg rounded-lg w-full">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center md:text-left">
            Basmati Rice
          </h3>
          <ul className="list-disc pl-4 space-y-2 text-center md:text-left">
            <li className="font-medium text-[#4B4E6D] hover:text-yellow-600">1121 Basmati Rice</li>
            <li className="hover:text-yellow-600">1509 Basmati Rice</li>
            <li className="hover:text-yellow-600">1401 Basmati Rice</li>
            <li className="hover:text-yellow-600">1718 Basmati Rice</li>
            <li className="hover:text-yellow-600">Pusa Basmati Rice</li>
          </ul>
        </div>

        {/* Grain Image and Info */}
        <div className="flex flex-col items-center md:items-start md:border-x-2 md:border-gray-300 px-6">
          <span className="text-sm sm:text-base font-medium text-gray-600 text-center md:text-left">
            AGL <br /> 8.35 mm
          </span>
          <img
            src={img.riceseed} // Replace with the correct path to the grain image
            alt="1121 Basmati Rice"
            className="w-24 sm:w-32 lg:w-40 mt-4"
          />
          <h3 className="text-lg sm:text-xl font-semibold mt-4 text-center md:text-left">
            1121 Basmati Rice
          </h3>
        </div>

        {/* Non Basmati Rice */}
        <div className="p-4 bg-white shadow-lg rounded-lg w-full">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center md:text-left">
            Non Basmati Rice
          </h3>
          <ul className="list-disc pl-4 space-y-2 text-center md:text-left">
            <li className="hover:text-yellow-600">PR 11 Non Basmati Rice</li>
            <li className="hover:text-yellow-600">PR 14 Non Basmati Rice</li>
            <li className="hover:text-yellow-600">Parmal Non Basmati Rice</li>
            <li className="hover:text-yellow-600">Sugandha Non Basmati Rice</li>
            <li className="hover:text-yellow-600">Sharbati Non Basmati Rice</li>
            <li className="hover:text-yellow-600">Taj Non Basmati Rice</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GrainLength;
