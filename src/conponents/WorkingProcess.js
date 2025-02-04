import React from 'react';
import { img } from '../assets copy/image';

const WorkingProcess = () => {
  const steps = [
    {
      step: 'Step 1',
      description: 'Identify customer requirements and gather key inputs.',
      img: img.icon, // Replace with the correct image path
    },
    {
      step: 'Step 2',
      description: 'Plan and strategize the workflow for optimal results.',
      img: img.icon2, // Replace with the correct image path
    },
    {
      step: 'Step 3',
      description: 'Implement the strategy with precise execution.',
      img: img.icon3, // Replace with the correct image path
    },
    {
      step: 'Step 4',
      description: 'Evaluate the output and ensure client satisfaction.',
      img: img.icon4, // Replace with the correct image path
    },
  ];

  return (
    <div className="p-6 sm:p-8 bg-gradient-to-b from-[#f4f4f8] to-white text-gray-800">
    {/* Heading Section */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-[#4B4E6D] mb-6">
      Our Working Process
    </h2>
    <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center mb-10">
      We follow a streamlined and efficient process to deliver top-notch products and services to our
      clients. Each step is meticulously crafted to ensure the best results.
    </p>
  
    {/* Steps Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {steps.map((item, index) => (
        <div
          key={index}
          className="relative bg-white border border-gray-200 rounded-lg shadow-lg p-4 sm:p-6 text-center"
        >
          {/* Step Label */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#7f4d1d] text-white text-xs sm:text-sm font-semibold rounded-md px-3 sm:px-4 py-1">
            {item.step}
          </div>
          {/* Circle with Image */}
          <div className="bg-[#e9d3be] w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mt-10 flex items-center justify-center overflow-hidden">
            <img
              src={item.img}
              alt={item.step}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Description */}
          <p className="text-gray-600 text-xs sm:text-sm mt-4 sm:mt-6">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default WorkingProcess;
