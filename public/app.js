document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Perform a POST request to the server for authentication
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `username=${username}&password=${password}`,
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Login successful!');
                    // Redirect to the URL provided in the server response
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
