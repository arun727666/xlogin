// index.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/', (req, res) => {
  // Simulate a simple authentication check
  const { username, password } = req.body;

  if (username === 'arun' && password === '123') {
    // Successful login
    res.json({ success: true, redirect: 'https://mail.google.com/' });
  } else {
    // Failed login
    res.json({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
