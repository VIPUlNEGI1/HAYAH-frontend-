import React from 'react';

const ProductPage = () => {
  const products = [
    {
      id: 1,
      title: 'Basmati Rice',
      description:
        'Our Premium Basmati Rice features long, non-sticky grains with a delightful aroma, perfect for authentic cuisines. Renowned for its exceptional taste and high nutritional value, it supports digestive health and overall well-being.',
      img: '/path-to-basmati-image.jpg', // Replace with actual image path
    },
    {
      id: 2,
      title: 'Non Basmati Rice',
      description:
        'Our Non-Basmati Rice is light, gluten-free, and low in starch, offering a delicious taste with a low calorific value. Ideal for health-conscious individuals, it supports easy digestion and is perfect for those managing sugar levels or weight.',
      img: '/path-to-non-basmati-image.jpg', // Replace with actual image path
    },
    {
      id: 3,
      title: 'Pesticides-Free Rice',
      description:
        'Our Pesticides-Free Rice is organically grown to retain its rich nutrient content and low moisture levels. Ideal for health-conscious consumers, it offers numerous health benefits in high-quality packaging at an affordable price.',
      img: '/path-to-pesticides-free-image.jpg', // Replace with actual image path
    },
  ];

  return (
    <div className=" mt-16 p-6 bg-gradient-to-b from-[#f4f4f8] to-white">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">Our Products</h1>
      <p className="text-gray-600 text-lg text-center mb-10">
        Explore our diverse range of premium rice products, carefully crafted to meet your needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {product.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <button className="bg-[#FFB400] text-white py-2 px-4 rounded-lg shadow hover:bg-[#FF9400] transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
