import React from "react";
import { motion } from "framer-motion";
import Contact from "../conponents/Contact";
import { img } from "../assets copy/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const BulkOrderEnquiry = () => {
  return (
    <div className="p-6 mt-10">
      {/* Building Partnerships Section */}
      <motion.div
        className="bg-[#f9f8f1] p-8 sm:p-12 rounded-lg shadow-lg mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Building Long-Term Partnerships
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-8">
          Hayah Foods prioritizes building enduring partnerships with customers. This dedication is reflected in our commitment to delivering exceptional quality and reliability, leading to repeat business and growing order volumes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Strong Customer Loyalty */}
          <motion.div className="flex items-start gap-4" variants={fadeIn}>
            <span className="text-green-700 text-3xl"></span>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Strong Customer Loyalty</h3>
              <p className="text-sm text-gray-600">
                90% customer retention rate with over 75 global partners consistently reordering our premium rice collections.
              </p>
            </div>
          </motion.div>
          {/* Direct Plant Visits */}
          <motion.div className="flex items-start gap-4" variants={fadeIn}>
            <span className="text-green-700 text-3xl"></span>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Direct Plant Visits</h3>
              <p className="text-sm text-gray-600">
                Comprehensive client tours from Saudi Arabia, Dubai, and Egypt, with 12+ international delegations experiencing our production excellence firsthand.
              </p>
            </div>
          </motion.div>
          {/* Export Success */}
          <motion.div className="flex items-start gap-4" variants={fadeIn}>
            <span className="text-green-700 text-3xl"></span>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Export Success</h3>
              <p className="text-sm text-gray-600">
                Strategic shipping volumes: 5 FCL with 3 repeat clients, 3 FCL with 4 consistent partners, 2 FCL with 2 long-term relationships, representing $2.5M in annual export revenue.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Worldwide Footprint Section */}
      <motion.div
        className="bg-[#f5f9f0a1] p-8 sm:p-12 mt-9 rounded-lg shadow-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section: Text Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Worldwide Footprint
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* India */}
              <motion.div className="flex items-start gap-4" variants={fadeIn}>
                <span className="text-green-700 text-2xl">📍</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">India</h3>
                  <p className="text-sm text-gray-600">
                    Comprehensive rice production across multiple states and agricultural zones.
                  </p>
                </div>
              </motion.div>
              {/* Sub-Saharan Africa */}
              <motion.div className="flex items-start gap-4" variants={fadeIn}>
                <span className="text-green-700 text-2xl">📍</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Sub-Saharan Africa</h3>
                  <p className="text-sm text-gray-600">
                    Strategic markets in Nigeria, Kenya, Tanzania, and emerging agricultural partnerships.
                  </p>
                </div>
              </motion.div>
              {/* MENA Region */}
              <motion.div className="flex items-start gap-4" variants={fadeIn}>
                <span className="text-green-700 text-2xl">📍</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">MENA Region</h3>
                  <p className="text-sm text-gray-600">
                    Key markets in Egypt, Saudi Arabia, UAE, and North African countries.
                  </p>
                </div>
              </motion.div>
              {/* Canada */}
              <motion.div className="flex items-start gap-4" variants={fadeIn}>
                <span className="text-green-700 text-2xl">📍</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Canada</h3>
                  <p className="text-sm text-gray-600">
                    Expanding distribution networks and developing sustainable rice import strategies.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Section: Map Image */}
          <motion.div className="flex justify-center items-center" variants={fadeIn}>
            <img
              src={img.map} // Replace with the correct path to your map image
              alt="Worldwide Footprint Map"
              className="w-full max-w-md lg:max-w-full rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Bulk Order Enquiry */}
      <motion.div
        className="mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Bulk Order Enquiry</h1>
        <p className="text-gray-600 mb-6">
          This is where users can enquire about bulk orders.
        </p>
        <Contact />
      </motion.div>
    </div>
  );
};

export default BulkOrderEnquiry;
