// CHIEDO ALL'UTENTE LA PRIMA PAROLA
var parola1 = prompt("inserisci una parola").trim();

// CHIEDO ALL'UTENTE LA SECONDA PAROLA
var parola2 = prompt("inserisci una parola").trim();

// CONTROLLO QUALE DELLE DUE E' PIU' LUNGA E STAMPO INSIEME PRIMA LA PIU' CORTA E POI LA PIU' LUNGA
if (parola1.length > parola2.length) {
  document.getElementById('parolamaggiore').innerHTML = parola2 + parola1;

} else {
    document.getElementById('parolamaggiore').innerHTML = parola1 + parola2;
}
