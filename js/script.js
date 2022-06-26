const addresses = ["giovanni@gmail.com", "maria@hotmail.it", "samuele@yahoo.com", "pietro@gmail.com", "alessandra@libero.it"];
const userEmail = prompt('Scrivi qui il tuo indirizzo email.');


    if (addresses.indexOf(userEmail) > -1) {
        alert('Benvenuto!')
        console.log('Benvenuto!')
    } else {
        alert('Dati errati o utente non autorizzato.')
        console.log('Dati errati o utente non autorizzato.')
    }

