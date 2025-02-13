import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { img } from '../assets copy/image';

const Footer = () => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const ADMIN_EMAIL = "alhayahexports@gmail.com";
  const ADMIN_PASSWORD = "7983922210";

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      navigate("/admin");
    } else {
      alert("Invalid credentials! Only the admin can access this page.");
    }
  };

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
        <div className="h-full opacity-20"></div>
      </div>

      {/* Navigation and Social Links */}
      <div className="bg-[#38200b] py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4 sm:space-x-8 mb-4 md:mb-0 text-sm sm:text-base font-medium">
            <Link to="/about" className="hover:text-[#F4B400] transition duration-300">About</Link>
            <Link to="/product" className="hover:text-[#F4B400] transition duration-300">Products</Link>
            <Link to="/bulk-order-enquiry" className="hover:text-[#F4B400] transition duration-300">Bulk Order</Link>
            <Link to="/contact-us" className="hover:text-[#F4B400] transition duration-300">Contact Us</Link>
          
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

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Admin Login</h2>
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <input 
                type="email" 
                placeholder="Admin Email" 
                className="w-full p-2 border rounded text-black" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full p-2 border rounded text-black" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
              <div className="flex justify-between">
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">Login</button>
                <button type="button" onClick={() => setShowAdminLogin(false)} className="bg-gray-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-700">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Copyright Section */}
    {/* Copyright Section */}
    <div className="bg-[#1e1206] py-4 flex flex-col sm:flex-row items-center justify-center text-center text-xs sm:text-sm">
  <Link onClick={() => setShowAdminLogin(true)} className="hover:text-[#F4B400] transition duration-300 cursor-pointer mb-2 sm:mb-0 sm:mr-4">Admin</Link>
  <p>© {new Date().getFullYear()} Hayah | All Rights Reserved</p>
</div>


    </footer>
  );
};

export default Footer;
