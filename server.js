const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Dummy user data (replace this with a database in a real-world scenario)
const users = { 'DA': 'ArunDhaya', 'admin69': 'xnxx' };

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like HTML, CSS, JS)
app.use(express.static('public'));

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username in users && users[username] === password) {
        // Include the redirect URL in the response
        res.json({ success: true, redirect: 'https://drive.google.com/drive/folders/1UqM9j9jGXAUJ97rCJcQM_5gp3cPg-IbU?usp=sharing' });
    } else {
        res.json({ success: false, message: 'Invalid credentials' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
