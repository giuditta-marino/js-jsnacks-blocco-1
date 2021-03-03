// CHIEDO ALL'UTENTE UN NUMERO DI 4 CIFRE
var numero = prompt("Inserisci un numero di 4 cifre:");

// CREO UNA VARIABILE SOMMA E LE ASSEGNO VALORE 0
var somma = 0;

// SOMMO LE CIFRE CHE COMPONGONO IL NUMERO
for(var i= 0; i < numero.length; i++) {
  somma += parseInt(numero.charAt(i));
}

// STAMPO LA SOMMA
console.log(somma);

// QUESTA ERA LA SOLUZIONE ESTESA:
// CHIEDO ALL'UTENTE UN NUMERO DI 4 CIFRE
// var numero = prompt("Inserisci un numero di 4 cifre:");
// // SELEZIONO I SINGOLI CARATTERI DELLA STRINGA DATA E LI TRASFORMO IN NUMERI INTERI
//
// var first = parseInt(numero.charAt(0));
// var second = parseInt(numero.charAt(1));
// var third = parseInt(numero.charAt(2));
// var fourth = parseInt(numero.charAt(3));
//
// // SOMMO LE CIFRE OTTENUTE E STAMPO LA SOMMA
// var somma = first + second + third + fourth;
// console.log(somma);
