import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { img } from "../assets copy/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle function for mobile menu
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-16 py-4">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={img.logo}
              alt="Hayah Foods Logo"
              className="w-24 h-auto md:w-32 transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 items-center text-gray-800 font-medium">
          <li>
            <Link
              to="/about"
              className="relative text-gray-800 hover:text-yellow-700 transition duration-300"
            >
              About
              <span className="absolute w-0 h-[2px] bg-yellow-800 left-0 bottom-0 transition-all duration-300 hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/product" // Explicit route for Products
              className="relative text-gray-800 hover:text-yellow-700 transition duration-300"
            >
              Products
              <span className="absolute w-0 h-[2px] bg-yellow-800 left-0 bottom-0 transition-all duration-300 hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/bulk-order-enquiry"
              className="relative text-gray-800 hover:text-yellow-700 transition duration-300"
            >
              Bulk Order Enquiry
              <span className="absolute w-0 h-[2px] bg-yellow-800 left-0 bottom-0 transition-all duration-300 hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* WhatsApp & Contact Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src={img.watsublogo}
              alt="WhatsApp Icon"
              className="w-12 sm:w-16 md:w-20 lg:w-18 h-auto object-contain transition-transform duration-300 "
            />
          </a>
          <Link
            to="/contact-us"
            className="bg-yellow-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-900 transition duration-300 text-sm md:text-base"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            id="menu-toggle"
            className="focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black"
              onClick={toggleMenu} // Clicking outside closes the menu
            />

            {/* Sliding Menu */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed top-0 left-0 w-4/5 max-w-sm h-full bg-white shadow-lg z-50 p-6"
            >
              {/* Close Button */}
              <button
                onClick={toggleMenu}
                className="absolute top-5 right-5 text-gray-800 focus:outline-none"
              >
                ✖
              </button>

              <ul className="flex flex-col items-center space-y-5 text-gray-800 font-medium mt-10">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-800 hover:text-yellow-700 transition duration-300"
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product" // Explicit route for Products
                    className="text-gray-800 hover:text-yellow-700 transition duration-300"
                    onClick={toggleMenu}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bulk-order-enquiry"
                    className="text-gray-800 hover:text-yellow-700 transition duration-300"
                    onClick={toggleMenu}
                  >
                    Bulk Order Enquiry
                  </Link>
                </li>
                <li>
                  <a
                    href="https://wa.me/yourphonenumber"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-300"
                  >
                    <img
                      src={img.watsublogo}
                      alt="WhatsApp Icon"
                      className="w-10 h-10 sm:w-10 sm:h-10 object-contain"
                    />
                  </a>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="bg-yellow-900 text-white px-6 py-2 rounded-md shadow-md hover:bg-yellow-700 transition duration-300 text-sm"
                    onClick={toggleMenu}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
