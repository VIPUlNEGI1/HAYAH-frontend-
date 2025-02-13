import React, { useState } from "react";
import { img } from "../assets copy/image";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    country: "",
    state: "",
    companyName: "",
    website: "",
    businessType: "",
    productOfInterest: [],
    orderQuantity: "",
    yourBrand: "",
    packagingDetails: "",
    destinationPort: "",
    inquiry: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const updatedProducts = checked
        ? [...prevData.productOfInterest, value]
        : prevData.productOfInterest.filter((item) => item !== value);

      return { ...prevData, productOfInterest: updatedProducts };
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("https://haryah-backend.vercel.app/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage("✅ Your inquiry has been submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          countryCode: "+91",
          country: "",
          state: "",
          companyName: "",
          website: "",
          businessType: "",
          productOfInterest: [],
          orderQuantity: "",
          yourBrand: "",
          packagingDetails: "",
          destinationPort: "",
          inquiry: "",
        });
      } else {
        setResponseMessage("❌ There was an error. Please try again.");
      }
    } catch (error) {
      setResponseMessage("⚠️ Failed to submit inquiry. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-32 min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 ">
      {/* Header Section */}
      <div className="text-center mt-12  px-3 py-7">
        <h1 className="text-4xl font-bold text-[#4B4E6D] mb-4">Bulk Order Inquiry</h1>
        <p className="text-base text-gray-600">Let us know your requirements and we’ll get back to you shortly.</p>
      </div>

      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="bg-white p-6  shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Submit Your Inquiry</h2>
          {responseMessage && <p className="text-center text-green-600 mb-4 font-semibold">{responseMessage}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name*" className="w-full p-2 border rounded-lg" required />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email*" className="w-full p-2 border rounded-lg" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="p-2 border rounded-lg">
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number*" className="w-full p-2 border rounded-lg" required />
              <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country*" className="w-full p-2 border rounded-lg" required />
            </div>

            <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" className="w-full p-2 border rounded-lg" />
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" className="w-full p-2 border rounded-lg" />
            <input type="text" name="website" value={formData.website} onChange={handleChange} placeholder="Website" className="w-full p-2 border rounded-lg" />
            <input type="text" name="businessType" value={formData.businessType} onChange={handleChange} placeholder="Business Type*" className="w-full p-2 border rounded-lg" required />

            <div>
              <p className="text-gray-700 mb-2">Product of Interest*</p>
              <div className="flex flex-wrap gap-2">
                {["Basmati Rice", "Non-Basmati Rice", "Pesticide Free Rice"].map((product) => (
                  <label key={product} className="flex items-center gap-2">
                    <input type="checkbox" value={product} onChange={handleCheckboxChange} checked={formData.productOfInterest.includes(product)} />
                    <span>{product}</span>
                  </label>
                ))}
              </div>
            </div>

            <input type="text" name="orderQuantity" value={formData.orderQuantity} onChange={handleChange} placeholder="Order Quantity*" className="w-full p-2 border rounded-lg" required />
            <input type="text" name="yourBrand" value={formData.yourBrand} onChange={handleChange} placeholder="Your Brand" className="w-full p-2 border rounded-lg" />
            <textarea name="packagingDetails" value={formData.packagingDetails} onChange={handleChange} rows="3" placeholder="Packaging Details*" className="w-full p-2 border rounded-lg" required></textarea>
            <input type="text" name="destinationPort" value={formData.destinationPort} onChange={handleChange} placeholder="Destination Port*" className="w-full p-2 border rounded-lg" required />
            <textarea name="inquiry" value={formData.inquiry} onChange={handleChange} rows="4" placeholder="Additional Inquiry*" className="w-full p-2 border rounded-lg" required></textarea>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition" disabled={loading}>
              {loading ? "Submitting..." : "Submit Inquiry"}
            </button>
          </form>
        </div>

      <div className="overflow-hidden rounded-lg shadow-lg hidden sm:block">
  <img src={img.factory} alt="Factory" className="w-full h-auto object-cover" />
</div>
      </div>
    </div>
  );
};

export default InquiryForm;
