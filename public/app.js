// public/app.js

document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform a POST request to the serverless function for authentication
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Login successful!');
          // Redirect to the specified URL
          window.location.href = data.redirect;
        } else {
          alert(`Login failed: ${data.message}`);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
});
