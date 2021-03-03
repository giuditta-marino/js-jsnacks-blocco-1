// CREO UN ARRAY CON I PRIMI 10 NUMERI
listaNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// CREO UNA VARIABILE TOTAL E LE ASSEGNO VALORE 0
var total = 0;

// SOMMO TRA DI LORO TUTTI I NUMERI DENTRO LA LISTA
for (var i = 0; i <listaNumeri.length; i++) {
  total += listaNumeri[i];
}

// STAMPO SOMMA
console.log(total);

// CALCOLO MEDIA NUMERI DENTRO LA LISTA
var avg = total / listaNumeri.length;

// STAMPO MEDIA
console.log(avg);
