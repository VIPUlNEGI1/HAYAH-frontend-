import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./conponents/Navbar";
import About from "./pages/About";
import Product from "./pages/Product";
import BulkOrderEnquiry from "./pages/BulkOrderEnquiry";
import ContactUs from "./pages/ContactUs";
import HomePage from "./conponents/HomePage";
import Footer from "./conponents/Footer";
import AdminPage from "./pages/Admin"; // Import the Admin Page
import BasmatiRice from "./conponents/Basmati";
const App = () => {
  return (
    <Router>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/bulk-order-enquiry" element={<BulkOrderEnquiry />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/admin" element={<AdminPage />} /> {/* Admin Page Route */}
          <Route path="/" element={<HomePage />} />
<Route path="/Basmiti" element={<BasmatiRice/>} /> 
  
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
