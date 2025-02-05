import React from "react";
import { motion } from "framer-motion";
import { img } from "../assets copy/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SeeMoreProduct = () => {
  const premiumBasmati = [
    { image: "path-to-image1.jpg", title: "1121 Steamed Basmati Rice", description: "Extra-long grains, ideal for biryanis." },
    { image: "path-to-image2.jpg", title: "1401 Sella Basmati Rice", description: "Golden-hued rice, perfect for pilafs and special occasions." },
    { image: "path-to-image3.jpg", title: "1718 Steamed Basmati Rice", description: "Aromatic variety with a soft texture, great for daily use." },
    { image: "path-to-image4.jpg", title: "PUSA Steamed Basmati Rice", description: "Shorter grains with a traditional aroma, ideal for quick recipes." },
  ];

  const nonBasmati = [
    { image: "path-to-image5.jpg", title: "PR 11 Non-Basmati Rice", description: "Known for its soft texture, ideal for daily meals and festive dishes." },
    { image: "path-to-image6.jpg", title: "PR 14 Non-Basmati Rice", description: "Offers long grains and a delightful aroma, perfect for gourmet cooking." },
    { image: "path-to-image7.jpg", title: "Parmal Non-Basmati Rice", description: "Medium-grain rice with a soft texture, suitable for everyday cooking." },
    { image: "path-to-image8.jpg", title: "Sugandha Non-Basmati Rice", description: "Naturally aromatic, with long grains and rich flavor, great for biryanis and pilafs." },
  ];

  return (
    <motion.div className="px-6 py-10 mt-20" initial="hidden" animate="visible" variants={fadeInUp}>
      <motion.div className="shadow-md overflow-hidden" variants={fadeInUp}>
        <motion.img src={img.riceImage} alt="Terraced Fields" className="w-full h-64 object-cover" variants={fadeInUp} />
        <motion.div className="p-8 text-center" variants={fadeInUp}>
          <h1 className="mt-8 text-3xl sm:text-4xl font-bold text-gray-800 mb-2"> Global Grain Pioneers</h1>
          <p className="text-sm sm:text-base text-gray-500">Crafted by Nature, Perfected by Tradition</p>
        </motion.div>
      </motion.div>

      {/* Premium Basmati Rice Collection */}
      <motion.div className="mb-16 mt-20" variants={fadeInUp}>
        <h2 className="text-2xl font-bold text-gray-800 mb-10">Our Premium Basmati Rice Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {premiumBasmati.map((product, index) => (
            <motion.div key={index} className="bg-white shadow-md rounded-lg overflow-hidden border" variants={fadeInUp}>
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Non-Basmati Rice Collection */}
      <motion.div variants={fadeInUp}>
        <h2 className="text-2xl font-bold text-gray-800 mb-10">Our Non-Basmati Rice Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nonBasmati.map((product, index) => (
            <motion.div key={index} className="bg-white shadow-md rounded-lg overflow-hidden border" variants={fadeInUp}>
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SeeMoreProduct;
