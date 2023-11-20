/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
*/



const distance = parseInt(prompt("Inserisci il la distanza (in KM) che devi percorrere"));

const passengerAge = parseInt(prompt("Inserisci la tua eta'"));

let ticketPrice = parseFloat(distance * 0.21);


if ( passengerAge < 18 ){

    const juniorSale = 0.80 ;
    ticketPrice = ticketPrice * juniorSale;

} else if ( passengerAge > 65){

    const elderSale = 0.60;
    ticketPrice = ticketPrice * elderSale;

}

document.getElementById("tot-prezzo").innerHTML = "Il costo del tuo biglietto e' di: " + ticketPrice + " euro"

