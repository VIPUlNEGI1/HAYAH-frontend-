import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ title, description, img, productData }) => {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
     
     
      <img
        src={img}
        alt={title}
        className="w-20 h-20 mx-auto mb-4 rounded-full shadow-md object-cover"
        loading="lazy"
      />
      <h3 className="text-lg font-bold text-[#4B4E6D] mb-2 text-center">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 text-center">{description}</p>
      <div className="text-center">
        <Link
          to="/learn-more"
          state={{ product: productData }}
          className="bg-[#7f672fd6] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#7c6c56b2] transition"
        >
          Learn More
        </Link>
      </div>
 

    </div>
  );
};

export default ProductCard;
