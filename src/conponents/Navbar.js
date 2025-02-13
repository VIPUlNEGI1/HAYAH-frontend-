import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { img } from "../assets copy/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-16 py-4">
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={img.logo}
              alt="Hayah Foods Logo"
              className="w-24 h-auto md:w-32 transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        <ul className="hidden md:flex space-x-6 lg:space-x-8 items-center text-gray-800 font-medium">
          <li>
            <Link to="/about" className="relative text-gray-800 hover:text-yellow-700 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/product" className="relative text-gray-800 hover:text-yellow-700 transition duration-300">
              Products
            </Link>
          </li>
          <li>
            <Link to="/bulk-order-enquiry" className="relative text-gray-800 hover:text-yellow-700 transition duration-300">
              Bulk Order Enquiry
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <img
              src={img.watsublogo}
              alt="WhatsApp Icon"
              className="w-12 sm:w-16 md:w-20 lg:w-18 h-auto object-contain transition-transform duration-300"
            />
          </a>
          <Link to="/contact-us" className="bg-yellow-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-900 transition duration-300 text-sm md:text-base">
            Contact Us
          </Link>
        </div>
        
        <button className="md:hidden" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-gray-800">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ duration: 0.4, ease: "easeOut" }} className="fixed top-0 left-0 w-4/5 max-w-sm h-full bg-white shadow-lg z-50 p-6">
            <button onClick={toggleMenu} className="absolute top-5 right-5 text-gray-800 focus:outline-none">✖</button>
            <ul className="flex flex-col items-center space-y-5 text-gray-800 font-medium mt-10">
              <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
              <li><Link to="/product" onClick={toggleMenu}>Products</Link></li>
              <li><Link to="/bulk-order-enquiry" onClick={toggleMenu}>Bulk Order Enquiry</Link></li>
              <li><Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
