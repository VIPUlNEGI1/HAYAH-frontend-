const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

// POST route to handle contact form submissions
router.post('/', async (req, res) => {
  const { fullName, email, phone, country, message } = req.body;

  try {
    const newContact = new Contact({ fullName, email, phone, country, message });
    await newContact.save();
    res.status(201).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to submit the form.' });
  }
});

module.exports = router;
