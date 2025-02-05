import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { img } from "../assets copy/image";

// Framer Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { transition: { staggerChildren: 0.3 } }, // Cards appear one by one
};

const Card = () => {
  const navigate = useNavigate();

  const products = [
    {
      title: "Basmati Rice",
      description:
        "Our Premium Basmati Rice features long, non-sticky grains with a delightful aroma, perfect for authentic cuisines.",
      img: img.rice,
      learnMore: () => navigate("/learn-more/basmati"),
    },
    {
      title: "Non Basmati Rice",
      description:
        "Our Non-Basmati Rice is light, gluten-free, and low in starch, offering a delicious taste with a low calorific value.",
      img: img.dal,
      learnMore: () => navigate("/learn-more/non-basmati"),
    },
    {
      title: "Pesticides-Free Rice",
      description:
        "Our Pesticides-Free Rice is organically grown to retain its rich nutrient content and low moisture levels.",
      img: img.flor,
      learnMore: () => navigate("/learn-more/pesticides-free"),
    },
  ];

  return (
    <motion.div
      className="p-8 bg-gradient-to-b from-[#f4f4f8] to-white text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
  <motion.div
  className="flex justify-center items-center gap-3 mb-4 text-center"
  variants={fadeInUp}
>
  {/* Image/Logo */}
  <img
    src={img.leaveimage} // Update this path to your logo/image
    alt="Our Products Logo"
    className="w-8 h-8 sm:w-10 sm:h-10"
  />

  {/* Heading */}
  <h2 className="text-3xl font-extrabold text-[#4B4E6D]">
    Our Products
  </h2>
</motion.div>

      <motion.p
        className="text-lg text-gray-600 mb-6 text-center"
        variants={fadeInUp}
      >
        From the finest paddy fields to your plate, discover our range of
        premium rice crafted with unmatched quality and care.
      </motion.p>

      {/* Product Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={staggerContainer}
      >
        {products.map((product, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <ProductCard
              title={product.title}
              description={product.description}
              img={product.img}
              onLearnMore={product.learnMore}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* View All Products Button */}
      <motion.div className="text-center mt-6" variants={fadeInUp}>
        <motion.button
          onClick={() => navigate("/product")}
          className="bg-[#695a38d5] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-[#6c5d47b9] transition transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          View All Products
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Card;
