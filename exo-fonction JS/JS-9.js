function appliquerDeuxFois(fonction, valeur) {
    return fonction(fonction(valeur));
}

function doubler(x) {
    return x * 2;
}

console.log(appliquerDeuxFois(doubler, 5)); // 20