function saluer(prenom="Inconnu"){
    return `Bonjour ${prenom} !`;
}

document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("prenomInput");
    const btn = document.getElementById("saluerBtn");
    const message = document.getElementById("message");

    btn.addEventListener("click", function() {
        const prenom = input.value.trim() || undefined;
        message.textContent = saluer(prenom);
    });
});