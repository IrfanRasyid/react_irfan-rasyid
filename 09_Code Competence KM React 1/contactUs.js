function submitForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var alertMessage = "Username: " + username + "\nEmail: " + email + "\nMessage: " + message;
    alert(alertMessage);

    // Mengosongkan formulir setelah menampilkan alert
    document.getElementById('contactForm').reset();
}