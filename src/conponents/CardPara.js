import React, { useState } from "react";
import img1 from "../assets/Image-folder/img1.png";
import img2 from "../assets/Image-folder/img2.png";
import img3 from "../assets/Image-folder/img3.png";




const CardPara = ({ img = {} }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Default images for fallback if `img` is undefined
  const defaultImages = {
    img1: img1, // Replace with your default image paths
    img2: img2,
    img3: img3,
  };

  // Image and paragraph data
  const data = [
    {
      src: img.img1 || defaultImages.img1,
      alt: "Our Mission",
      title: "Our Mission",
      description:
        "At Hayah Foods, our mission is to deliver the finest quality rice that embodies purity, freshness, and exceptional taste. We are dedicated to sustainable practices, innovation, and excellence in every grain.",
    },
    {
      src: img.img2 || defaultImages.img2,
      alt: "Our Vision",
      title: "Our Vision",
      description:
        "Our vision is to blend tradition with innovation to create the finest rice products while promoting sustainability and enriching the lives of our customers worldwide.",
    },
    {
      src: img.img3 || defaultImages.img3,
      alt: "Our Manufacturing",
      title: "Our Manufacturing",
      description:
        "Our manufacturing process ensures the highest standards of quality and efficiency. With a commitment to sustainability, we use advanced techniques to produce the finest rice for global markets.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
        <p className="text-lg text-gray-600 mt-4">
          At Hayah Foods, we proudly stand as the most trusted rice exporter,
          blending tradition with innovation to deliver the finest rice
          products.
        </p>
      </div>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6 ${
              selectedIndex === index ? "ring-4 ring-yellow-500" : ""
            }`}
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={item.src} // Update to use item.src
              alt={item.alt}
              className="w-24 h-24 mb-4 object-contain"
              loading="lazy"
            />
            <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
          </div>
        ))}
      </div>

      {/* Paragraph Display */}
      {selectedIndex !== null && (
        <div className="max-w-4xl mx-auto mt-12 text-center bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-yellow-700 mb-4">
            {data[selectedIndex].title}
          </h3>
          <p className="text-md text-gray-700 leading-relaxed">
            {data[selectedIndex].description}
          </p>
        
        </div>
      )}
    </section>
  );
};

export default CardPara;
