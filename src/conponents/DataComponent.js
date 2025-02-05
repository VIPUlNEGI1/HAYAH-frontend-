import React from "react";
import { motion } from "framer-motion";
import { img } from "../assets copy/image";

const CombinedComponent = () => {
  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeInOut" } },
  };

  return (
    <div>
      {/* Title Section */}
      <motion.div
        className="text-center mt-16"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Animation triggers when in view
      >
        <h1 className="text-2xl sm:text-4xl mt-6 lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-wide flex justify-center items-center gap-2">
          <img src={img.leaveimage} alt="Decorative Icon" className="w-8 h-8 inline-block" />
          WHO WE ARE
        </h1>
        <p className="text-sm sm:text-md lg:text-lg text-gray-600 font-medium mb-11">
          Renowned Manufacturer, Supplier And Exporter Of Basmati And Non Basmati Rice
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Smooth scroll effect
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
                variants={fadeInUp} // Apply scrolling animation
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{stat.value}</h2>
                <p className="text-sm sm:text-md mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Collaboration Section */}
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Triggers on scroll
        className="text-center mt-16"
      >
        <p className="text-sm lg:text-lg text-gray-700 leading-relaxed mt-6 mb-9 px-4 sm:px-6 max-w-4xl mx-auto">
          AL HAYAH EXPORTS aims to revolutionize basmati rice procurement, ensuring seamless and reliable transactions for Indian exporters and international importers. We strive to eliminate unethical practices like blending rice varieties, delivering only the finest quality, pure and consistent grains. For over a decade, we've been more than manufacturers; we're custodians of integrity and excellence. AL HAYAH EXPORTS is a trusted partner for those seeking unmatched quality and transparency. Choosing us means choosing excellence, trust, and uncompromising standards in every shipment.
        </p>

        <motion.img
          src={img.collabration}
          alt="Collaboration"
          width={250}
          height={100}
          className="mx-auto rounded-lg"
          style={{ filter: "brightness(0.95) contrast(1.1)" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp} // Smooth image reveal
        />

        <motion.p
          className="text-sm lg:text-lg text-gray-700 leading-relaxed mt-10 px-4 sm:px-6 max-w-4xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Founded in 2012 with Sagar Industries, specializing in rice mill infrastructure, we've equipped ~100 rice mills across India & Nepal, and shared our technology with leading brands. Building on this, our state-of-the-art rice mill, Mansi Overseas, has supplied top-quality rice to major Indian brands like Reliance and Dmart for the past five years. Now, leveraging decades of rice industry experience, AL HAYAH EXPORTS is committed to delivering unmatched quality and reliability to international partners. We uphold trust, transparency, and uncompromising standards, specializing in quality to build enduring partnerships and redefine global rice export excellence.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default CombinedComponent;
