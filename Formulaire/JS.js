const formulaire = document.getElementById("nform");
const email = document.getElementById("email");
const message = document.getElementById("message");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

formulaire.addEventListener("submit", function (e) {
    if (!emailRegex.test(email.value.trim())) {
        e.preventDefault();
        message.textContent = "veuillez entre un email valide";
        message.style.color = "red";
    } else {
        message.textContent = "Email valide";
        message.style.color = "green";
    }
});