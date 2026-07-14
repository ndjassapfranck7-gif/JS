// fonction qui calcule l'aire
function calculerAire(longueur, largeur) {
    return longueur * largeur;
}

// saisie des valeurs par l'utilisateur
let longueur = Number(prompt("Entrez une longueur :"));
let largeur = Number(prompt("Entrez une largeur :"));
let aire = calculerAire(longueur, largeur);
alert("L'aire est : " + aire);