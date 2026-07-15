function sommeTableau(tableau) {
    let somme = 0;

    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }

    return somme;
}

console.log(sommeTableau([1, 2, 3, 4, 5])); // 15