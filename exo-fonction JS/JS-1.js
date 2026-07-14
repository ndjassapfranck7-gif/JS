//fonction somme
function fsomme(a,b){
    return a + b;
}
//fonction recuperation
function somme(){
    let a=Number(document.getElementById("a").value);
    let b=Number(document.getElementById("b").value);
    resultat=fsomme(a,b);
    document.getElementById("resultat").textContent="Le resultat est :"+ resultat;
}
