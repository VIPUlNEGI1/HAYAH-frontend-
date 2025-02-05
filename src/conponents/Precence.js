import React from 'react';
import { motion } from 'framer-motion';
import { img } from '../assets copy/image';
import { Link } from 'react-router-dom';

// Framer Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { transition: { staggerChildren: 0.2 } },
};

const CardSection = () => {
  return (
    <div className="p-8 text-gray-800 bg-gradient-to-b from-[#f9f9f9] to-white">
      
      {/* Production Process Section */}
      <motion.section
        className="mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div className="flex items-center justify-center gap-2 mb-6" variants={fadeInUp}>
          <img
            src={img.leaveimage} // Ensure correct path
            alt="Production Process Icon"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#4B4E6D] text-center">
            Production Process
          </h2>
        </motion.div>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-center text-gray-600 mb-8"
          variants={fadeInUp}
        >
          From cultivation to distribution, our rice undergoes a meticulous process to
          ensure unmatched quality and taste.
        </motion.p>

        {/* Process Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6" variants={staggerContainer}>
          {[
            { title: "Cultivation", description: "Farmers cultivate rice in fertile fields, primarily in waterlogged areas, where the crop thrives under specific conditions." },
            { title: "Harvesting", description: "Once the rice plants mature, they are harvested using traditional methods or modern machinery. The harvested rice is called paddy." },
            { title: "Threshing", description: "The harvested paddy is threshed to separate the grains from the stalks. This can be done manually or using mechanical threshers." },
            { title: "Drying", description: "The grains are dried to reduce their moisture content, ensuring longer shelf life and preventing spoilage." },
            { title: "Cleaning", description: "The dried paddy is cleaned to remove impurities like stones, husks, and other debris." },
            { title: "Dehusking", description: "The outer husk of the rice grain is removed through hulling machines, leaving behind brown rice." },
            { title: "Polishing/Milling", description: "The brown rice is further processed to remove the bran layer, resulting in white rice with a smooth texture." },
            { title: "Sorting & Grading", description: "The milled rice is sorted and graded based on size, quality, and type, separating broken or inferior grains." },
            { title: "Quality Testing", description: "The final product is tested to ensure it is airtight, tamper-proof, and maintains freshness." },
            { title: "Packaging & Distribution", description: "The rice is packed in high-quality bags and transported to distributors and consumers worldwide." },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              variants={fadeInUp}
            >
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#4B4E6D] mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </motion.section>

      {/* Global Reach Section */}
      <motion.section
        className="mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div className="flex items-center justify-center gap-3 mb-6" variants={fadeInUp}>
          <img
            src={img.leaveimage} // Ensure correct path
            alt="Global Presence Icon"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-[#4B4E6D] text-center">
            Our Global Presence
          </h2>
        </motion.div>

        <motion.p className="text-sm sm:text-base md:text-lg text-center text-gray-600 mb-8" variants={fadeInUp}>
          Explore our global footprint as we deliver premium rice products to customers worldwide.
        </motion.p>
        
        <motion.div className="max-w-4xl mx-auto" variants={fadeInUp}>
          <img
            src={img.map} // Ensure correct path
            alt="Global Presence Map"
            className="rounded-lg"
          />
        </motion.div>
      </motion.section>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
          Join us in our mission to deliver premium, sustainable rice products to the world.
        </p>
      </motion.div>
    </div>
  );
};

export default CardSection;
