function debitLove100() {
    // Get the email and transaction ID from the input fields
    const email = document.getElementById('email').value;
    const transaction = document.getElementById('transaction').value;

    // Validate the inputs
    if (!email || !transaction) {
        alert('Please fill in both Email ID and Transaction ID.');
        return;
    }

    // Prepare the payload
    const payload = {
        email: email,
        transaction: transaction
    };

    // Send the POST request to the API
    fetch('https://aditya-backend.vercel.app/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            // If the request is successful, show the thank you message
            document.getElementById('thankYou').style.display = 'block';
        } else {
            // Handle errors
            throw new Error('Failed to send email.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while processing your request. Please try again.');
    });
}

// Attach the function to the button's onclick event
document.querySelector('button').onclick = debitLove100;
