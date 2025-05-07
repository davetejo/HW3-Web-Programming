document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    // Reset
    emailInput.classList.remove("error");
    passwordInput.classList.remove("error");
    emailError.classList.remove("visible");
    passwordError.classList.remove("visible");
    emailError.textContent = "";
    passwordError.textContent = "";

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    let hasError = false;

    if (emailValue === "") {
        emailInput.classList.add("error");
        emailError.textContent = "Please enter your Spotify username or email address.";
        emailError.classList.add("visible");
        hasError = true;
    }

    if (passwordValue === "") {
        passwordInput.classList.add("error");
        passwordError.textContent = "Please enter your password.";
        passwordError.classList.add("visible");
        hasError = true;
    }

    // If both are filled but there's still a problem (like fake login), show general error
    if (!hasError) {
        location.reload();
    }
});