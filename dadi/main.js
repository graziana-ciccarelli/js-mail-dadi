//Generiamo il punteggio del giocatore (numero random tra 1 e 6)

let punteggioGiocatore = Math.floor(Math.random() * 6) + 1

//Generiamo il punteggio del computer (numero random tra 1 e 6)

let punteggioComputer =  Math.floor(Math.random() * 6) + 1


//Visualizzazione dei punteggi
console.log("Punteggio del giocatore: " + punteggioGiocatore);
console.log("Punteggio del computer: " + punteggioComputer);