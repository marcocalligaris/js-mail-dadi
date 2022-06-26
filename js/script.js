// Mail
// Crea (inventa) una lista di inidirizzi mail autorizzati.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa in console un messaggio appropriato sull’esito del controllo. ("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è);

// * Creo l'array con gli indirizzi e-mail

const addresses = ["giovanni@gmail.com", "maria@hotmail.it", "samuele@yahoo.com", "pietro@gmail.com", "alessandra@libero.it"];
const userEmail = prompt('Scrivi qui il tuo indirizzo email.');


    if (addresses.indexOf(userEmail) > -1) {
        alert('Benvenuto!')
        console.log('Benvenuto!')
    } else {
        alert('Dati errati o utente non autorizzato.')
        console.log('Spiacenti')
    }

