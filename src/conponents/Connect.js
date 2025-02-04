import React, { useState } from 'react';
// import mailIcon from '../assets copy/image/mail.pmg';
// import callIcon from "../assets/Image-folder/call.png";
// import locationIcon from '../assets/Image-folder/location.png';
// import factoryImage from '../assets/Image-folder/factory.png';
import { img } from '../assets copy/image';

const Contact = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });

  // State to show loading & success/error messages
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setResponseMessage('✅ Form submitted successfully!');
        setFormData({ fullName: '', email: '', phone: '', country: '', message: '' });
      } else {
        setResponseMessage('❌ Error submitting the form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('⚠️ An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#d2cfcd5d] to-white text-gray-800">
      {/* Header Section */}
    

{/* Contact Info Section */}

{/* Contact Info Section */}
<div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center mx-auto max-w-5xl px-5">
  {[
    { icon: img.mailIcon, title: "Write to Us", text: "ankushdahiya222@gmail.com" },
    { icon: img.callIcon, title: "Call Us", text: "+91 9998442528" },
    { icon: img.location, title: "Address", text: "Vill. Ganger, Taraori-Karnal, 132112" },
  ].map((info, index) => (
    <div 
      key={index} 
      className="relative mt-11 mb-7 bg-white bg-opacity-90 backdrop-blur-md p-4 sm:p-5 rounded-lg shadow-md border border-gray-200 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 ease-in-out text-center group overflow-hidden"
    >
      {/* Animated Gradient Border Effect */}
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#f1e6ddeb] via-[#e7ddd1] to-[#f7f4eb] opacity-10 blur-md transition-all duration-300 group-hover:opacity-40"></div>

      {/* Icon with Glowing Effect */}
      <div className="relative z-10 bg-gradient-to-r from-[#f9f8f7] to-[#fcfcfc] w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md transition-transform duration-300 group-hover:scale-110">
        <img src={info.icon} alt={`${info.title} Icon`} className="w-7 sm:w-8 h-7 sm:h-8 opacity-90" />
      </div>

      {/* Title */}
      <h2 className="relative z-10 text-sm sm:text-md font-semibold text-gray-900 mb-1">{info.title}</h2>

      {/* Description */}
      <p className="relative z-10 text-gray-700 text-xs sm:text-sm leading-snug">{info.text}</p>
    </div>
  ))}
</div>

  
{/* Form Section */}

  {/* Form Section */}
<div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-10 px-4 sm:px-8 lg:px-16 pb-10">
  
  {/* Form Container */}
  <div className="w-full lg:w-5/12 bg-white bg-opacity-90 backdrop-blur-lg p-5 sm:p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
    <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#4B4E6D] text-center sm:text-left">
      Leave Our Team A Message
    </h2>

    {/* Success/Error Message */}
    {responseMessage && <p className="text-lg text-center mb-4">{responseMessage}</p>}

    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-5">
      
      {/* Name & Email Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input 
            type="text" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
            required 
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-300 transition-all"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-300 transition-all"
          />
        </div>
      </div>

      {/* Phone & Country Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Phone</label>
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-300 transition-all"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Country</label>
          <input 
            type="text" 
            name="country" 
            value={formData.country} 
            onChange={handleChange} 
            required 
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-300 transition-all"
          />
        </div>
      </div>

      {/* Message Field */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Message</label>
        <textarea 
          name="message" 
          rows="3" 
          value={formData.message} 
          onChange={handleChange} 
          required 
          className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-300 transition-all"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        className="w-full bg-[#7f4d1d] text-white py-2 sm:py-3 rounded-lg hover:bg-[#5f3a17] transition text-lg font-semibold"
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  </div>

  {/* Image Container */}
  <div className="w-full lg:w-7/12">
    <img 
      src={img.factory} 
      alt="Factory" 
      className="w-full "
    />
  </div>

</div>
   
    </div>
  );
};

export default Contact;
