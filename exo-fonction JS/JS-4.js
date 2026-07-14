let carre=function(nombre){
    return nombre*nombre;
};
function calculerCarre(){
    let nombre= Number(prompt("entrer un nombre"));
    let resultat =carre(nombre);
    alert("le carre de" + nombre +"et le resultat"+ resultat);
}