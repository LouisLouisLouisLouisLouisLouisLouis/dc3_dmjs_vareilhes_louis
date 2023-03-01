function inverseCaractere(caractere) {

    var entreeCaractere = "";

    for (var i = caractere.length - 1; i >= 0; i--) {
        entreeCaractere += caractere[i];
    }
    
    return entreeCaractere;
}
console.log(inverseCaractere('rida'));