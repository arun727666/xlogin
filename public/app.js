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
      .then(response => {
        console.log('Full response:', response);
        return response.text();
      })
      .then(data => {
        console.log('Response content:', data);

        try {
          const jsonData = JSON.parse(data);
          if (jsonData.success) {
            alert('Login successful!');
            // Redirect to the specified URL
            window.location.href = jsonData.redirect;
          } else {
            alert(`Login failed: ${jsonData.message}`);
          }
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
});
