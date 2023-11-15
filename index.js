// index.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Use middleware to parse JSON in request body
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle POST request for login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Perform simple authentication (replace this with your actual logic)
  if (username === 'arun' && password === '123') {
    res.status(200).json({ success: true, redirect: '/dashboard' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
