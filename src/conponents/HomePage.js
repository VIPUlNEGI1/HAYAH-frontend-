import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Next.js optimized image loading
import CardSection from "./Card";
import Precence from "./Precence";
import Contact from "./Connect";
import WorkingProcess from "./WorkingProcess";

// Framer Motion Variants (Slower Animation Speed)
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeInOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeInOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { transition: { staggerChildren: 0.3 } },
};

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <motion.header
        className="mt-16 relative w-full bg-cover bg-center py-16"
        style={{ backgroundImage: `url('/images/riceImage.jpg')` }} // Use images from public folder
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
              <motion.button
                className="bg-yellow-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:bg-yellow-500 transition-all hover:text-black"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                Get In Touch
              </motion.button>
              <motion.button
                className="bg-transparent border border-yellow-700 text-yellow-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:bg-yellow-800 hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                See Products
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Stats Section */}
      <motion.section
        className="mt-16 bg-gray-100 py-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 text-center"
            variants={staggerContainer}
          >
            {[
              { value: "30+", label: "Rice Products" },
              { value: "14+ Yrs", label: "Rice Mill Manufacturing" },
              { value: "5+ Yrs", label: "Rice Milling" },
              { value: "160+", label: "Production Capacity per Day" },
              { value: "20+", label: "Countries" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className={`p-4 sm:p-5 rounded-md shadow-md flex flex-col justify-center items-center ${
                  index % 2 === 0 ? "bg-white text-gray-800 border border-gray-800" : "bg-yellow-800 text-white"
                }`}
                variants={fadeInUp}
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{stat.value}</h2>
                <p className="text-sm sm:text-md mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* WHO WE ARE Section */}
      <motion.div
        className="mt-36 text-center mb-11"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-3xl sm:text-4xl mt-6 lg:text-5xl font-extrabold text-gray-900 mb-8 tracking-wide">
          WHO WE ARE
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-medium mb-11">
          Renowned Manufacturer, Supplier And Exporter Of Basmati And Non Basmati Rice
        </p>

        {/* Certificates Image */}
        <motion.div variants={fadeInUp}>
          <Image
            src="/images/certificates.jpg"
            alt="Certificates"
            width={500}
            height={300}
            className="mx-auto rounded-lg shadow-lg"
          />
        </motion.div>
        

        <p className="text-base lg:text-xl text-gray-700 leading-relaxed mb-8 font-light">
          At AL HAYAH EXPORTS, we embarked on a mission with a clear and compelling vision...
        </p>

        {/* Collaboration Image */}
        <motion.div variants={fadeInRight}>
          <Image
            src="/images/collaboration.jpg"
            alt="Collaboration"
            width={500}
            height={300}
            className="mt-16 mx-auto rounded-lg"
            style={{ filter: "brightness(0.95) contrast(1.1)" }}
          />
        </motion.div>
      </motion.div>

      {/* Animated Sections */}
      <CardSection />
      <Precence />
      <WorkingProcess />
      <Contact />
    </div>
  );
};

export default HomePage;
