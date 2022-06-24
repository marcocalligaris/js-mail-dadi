// Mail
// Crea (inventa) una lista di inidirizzi mail autorizzati.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa in console un messaggio appropriato sull’esito del controllo. ("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è);

// * Creo l'array con gli indirizzi e-mail

const addresses = ["giovanni@gmail.com", "maria@hotmail.it", "samuele@yahoo.com", "pietro@gmail.com", "alessandra@libero.it"];
console.log(addresses);

let email = prompt('Scrivi qui il tuo indirizzo email.');

for(let i = 0; i < addresses.length; i++) {
    if(email === (addresses[i])) {
        alert('Benvenuto!');
    } else {
        alert('Spiacenti');
    }
}



