// CHIEDO ALL'UTENTE IL PRIMO NUMERO
var parola1 = prompt("inserisci una parola").trim();

// CHIEDO ALL'UTENTE IL SECONDO NUMERO
var parola2 = prompt("inserisci una parola").trim();

// CONTROLLO QUALE DEI DUE NUMERI E' MAGGIORE E STAMPO IL MAGGIORE
if (parola1.length > parola2.length) {
  document.getElementById('parolamaggiore').innerHTML = parola2 + parola1;

} else {
    document.getElementById('parolamaggiore').innerHTML = parola1 + parola2;
}
