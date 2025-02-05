import React from "react";
import { motion } from "framer-motion";
import { img } from "../assets copy/image";

const WorkingProcess = () => {
  const steps = [
    {
      step: "Step 1",
      description: "Identify customer requirements and gather key inputs.",
      img: img.icon, // Replace with the correct image path
    },
    {
      step: "Step 2",
      description: "Plan and strategize the workflow for optimal results.",
      img: img.icon2, // Replace with the correct image path
    },
    {
      step: "Step 3",
      description: "Implement the strategy with precise execution.",
      img: img.icon3, // Replace with the correct image path
    },
    {
      step: "Step 4",
      description: "Evaluate the output and ensure client satisfaction.",
      img: img.icon4, // Replace with the correct image path
    },
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="p-6 sm:p-8 bg-gradient-to-b from-[#f4f4f8] to-white text-gray-800">
      {/* Heading Section */}
      <motion.div
        className="flex items-center justify-center gap-2 mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <img
          src={img.leaveimage} // Replace with the correct path to the icon
          alt="Working Process Icon"
          className="w-6 h-6 sm:w-8 sm:h-8"
        />
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-[#4B4E6D]">
          Our Working Process
        </h2>
      </motion.div>
      <motion.p
        className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
      >
        We follow a streamlined and efficient process to deliver top-notch
        products and services to our clients. Each step is meticulously crafted
        to ensure the best results.
      </motion.p>

      {/* Steps Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {steps.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-white border border-gray-200 rounded-lg shadow-lg p-4 sm:p-6 text-center"
            variants={itemVariants}
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
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WorkingProcess;
