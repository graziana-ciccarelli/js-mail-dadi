//Lista email invitati

const invitati = [
    "marco.rossi@gmail.com",
    "mario.verdi@gmail.com",
    "chiara.bianchi@gmail.com",
    "sara.neri@gmail.com"
];

//Chiedere l'email all'utente

const emailUtente = prompt("Inserisci la tua email");

//Variabile per verificare se la email è stata trovata

let emailTrovata = false;

//Controllare se l'email è nella lista degli invitati

for (let i = 0; i < invitati.length; i++){
    if (invitati[i] === emailUtente){
        emailTrovata = true;
    }
}


//Stampa un messaggio appropriato

if (emailTrovata){
    console.log("Sei stato invitato!");
   
} else {
    console.log("Mi dispiace, non sei nella lista degli invitati.");
}