// CHIEDO ALL'UTENTE UN NUMERO DI 4 CIFRE
var numero = prompt("Inserisci un numero di 4 cifre:");

console.log(numero);
// SELEZIONO I SINGOLI CARATTERI DELLA STRINGA DATA E LI TRASFORMO IN NUMERI INTERI

var first = parseInt(numero.charAt(0));
var second = parseInt(numero.charAt(1));
var third = parseInt(numero.charAt(2));
var fourth = parseInt(numero.charAt(3));

// SOMMO LE CIFRE OTTENUTE E STAMPO LA SOMMA
var somma = first + second + third + fourth;
console.log(somma);
