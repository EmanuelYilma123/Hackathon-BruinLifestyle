const loginForm = document.getElementById("login-form");


loginForm.addEventListener("submit", function (e) {
   e.preventDefault();


   // Get values from the login form fields
   const loginUsername = loginForm.querySelector("#username-field").value;
   const loginPassword = loginForm.querySelector("#password-field").value;


   // Check if username exists in localStorage
   if (localStorage.getItem(loginUsername) === null) {
       displayErrorMessage("Invalid username");
       return;
   }


   // Check if password matches stored password
   if (localStorage.getItem(loginUsername) !== loginPassword) {
       displayErrorMessage("Invalid password");
       return;
   }


   // If login is successful, proceed to next steps (e.g., redirect to mainpage)
   alert("You have successfully logged in.");
   // Redirect or perform other actions here
   window.location.href = "mainpage.html";
});


function displayErrorMessage(message) {
   const loginErrorMsg = document.getElementById("login-error-msg");
   loginErrorMsg.textContent = message;
   loginErrorMsg.style.opacity = 1;
}
