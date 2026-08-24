// =====================================================
// CIVIC CONNECT
// Basic Frontend JavaScript
// =====================================================


// Wait until the HTML page has completely loaded
document.addEventListener("DOMContentLoaded", function () {


    // =================================================
    // LOGIN FORM
    // =================================================

    // =================================================
// SIGN UP FORM
// =================================================

const signupForm = document.getElementById("signupForm");


if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

        // Stop the normal form submission
        event.preventDefault();


        // Get the values entered by the user
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;


        // Check for empty fields
        if (
            name === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === ""
        ) {

            alert("Please fill in all the fields.");

            return;
        }


        // Check whether passwords match
        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }


        // Prototype sign-up
        alert("Account created successfully!");

        window.location.href = "home.html";

    });

}

    const loginForm = document.getElementById("loginForm");


    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            // Prevent the browser from refreshing the page
            event.preventDefault();


            // Get the values entered by the user
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;


            // Basic validation
            if (email === "" || password === "") {

                alert("Please enter your email and password.");

                return;
            }


            // Prototype login
            alert("Login successful! Welcome to Civic Connect.");

            window.location.href = "home.html";

        });

    }


});