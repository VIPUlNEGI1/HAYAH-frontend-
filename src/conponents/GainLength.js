import React from "react";
import { motion } from "framer-motion";
import { img } from "../assets copy/image";

// Fade-Up Animation on Scroll
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const GrainLength = () => {
  return (
    <motion.div
      className="py-12 px-6 sm:px-12 lg:px-24 bg-[#faf3ee]"
      initial="hidden"
      whileInView="visible"  // Triggers animation when in view
      viewport={{ once: true, amount: 0.2 }} // Runs only once when 20% of component is in view
      variants={fadeInUp}
    >
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
        {/* Basmati Rice */}
        <motion.div 
          className="p-4 bg-white shadow-lg rounded-lg w-full" 
          variants={fadeInUp}
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }}
        >
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
        </motion.div>

        {/* Grain Image and Info */}
        <motion.div
          className="flex flex-col items-center md:items-start md:border-x-2 md:border-gray-300 px-6"
          variants={fadeInUp}
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="text-sm sm:text-base font-medium text-gray-600 text-center md:text-left">
            AGL <br /> 8.35 mm
          </span>
          <img
            src={img.riceseed} // Replace with correct path to the grain image
            alt="1121 Basmati Rice"
            className="w-24 sm:w-32 lg:w-40 mt-4"
          />
          <h3 className="text-lg sm:text-xl font-semibold mt-4 text-center md:text-left">
            1121 Basmati Rice
          </h3>
        </motion.div>

        {/* Non Basmati Rice */}
        <motion.div 
          className="p-4 bg-white shadow-lg rounded-lg w-full" 
          variants={fadeInUp}
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }}
        >
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GrainLength;
