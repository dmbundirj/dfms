// ==========================================
// DFMS 2.0 - App.js
// Version 0.1.0
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // Show / Hide Password
    const togglePassword = document.getElementById("togglePassword");
    const password = document.getElementById("password");

    if (togglePassword && password) {
        togglePassword.addEventListener("click", () => {

            const type = password.getAttribute("type") === "password"
                ? "text"
                : "password";

            password.setAttribute("type", type);

            const icon = togglePassword.querySelector("i");

            if (type === "password") {
                icon.classList.remove("bi-eye-slash");
                icon.classList.add("bi-eye");
            } else {
                icon.classList.remove("bi-eye");
                icon.classList.add("bi-eye-slash");
            }

        });
    }

    // Login Form
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const email = document.getElementById("email").value.trim();
            const pass = document.getElementById("password").value.trim();

            if (!email || !pass) {

                alert("Please enter Email and Password");

                return;

            }

            alert("Login module ready. Firebase authentication will be added next.");

        });

    }

});
