// backend/controllers/contactController.js

const Contact = require('../models/Contact');

exports.submitContact = async (req, res) => {
  try {
    console.log("✅ Contact form received:", req.body); // Debug log

    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    console.log("✅ Contact saved to DB:", newContact);

    res.status(200).json({ success: true, message: 'Message received!' });
  } catch (err) {
    console.error('❌ Error saving contact:', err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};
