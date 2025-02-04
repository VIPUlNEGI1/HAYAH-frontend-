import React, { useState } from 'react';
import { img } from '../assets copy/image';


const InquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+91',
    country: '',
    state: '',
    companyName: '',
    website: '',
    businessType: '',
    productOfInterest: [],
    orderQuantity: '',
    yourBrand: '',
    packagingDetails: '',
    destinationPort: '',
    inquiry: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
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
    setResponseMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage('Your inquiry has been submitted successfully!');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          countryCode: '+91',
          country: '',
          state: '',
          companyName: '',
          website: '',
          businessType: '',
          productOfInterest: [],
          orderQuantity: '',
          yourBrand: '',
          packagingDetails: '',
          destinationPort: '',
          inquiry: '',
        });
      } else {
        setResponseMessage('There was an error. Please try again.');
      }
    } catch (error) {
      setResponseMessage('Failed to submit inquiry. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" mt-36 min-h-screen bg-gradient-to-b from-[#f7f5f368] to-[#fbeed5] py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#4B4E6D] mb-4">Bulk Order Inquiry</h1>
        <p className="text-base text-gray-600">Let us know your requirements and we’ll get back to you shortly.</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Form Section */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-[#4B4E6D] mb-4">Submit Your Inquiry</h2>
          {responseMessage && <p className="text-center text-green-600 mb-4 font-semibold text-sm">{responseMessage}</p>}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Full Name*</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-2 border rounded-lg text-sm focus:ring-2 focus:ring-[#4B4E6D]" required />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Email*</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded-lg text-sm focus:ring-2 focus:ring-[#4B4E6D]" required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number*</label>
                <div className="flex items-center gap-2">
                  <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="p-2 border rounded-lg text-sm">
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded-lg text-sm focus:ring-2 focus:ring-[#4B4E6D]" required />
                </div>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Country*</label>
                <input type="text" name="country" value={formData.country} onChange={handleChange} className="w-full p-2 border rounded-lg text-sm focus:ring-2 focus:ring-[#4B4E6D]" required />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">State*</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} className="w-full p-2 border rounded-lg text-sm focus:ring-2 focus:ring-[#4B4E6D]" required />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Your Business Type*</label>
                <input type="text" name="businessType" value={formData.businessType} onChange={handleChange} className="w-full p-2 border rounded-lg text-sm focus:ring-2 focus:ring-[#4B4E6D]" required />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Product of Interest*</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" value="Basmati Rice" onChange={handleCheckboxChange} />
                    <span className="text-sm">Basmati Rice</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" value="Non-Basmati Rice" onChange={handleCheckboxChange} />
                    <span className="text-sm">Non-Basmati Rice</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" value="Pesticide Free Rice" onChange={handleCheckboxChange} />
                    <span className="text-sm">Pesticide Free Rice</span>
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Order Quantity*</label>
              <input type="text" name="orderQuantity" value={formData.orderQuantity} onChange={handleChange} className="w-full p-2 border rounded-lg text-sm focus:ring-2 focus:ring-[#4B4E6D]" required />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Packaging Details*</label>
              <textarea name="packagingDetails" value={formData.packagingDetails} onChange={handleChange} rows="3" className="w-full p-2 border rounded-lg text-sm focus:ring-2 focus:ring-[#4B4E6D]" required></textarea>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Destination Port*</label>
              <input type="text" name="destinationPort" value={formData.destinationPort} onChange={handleChange} className="w-full p-2 border rounded-lg text-sm focus:ring-2 focus:ring-[#4B4E6D]" required />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Inquiry*</label>
              <textarea name="inquiry" value={formData.inquiry} onChange={handleChange} rows="4" className="w-full p-2 border rounded-lg text-sm focus:ring-2 focus:ring-[#4B4E6D]" required></textarea>
            </div>
            <button type="submit" className="w-full bg-[#7f4d1d] text-white py-2 rounded-lg text-sm hover:bg-[#5f3a17] transition-all" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Inquiry'}
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img src={img.production} alt="Factory" className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
