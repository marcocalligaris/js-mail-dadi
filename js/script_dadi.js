// * Gioco dei dadi
// * Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// * Stabilisci il vincitore, in base a chi fa il punteggio più alto e stampa  in console il risultato (ossia se ha vinto il computer o il player)


const playerNumber = [1, 2, 3, 4, 5, 6];
const systemNumber = [1, 2, 3, 4, 5, 6];

const dice1 = Math.floor(Math.random() * playerNumber.length) + 1;

const dice2 = Math.floor(Math.random() * systemNumber.length) + 1;


console.log(dice1, dice2);
 
if(dice1 > dice2) {
    console.log('Hai vinto!')
} else if (dice1 === dice2) {
    console.log('Siamo pari! Lancia nuovamente il dado')
} else {
    console.log('Hai perso. Ritenta, sari più fortunato!')
}
