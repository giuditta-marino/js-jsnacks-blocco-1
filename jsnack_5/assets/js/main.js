// CREO UN ARRAY VUOTO
var listaNumeri = [];


// CHIEDO PER 6 VOLTE ALL'UTENTE DI INSERIRE UN NUMERO, POI CONTROLLO CHE IL NUMERO SIA DISPARI E SE LO E' LO INSERISCO NELL'ARRAY
for (var i = 0; i < 6; i++) {
  var numero = prompt ("Inserisci un numero");
    if (numero%2) {
    listaNumeri.push(numero);
    }
  }

// STAMPO LISTA
document.getElementById("lista").innerHTML = listaNumeri;
