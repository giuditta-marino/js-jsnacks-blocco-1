// CHIEDO ALL'UTENTE IL PRIMO NUMERO
var numero1 = parseInt(prompt("inserisci un numero"));

// CHIEDO ALL'UTENTE IL SECONDO NUMERO
var numero2 = parseInt(prompt("inserisci un numero"));

// CONTROLLO QUALE DEI DUE NUMERI E' MAGGIORE E STAMPO IL MAGGIORE
if (numero1 > numero2) {
  document.getElementById('numeromaggiore').innerHTML = 'Il numero maggiore è: ' + numero1;
} else {
    document.getElementById('numeromaggiore').innerHTML = 'Il numero maggiore è: ' + numero2;
}
