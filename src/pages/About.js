import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Next.js optimized image loading
import { img } from "../assets copy/image";

// import aboutImage from "/images/about-us.jpg"; // Ensure image is placed in `/public/images/`

// Framer Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const About = () => {
  return (
    <div className="mt-20 min-h-screen bg-gradient-to-b from-[#f4f4f8] to-white py-12 px-6">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          At <span className="font-semibold">Hayah Foods</span>, we are dedicated to delivering premium-quality rice to
          the world. Our legacy of excellence and commitment to sustainability makes us a trusted name in the industry.
        </p>
      </motion.div>

      {/* Image & Text Section */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } }}
        >
          <Image
            src={img.factory}
            alt="About Hayah Foods"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            We aim to provide high-quality rice that meets international standards, ensuring purity, taste, and nutrition.
            Our focus is on ethical sourcing, sustainability, and customer satisfaction.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To be the leading global supplier of premium rice, while fostering sustainable agriculture and innovative
            processing techniques.
          </p>
        </motion.div>
      </div>

      {/* Core Values Section */}
      <div className="mt-16 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { title: "Quality", desc: "We ensure premium quality at every stage of production." },
            { title: "Integrity", desc: "Ethical sourcing and transparent business practices." },
            { title: "Sustainability", desc: "Commitment to eco-friendly farming and production." },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
              <p className="text-gray-600 mt-2">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
