const signupForm = document.getElementById("signup-form");


signupForm.addEventListener("submit", function (e) {
   e.preventDefault();


   // Get values from the signup form fields
   const newUsername = signupForm.querySelector("#new-username-field").value;
   const newPassword = signupForm.querySelector("#new-password-field").value;


   // Check if username already exists in localStorage
   if (localStorage.getItem(newUsername) !== null) {
       alert("Username already exists. Please choose a different username.");
       return;
   }


   // Store new username and password in localStorage
   localStorage.setItem(newUsername, newPassword);


   // Simulate signup success
   alert("Signup successful! You can now login.");


   // Redirect to the login page using window.location.href
   window.location.href = "login.html";
});
