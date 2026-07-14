// Fonction calcul qui reçoit deux nombres et une fonction callback
function calcul(a, b, callback) {
    return callback(a, b);
}
// Fonction d'addition
function addition(x, y) {
    return x + y;
}
// Fonction de multiplication
function multiplication(x, y) {
    return x * y;
}
// Test
function testerCalcul() {
    let nombre1 = Number(prompt("Entrez le premier nombre :"));
    let nombre2 = Number(prompt("Entrez le deuxième nombre :"));

    let somme = calcul(nombre1, nombre2, addition);
    let produit = calcul(nombre1, nombre2, multiplication);
    alert(
        "Somme : " + somme +
        "\nProduit : " + produit
    );
}