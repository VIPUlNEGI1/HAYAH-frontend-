import React, { useState } from "react";
import { motion } from "framer-motion";
import { img } from "../assets copy/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage("✅ Form submitted successfully!");
        setFormData({ fullName: "", email: "", phone: "", country: "", message: "" });
      } else {
        setResponseMessage("❌ Error submitting the form. Please try again.");
      }
    } catch (error) {
      setResponseMessage("⚠️ An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="mt-16 min-h-screen bg-gradient-to-b from-[#f1fde26f] to-white text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      {/* Contact Info Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center mx-auto max-w-5xl px-5"
        variants={fadeInUp}
      >
        {[
          { icon: "✉️", title: "Write to Us", text: "ankushdahiya222@gmail.com" },
          { icon: "📞", title: "Call Us", text: "+91 9998442528" },
          { icon: "📍", title: "Address", text: "Vill. Ganger, Taraori-Karnal, 132112" },
        ].map((info, index) => (
          <motion.div
            key={index}
            className="relative mt-11 mb-7 bg-white bg-opacity-90 backdrop-blur-md p-4 sm:p-5 rounded-lg shadow-md border border-gray-200 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 ease-in-out text-center group overflow-hidden"
            whileHover={{ scale: 1.05 }}
            variants={fadeInUp}
          >
            <div className="relative z-10 bg-gradient-to-r from-[#f9f8f7] to-[#fcfcfc] w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md transition-transform duration-300 group-hover:scale-110">
              <span className="text-2xl sm:text-3xl">{info.icon}</span>
            </div>

            <h2 className="relative z-10 text-sm sm:text-md font-semibold text-gray-900 mb-1">
              {info.title}
            </h2>
            <p className="relative z-10 text-gray-700 text-xs sm:text-sm leading-snug">
              {info.text}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Form Section */}
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-6 sm:gap-10 px-4 sm:px-8 lg:px-16 pb-10"
        variants={fadeInUp}
      >
        <motion.div
          className="w-full lg:w-5/12 bg-white bg-opacity-90 backdrop-blur-lg p-5 sm:p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
          whileHover={{ scale: 1.01 }}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-[#4B4E6D] text-center sm:text-left">
            Leave Our Team A Message
          </h2>

          {responseMessage && (
            <motion.p className="text-lg text-center mb-4" animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
              {responseMessage}
            </motion.p>
          )}

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
              <motion.div variants={fadeInUp}>
                <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-300 transition-all" />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-300 transition-all" />
              </motion.div>
            </div>
            
            <motion.div variants={fadeInUp}>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea name="message" rows="3" value={formData.message} onChange={handleChange} required className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-300 transition-all"></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="w-full bg-[#7f4d1d] text-white py-2 sm:py-3 rounded-lg hover:bg-[#5f3a17] transition text-lg font-semibold"
              animate={loading ? { opacity: 0.5 } : { opacity: 1 }}
            >
              {loading ? "Submitting..." : "Submit"}
            </motion.button>
          </form>
        </motion.div>

        <motion.div className="w-full lg:w-7/12" variants={fadeInUp}>
          <img src={img.factory} alt="Factory" className="w-full rounded-lg shadow-lg" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
