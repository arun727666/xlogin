// server/login.js

module.exports = async (req, res) => {
  const { username, password } = req.body;

  // Perform simple authentication (replace this with your actual logic)
  if (username === 'arun' && password === '123') {
    res.status(200).json({ success: true, redirect: '/dashboard' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
};
