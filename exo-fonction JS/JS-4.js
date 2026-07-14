let carre = function(nombre) {
    return nombre * nombre;
};

function calculerCarre() {
    const input = document.getElementById("nombreInput");
    const resultElement = document.getElementById("resultat");
    const nombre = Number(input.value);

    if (isNaN(nombre)) {
        resultElement.textContent = "Veuillez entrer un nombre valide.";
        return;
    }

    const resultat = carre(nombre);
    resultElement.textContent = `Le carré de ${nombre} est ${resultat}.`;
}

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("calculerBtn");
    btn.addEventListener("click", calculerCarre);
});