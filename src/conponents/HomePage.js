import React, { useRef } from "react";
import { motion } from "framer-motion";
import { img } from "../assets copy/image";
import Card from "./Card";
import Precence from "./Precence";
import Contact from "./Contact";
import WorkingProcess from "./WorkingProcess";
import WhyChooseUs from "./WhychoseUs";
import GrainLength from "./GainLength";
import CombinedComponent from "./DataComponent";

import { useNavigate } from "react-router-dom"; // Import useNavigate

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeInOut" } },
};

const HomePage = () => {
  // Create a reference for the Contact component
  const contactRef = useRef(null);

  // Function to scroll to the Contact section
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navigate = useNavigate(); // Initialize navigate
  return (
    <div>
      {/* Hero Section */}
      <motion.header
        className="mt-28 relative w-full bg-cover bg-center py-16"
        style={{ backgroundImage: `url(${img.riceImage})` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative space-y-6 md:space-y-0">
          {/* Left Section */}
          <motion.div
            className="text-center md:text-left md:w-1/2 bg-white bg-opacity-90 p-6 sm:p-8 rounded-lg shadow-lg"
            variants={fadeInLeft}
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 leading-snug">
              India’s Most Trusted Rice Manufacturer Now Exporting To The World Directly!
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 sm:mb-6">
              Be A Part Of The Heritage Shaped By More Than A Decade Of Experience In Setting Up Hundreds Of Rice Mills Across The Country.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {/* Button to scroll to Contact Section */}
              <motion.button
                className="bg-yellow-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:bg-yellow-900"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                onClick={scrollToContact} // Calls the function to scroll
              >
                Get In Touch
              </motion.button>
           
              <motion.div>
      <motion.button
        className="bg-transparent border border-yellow-800 text-yellow-800 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:bg-yellow-800 hover:text-white"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
        onClick={() => navigate("/product")} // Navigate to SeeMoreProduct page
      >
        See Products
      </motion.button>
    </motion.div>

            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Other Sections */}
      <CombinedComponent />
      <WhyChooseUs />
      <Card />
      <GrainLength />
      <Precence />
      <WorkingProcess />

      {/* Contact Section with ref */}
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
