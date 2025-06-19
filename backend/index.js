const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route for contact form
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('📩 Contact form submission:', { name, email, message });
  res.json({ success: true, message: 'Contact message received!' });
});

// ✅ Route for registration form
app.post('/api/register', (req, res) => {
  const { name, email, password, phone } = req.body;
  console.log('📝 New user registered:', {
    Name: name,
    Email: email,
    Password: password,
    Phone: phone,
  });

  res.json({ success: true, message: 'User registered successfully!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
