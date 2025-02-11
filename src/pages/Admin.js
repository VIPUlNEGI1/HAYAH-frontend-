import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

const API_BASE_URL = "http://localhost:5000/api"; // Store base URL here

const AdminPage = () => {
  const [inquiries, setInquiries] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(""); // Reset error message
  
      try {
        console.log("🔄 Fetching inquiries...");
        const inquiryRes = await fetch(`${API_BASE_URL}/inquiry`); // ✅ Corrected API Route

        if (!inquiryRes.ok) {
          throw new Error(`Failed to fetch inquiries: ${inquiryRes.status} ${inquiryRes.statusText}`);
        }

        console.log("🔄 Fetching contacts...");
        const contactRes = await fetch(`${API_BASE_URL}/contact`); // ✅ Corrected API Route

        if (!contactRes.ok) {
          throw new Error(`Failed to fetch contacts: ${contactRes.status} ${contactRes.statusText}`);
        }

        const inquiriesData = await inquiryRes.json();
        const contactsData = await contactRes.json();

        console.log("✅ Inquiries Data:", inquiriesData);
        console.log("✅ Contacts Data:", contactsData);

        setInquiries(inquiriesData);
        setContacts(contactsData);
      } catch (err) {
        console.error("❌ Error fetching data:", err);
        setError(`Failed to load data: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const downloadExcel = () => {
    const workbook = XLSX.utils.book_new();
    const inquirySheet = XLSX.utils.json_to_sheet(inquiries);
    XLSX.utils.book_append_sheet(workbook, inquirySheet, "Inquiries");

    const contactSheet = XLSX.utils.json_to_sheet(contacts);
    XLSX.utils.book_append_sheet(workbook, contactSheet, "Contacts");

    XLSX.writeFile(workbook, "FormSubmissions.xlsx");
  };

  return (
    <div className="p-6 mt-28 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <button onClick={downloadExcel} className="mb-4 bg-green-600 text-white px-4 py-2 rounded">
        Download Excel
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <h2 className="text-lg font-semibold">Inquiries</h2>
          {inquiries.length > 0 ? (
            <pre className="bg-white p-4 rounded">{JSON.stringify(inquiries, null, 2)}</pre>
          ) : (
            <p className="text-gray-600">No inquiries found.</p>
          )}

          <h2 className="text-lg font-semibold mt-6">Contacts</h2>
          {contacts.length > 0 ? (
            <pre className="bg-white p-4 rounded">{JSON.stringify(contacts, null, 2)}</pre>
          ) : (
            <p className="text-gray-600">No contacts found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default AdminPage;
