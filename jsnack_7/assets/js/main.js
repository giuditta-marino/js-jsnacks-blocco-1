// CREO UNA VARIABILE SOMMA E LE ASSEGNO VALORE 0
var somma = 0;

// CHIEDO ALL'UTENTE DI INSERIRE UN NUMERO PER 10 VOLTE E INCREMENTO PER OGNI ITERAZIONE LA VARIABILE SOMMA AGGIUNGENDOGLI NUMERO
for (var i = 0; i < 10; i++) {
  var numero = parseInt(prompt("Inserisci un numero"));
  somma = somma + numero;
}

// STAMPO LA SOMMA
document.getElementById('somma').innerHTML = somma;
