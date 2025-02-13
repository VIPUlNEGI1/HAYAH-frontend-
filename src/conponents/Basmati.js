import { motion } from "framer-motion";
import riceImg from "../assets copy/Image-folder/page-bg.jpg"; // One main image

const RiceCategories = () => {
  return (
    <div className="min-h-screen mt-24 flex flex-col items-center justify-center p-6">
      {/* Main Image */}
      <motion.img
        src={riceImg}
        alt="Different Types of Rice"
        className="w-full max-w-3xl shadow-lg rounded-lg mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Title */}
      <motion.h1
        className="text-4xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Explore Different Types of Rice
      </motion.h1>

      {/* Rice Types Container */}
      <div className="max-w-3xl w-full space-y-10">
        
        {/* Section: Basmati Rice */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Basmati Rice</h2>
          <p className="text-gray-700 mb-4">
            Basmati rice is known for its long grains, unique aroma, and fluffy texture when cooked.
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Long and slender grains</li>
            <li>Fluffy and separate when cooked</li>
            <li>Delicate nutty and sweet flavor</li>
            <li>Aromatic even when uncooked</li>
          </ul>
        </motion.div>

        {/* Section: Non-Basmati Rice */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Non-Basmati Rice</h2>
          <p className="text-gray-700 mb-4">
            Non-Basmati rice includes various short and medium-grain varieties used in different cuisines.
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Shorter and thicker grains</li>
            <li>Soft and sticky texture when cooked</li>
            <li>Used in dishes like rice bowls and porridge</li>
            <li>Available in different colors (white, brown, red)</li>
          </ul>
        </motion.div>

        {/* Section: Popular Non-Basmati Varieties */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Popular Non-Basmati Varieties</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Sona Masoori - Lightweight and aromatic, popular in South India</li>
            <li>Parboiled Rice - Processed to retain more nutrients</li>
            <li>Ponni Rice - Soft texture, commonly used in Tamil Nadu</li>
            <li>Matta Rice - Red-colored rice with a unique earthy taste</li>
            <li>Jasmine Rice - Slightly sticky and fragrant, used in Thai cuisine</li>
          </ul>
        </motion.div>

        {/* Section: Pesticide-Free Rice */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Pesticide-Free Rice</h2>
          <p className="text-gray-700 mb-4">
            Pesticide-free rice is cultivated using organic farming practices, ensuring natural growth without harmful chemicals.
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Grown without synthetic pesticides</li>
            <li>Healthier alternative with more nutrients</li>
            <li>Eco-friendly and supports sustainable farming</li>
            <li>Available in both basmati and non-basmati varieties</li>
          </ul>
        </motion.div>

        {/* Section: Health Benefits of Pesticide-Free Rice */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Health Benefits</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Free from harmful pesticide residues</li>
            <li>Retains natural minerals and vitamins</li>
            <li>Helps in digestion and gut health</li>
            <li>Supports a healthier immune system</li>
          </ul>
        </motion.div>

        {/* Section: Storage Tips */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Storage Tips</h2>
          <p className="text-gray-700">
            Store pesticide-free rice in an airtight container in a cool, dry place. For longer shelf life, refrigerate brown and black rice varieties.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default RiceCategories;
