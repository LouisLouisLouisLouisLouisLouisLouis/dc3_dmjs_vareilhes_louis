function supprimeDoublon(nombres) {

    const valeurs = [];

    for (let i = 0; i < nombres.length; i++) {

        if (valeurs.indexOf(nombres[i]) === -1) {
            valeurs.push(nombres[i]);
        }
    }
    return valeurs;
}


const values = [64, 85, 64, 32];

console.log(supprimeDoublon(values));