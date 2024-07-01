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

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('register-button')) {
        const rideId = event.target.getAttribute('data-ride-id');
        registerForTrip(rideId);
    }
});