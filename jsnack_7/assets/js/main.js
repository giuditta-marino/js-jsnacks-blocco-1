// CREO UNA VARIABILE N E GLI ASSEGNO VALORE 2
var n = 2;

// CREO UNA VARIABILE POTENZA E GLI ASSEGNO VALORE DI PARTENZA 0
var potenza = 0;

// CALCOLO POTENZE DI 2 FINO A MILLE E STAMPO
for (var i = 0; potenza < 1000; i++) {
  var potenza = (n * 2);
  n = potenza;
  console.log(potenza);
}
