function submitForm(event) {
    // Disable the submit button to prevent multiple clicks during submission
    document.getElementById('submitBtn').disabled = true;

    var form = document.getElementById("contactForm");
    var formData = new FormData(form);

    var xhr = new XMLHttpsRequest();
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
}
