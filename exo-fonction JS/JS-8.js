function factorielle(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorielle(n - 1);
}

console.log(factorielle(5)); // 120