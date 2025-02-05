import React from "react";
import { motion } from "framer-motion";
import { img } from "../assets copy/image";

const AboutUs = () => {
  return (
    <div className=" py-12 mt-24">
      {/* Section 1: About Us Intro */}
      <motion.section
        className="max-w-7xl mx-auto p-6 bg-white   mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6"> Pioneers in Sustainable Rice</h1>
        <p className="text-md sm:text-lg text-gray-700 mb-6">
          Al-HAYAH Foods is a global initiative transforming agriculture by connecting farmers,
          championing sustainability, and delivering exceptional rice worldwide.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center">
            <span className="text-3xl sm:text-4xl text-green-600">🌍</span>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-4">Global Farming Network</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-md">
              500+ farmers across 3 countries, collaborating to support local agriculture and source
              high-quality rice.
            </p>
          </div>
          <div className="text-center">
            <span className="text-3xl sm:text-4xl text-green-600">🌿</span>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-4">Sustainable Practices</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-md">
              Advanced technologies reducing water usage by 40% and promoting regenerative,
              eco-friendly farming.
            </p>
          </div>
          <div className="text-center">
            <span className="text-3xl sm:text-4xl text-green-600">👩‍🌾</span>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-4">Farmer Empowerment</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-md">
              Fair trade practices, training, and community programs enhancing economic opportunities
              for farming families.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Section 2: Brand Story */}
      <motion.section
        className="max-w-7xl mx-auto p-6 bg-white rounded-lg  mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6"> Connecting Global Palates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div>
            <ol className="list-decimal text-gray-700 space-y-4 pl-6 text-sm sm:text-md">
              <li>
                Our journey sprouted from a deep, generational reverence for rice – an art form passed
                down through centuries of agricultural wisdom.
              </li>
              <li>
                We've cultivated profound, meaningful partnerships with farmers who are not just
                suppliers, but true stewards of sustainable agricultural heritage.
              </li>
              <li>
                Today, we bridge continents and cultures, transforming humble grains into culinary
                experiences that tell stories of tradition, respect, and shared human connection.
              </li>
            </ol>
          </div>
          <div>
            <img
              src={img.OPI}
              alt="Brand Story"
              className="shadow-md"
            />
          </div>
        </div>
      </motion.section>

      {/* Section 4: Certifications */}
      <motion.section
        className="max-w-7xl mx-auto p-6 bg-white rounded-lg "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Certified for Excellence</h2>
        <p className="text-sm sm:text-md text-gray-700 mb-6">
          At Al-HAYAH Foods, our commitment to quality transcends borders. We continuously validate
          our excellence through rigorous international certifications, ensuring every grain meets
          the highest standards of safety, sustainability, and customer satisfaction.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center">
            <img src={img.cirtificate1} alt="Certification 1" className="rounded-lg shadow-md" />
            <h3 className="mt-8  text-lg font-bold text-gray-800">FSSAI Certification</h3>
            <p className="mb-10 text-gray-600">
              Validates Indian food safety standards and quality control.
            </p>
          </div>
          <div className="text-center">
            <img src={img.cirtificate2} alt="Certification 2" className="rounded-lg shadow-md" />
            <h3 className=" mt-8 text-lg font-bold text-gray-800">ISO 22000:2018</h3>
            <p className="text-gray-600 mb-10">
              International food safety management standard for hazard prevention.
            </p>
          </div>
          <div className="text-center">
            <img src={img.cirtificate3} alt="Certification 3" className="rounded-lg shadow-md" />
            <h3 className="text-lg mt-8 font-bold text-gray-800">GMP Certification</h3>
            <p className="text-gray-600 mb-10">
              Ensures consistent product safety through proactive risk management.
            </p>
          </div>
          <div className="text-center">
            <img src={img.cirtificate4} alt="Certification 4" className="rounded-lg shadow-md" />
            <h3 className="text-lg font-bold text-gray-800 mt-8">HACCP Certification</h3>
            <p className="text-gray-600 mb-10">
              Systematic approach to quality control and hazard prevention.
            </p>
          </div>
          <div className="text-center">
            <img src={img.cirtificate5} alt="Certification 5" className="rounded-lg shadow-md" />
            <h3 className="text-lg font-bold text-gray-800 mt-8">ISO 9001:2015 Certification</h3>
            <p className="text-gray-600 mb-10">
              Global quality management benchmark for operational excellence.
            </p>
          </div>
          <div className="text-center">
            <img src={img.cirtificate6} alt="Certification 6" className="rounded-lg shadow-md" />
            <h3 className="text-lg font-bold text-gray-800 mt-8">APEDA Certification</h3>
            <p className="text-gray-600 mb-10">
              Confirms premium rice quality for international agricultural exports.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
          <img src={img.cirtificate7} alt="Certification 7" className="rounded-lg shadow-md" />
          <img src={img.cirtificate8} alt="Certification 8" className="rounded-lg shadow-md" />
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;