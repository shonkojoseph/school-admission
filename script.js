document.getElementById('admission-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Gather form data
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const grade = document.getElementById('grade').value;
    
    // Simple validation (could be expanded)
    if (name && dob && address && phone && grade) {
        // Display a confirmation message
        document.getElementById('message').textContent = `Thank you, ${name}! Your application for grade ${grade} has been received.`;
        document.getElementById('admission-form').reset(); // Optionally reset the form
    } else {
        document.getElementById('message').textContent = 'Please fill out all fields.';
    }
});
