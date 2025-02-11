import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { img } from "../assets copy/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const ADMIN_EMAIL = "99vipul88@gmail.com";
  const ADMIN_PASSWORD = "7983922210";

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      navigate("/admin");
    } else {
      alert("Invalid credentials! Only the admin can access this page.");
    }
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
          <li>

          <Link onClick={() => setShowAdminLogin(true)} className="relative text-gray-800 hover:bg-slate-300 transition duration-300">
            Admin
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
              <li><Link to="/admin" onClick={toggleMenu}>Admin</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {showAdminLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Admin Login</h2>
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <input type="email" placeholder="Admin Email" className="w-full p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" placeholder="Password" className="w-full p-2 border rounded" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <div className="flex justify-between">
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">Login</button>
                <button type="button" onClick={() => setShowAdminLogin(false)} className="bg-gray-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-700">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
