function registerForTrip(rideId) {
    // Make an API request to your Flask route for user registration
    // You can use the fetch API or any other AJAX library
    // Example using fetch:
    fetch('/register_trip', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rideId: rideId })
    })
    .then(response => response.json())
    .then(data => {
        // Handle success or error messages
        console.log(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function toggleMenu(x) {
    x.classList.toggle("change");
}

const loginLink = document.querySelector('a[href="#login"]');
loginLink.addEventListener('click', () => {{ url_for('login') }}
    // Redirect to the login page (replace with your actual login URL)
    window.location.href = 'login.html';
});

const loginLink = document.querySelector('a[href="#welcome"]');
loginLink.addEventListener('click', () => {{ url_for('welcome') }}
    // Redirect to the login page (replace with your actual login URL)
    window.location.href = 'welcome.html';
});

const loginLink = document.querySelector('a[href="#create_ad"]');
loginLink.addEventListener('click', () => {{ url_for('create_ad') }}
    // Redirect to the login page (replace with your actual login URL)
    window.location.href = 'create_ad.html';
});

const loginLink = document.querySelector('a[href="#search"]');
loginLink.addEventListener('click', () => {{ url_for('search') }}
    // Redirect to the login page (replace with your actual login URL)
    window.location.href = 'search.html';
});

const loginLink = document.querySelector('a[href="#register"]');
loginLink.addEventListener('click', () => {{ url_for('register') }}
    // Redirect to the login page (replace with your actual login URL)
    window.location.href = 'register.html';
});

const loginLink = document.querySelector('a[href="#about"]');
loginLink.addEventListener('click', () => {{ url_for('about') }}
    // Redirect to the login page (replace with your actual login URL)
    window.location.href = 'about.html';
});

document.getElementById("register-button").addEventListener("click", function() {
    // Perform the registration logic here
    // For example, show a registration form or send an API request to register the user
    // You can also redirect the user to a registration page using window.location.href
});

function doFunction() {
    // Your registration logic here
    // For example, show a registration form or send an API request
    // You can also redirect the user to a registration page using window.location.href
    alert("Button clicked!"); // Replace with your actual logic
}

function redirectToRegistration() {
    // Redirect to the registration page
    window.location.href = "{{ url_for('register') }}"; // Replace with your actual registration page URL
}