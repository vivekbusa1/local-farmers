function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";

    if (username === "" || password === "") {
        errorMessage.textContent = "Please fill in all fields.";
        return false; 
    }

    if (username !== "admin" || password !== "admin") {
        errorMessage.textContent = "Invalid username or password.";
        return false;
    }

    alert("Login successful!");
    return true; 
}