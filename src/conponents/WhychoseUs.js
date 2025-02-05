import React, { useState } from "react";
import { motion } from "framer-motion";
import { img } from "../assets copy/image";

// Fade-Up Animation
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WhyChooseUs = () => {
  const [activeSection, setActiveSection] = useState("mission");

  const sections = {
    mission: {
      image: img.misson,
      title: "Our Mission",
      description:
        "At Hayah Foods, our mission is to deliver the finest quality rice that embodies purity, freshness, and exceptional taste. We are dedicated to sustainable practices, innovation, and excellence in every grain, ensuring the highest standards for our customers worldwide.",
    },
    vision: {
      image: img.img1,
      title: "Our Vision",
      description:
        "To redefine the rice industry with a focus on sustainability, innovation, and quality. We aim to be the most trusted partner for rice products globally, enriching lives through every grain we produce.",
    },
    manufacturing: {
      image: img.vision,
      title: "Our Manufacturing",
      description:
        "Leveraging state-of-the-art technology and decades of expertise, our manufacturing processes are designed to deliver the highest quality rice products to our customers around the globe.",
    },
  };

  return (
    <motion.div
      className="py-8 px-3 sm:px-6 lg:px-12 bg-[#fbfdf7e8]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-6 text-[#4B4E6D] flex items-center justify-center gap-3">
        <img
          src={img.leaveimage}
          alt="Why Choose Us Icon"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
        Why Choose Us
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 text-sm sm:text-base lg:text-lg">
        At Hayah Foods, we proudly stand as the most trusted rice exporter,
        blending tradition with innovation to deliver the finest rice products.
      </p>

      {/* Card Row */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-8"
        variants={fadeInUp}
      >
        {Object.keys(sections).map((key) => (
          <motion.div
            key={key}
            onClick={() => setActiveSection(key)}
            className={`cursor-pointer p-4 rounded-md w-40 sm:w-48 lg:w-56 aspect-square transition-all duration-200 ${
              activeSection === key ? "bg-white" : "bg-[#fbefe05a]"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={sections[key].image}
              alt={sections[key].title}
              className="w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 mx-auto mb-3 lg:mb-4"
            />
            <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-800 text-center">
              {sections[key].title}
            </h4>
          </motion.div>
        ))}
      </motion.div>

      {/* Active Section Content */}
      <motion.div
        className="text-center max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-md shadow-md"
        variants={fadeInUp}
      >
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#4B4E6D] mb-3 lg:mb-4">
          {sections[activeSection].title}
        </h3>
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
          {sections[activeSection].description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default WhyChooseUs;
