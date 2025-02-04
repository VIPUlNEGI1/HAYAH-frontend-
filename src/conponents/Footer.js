import React from 'react';
import { Link } from 'react-router-dom';
import { img } from '../assets copy/image';


const Footer = () => {
  return (
    <footer className="bg-[#582d0e] text-white">
      
      {/* Background Image Section */}
      <div 
        className="w-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${img.footer})`,
          height: '19vh', // Adjusts dynamically
          minHeight: '60px', // Prevents cutoff on mobile
          
        }}
      >
        <div className="h-full bg-black opacity-20"></div>
      </div>

      {/* Navigation and Social Links */}
      <div className="bg-[#38200b] py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4 sm:space-x-8 mb-4 md:mb-0 text-sm sm:text-base font-medium">
            <Link to="/about" className="hover:text-[#F4B400] transition duration-300">About</Link>
            <Link to="/products" className="hover:text-[#F4B400] transition duration-300">Products</Link>
            <Link to="/bulk-order-enquiry" className="hover:text-[#F4B400] transition duration-300">Bulk Order</Link>
            <Link to="/contact" className="hover:text-[#F4B400] transition duration-300">Contact Us</Link>
          </nav>

          {/* Social Media Links */}
          <div className="flex space-x-3 sm:space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={img.facebook} alt="Facebook" className="w-6 sm:w-8 h-6 sm:h-8 transform hover:scale-110 transition duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={img.instagram} alt="Instagram" className="w-6 sm:w-8 h-6 sm:h-8 transform hover:scale-110 transition duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#1e1206] py-4 text-center text-xs sm:text-sm">
        <p>© {new Date().getFullYear()} Hayah | All Rights Reserved</p>
      </div>
      
    </footer>
  );
};

export default Footer;
