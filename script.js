function submitForm(event) {
    // Disable the submit button to prevent multiple clicks during submission
    document.getElementById('submitBtn').disabled = true;

    var form = document.getElementById("contactForm");

    // Check if all required fields are filled and email is valid
    if (validateForm(form)) {
        // Clear any previous validation messages
        clearValidationMessages();

        var formData = new FormData(form);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://devdock.work.gd/submit_form", true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                // Re-enable the submit button after the request is completed
                document.getElementById('submitBtn').disabled = false;

                if (xhr.status == 200) {
                    var response = JSON.parse(xhr.responseText);
                    if (response.success) {
                        document.querySelector('.sent-message').style.display = 'block';
                        document.querySelector('.error-message').style.display = 'none';

                        // Disable the submit button after a successful submission
                        document.getElementById('submitBtn').disabled = true;
                    } else {
                        document.querySelector('.error-message').innerHTML = response.message;
                        document.querySelector('.error-message').style.display = 'block';
                        document.querySelector('.sent-message').style.display = 'none';
                    }
                } else {
                    // Server error or request failed
                    document.querySelector('.error-message').innerHTML = 'An error occurred. Please try again later.';
                    document.querySelector('.error-message').style.display = 'block';
                    document.querySelector('.sent-message').style.display = 'none';
                }
            }
        };

        // Prevent the default form submission
        event.preventDefault();

        // Send the form data
        xhr.send(formData);
    } else {
        // Re-enable the submit button if validation fails
        document.getElementById('submitBtn').disabled = false;

        // Prevent the default form submission if validation fails
        event.preventDefault();
    }
}

function validateForm(form) {
    // Get all form elements
    var elements = form.elements;

    // Loop through each element and check if it's not empty and email is valid
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        
        // Skip non-input elements
        if (element.tagName.toLowerCase() !== 'input') {
            continue;
        }

        // Check if it's a required field and is empty
        if (element.required && element.value.trim() === '') {
            alert('Please fill in all required fields.');
            return false;
        }

        // Check if it's an email field and the email is valid
        if (element.type.toLowerCase() === 'email' && !isValidEmail(element.value)) {
            alert('Please enter a valid email address.');
            return false;
        }
    }

    // All required fields are filled and emails are valid
    return true;
}

function isValidEmail(email) {
    // Email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function clearValidationMessages() {
    // Clear any previous validation messages
    document.querySelector('.error-message').style.display = 'none';
    document.querySelector('.sent-message').style.display = 'none';
}

