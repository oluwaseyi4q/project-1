const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.querySelector('input[type="text"][placeholder="username"]');

    usernameInput.addEventListener('input', function (event) {
    const enteredUsername = event.target.value.trim();
    localStorage.setItem('username', enteredUsername);
    });
});