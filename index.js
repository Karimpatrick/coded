// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form elements
    const nameInput = document.querySelector('#contact-form input[type="text"]');
    const emailInput = document.querySelector('#contact-form input[type="email"]');
    const messageInput = document.querySelector('#contact-form textarea');

    // Get input values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Validate input values
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Create an object to store form data
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Reset form
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';

    // For demonstration, let's log the form data to the console
    console.log(formData);

    // Optionally, you can send the form data to a server using AJAX or fetch
    // Example: fetch('submit_form.php', {
    //              method: 'POST',
    //              body: JSON.stringify(formData),
    //              headers: {
    //                  'Content-Type': 'application/json'
    //              }
    //          })
    //          .then(response => response.json())
    //          .then(data => console.log(data))
    //          .catch(error => console.error('Error:', error));
}

// Add event listener to the form for submit event
document.getElementById('contact-form').addEventListener('submit', handleFormSubmission);

