function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";

    if (username.length < 3) {
        errorMessage.textContent = "Username must be at least 3 characters long.";
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return false;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long.";
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return false;
    }

    alert("Registration successful!");
    return true; 
}