import React, { useState } from "react";
import { motion } from "framer-motion";
import factoryImage from "../assets copy/Image-folder/factory.png"
import API_BASE_URL from "../config";



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
      console.log("📤 Sending Contact Data:", formData); // Debugging

  //  this is the major change for me *********************
    
  const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log("🔹 Server Response:", data); // Debugging
  
      if (response.ok) {
        setResponseMessage("✅ Your inquiry has been submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          country: "",
          message: "",
        });
      } else {
        setResponseMessage(`❌ Error: ${data.message || "Submission failed"}`);
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      setResponseMessage("⚠️ An unexpected error occurred. Please check your connection.");
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
      {/* Form Section */}
      <motion.div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-10 px-4 sm:px-8 lg:px-16 pb-10" variants={fadeInUp}>
        <motion.div className="w-full lg:w-5/12 bg-white p-5 sm:p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-[#4B4E6D] text-center sm:text-left">
            Leave Our Team A Message
          </h2>

          {responseMessage && <motion.p className="text-lg text-center mb-4">{responseMessage}</motion.p>}

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-5">
            {["fullName", "email", "phone", "country", "message"].map((field, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <label className="block text-gray-700 font-medium mb-1 capitalize">{field}</label>
                <input
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-orange-300 transition-all"
                />
              </motion.div>
            ))}

            <motion.button type="submit" className="w-full bg-[#7f4d1d] text-white py-2 sm:py-3 rounded-lg transition text-lg font-semibold">
              {loading ? "Submitting..." : "Submit"}
            </motion.button>
          </form>
        </motion.div>

        <motion.div className="w-full lg:w-7/12">
          <img src={factoryImage} alt="Factory" className="w-full rounded-lg shadow-lg" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
