function valeurIdentique(tableau) {

    for (let i = 0; i < tableau.length; i++) {

        for (let j = i + 1; j < tableau.length; j++) {

            if (tableau[i] === tableau[j]) {

                return true;
            }
        }
    }
    return false;
}

let valeurs = [57, 5, 13, 78, 4];

console.log(valeurIdentique(valeurs));