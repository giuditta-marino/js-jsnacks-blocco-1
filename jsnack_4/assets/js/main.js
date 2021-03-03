// CREO LISTA CON NOMI INVITATI

var listaNomi = ["Gatsby", "John", "James", "Susan", "Jack", "Joseph", "Tom", "Margaret", "Isabel", "Frank", "Sally"];

// CHIEDO ALL'UTENTE IL SUO NOME

var nome = prompt("Inserisci il tuo nome:")

// CREO UNA VARIABILE FLAG E ASSEGNO VALORE false

var flag = false;

// SCORRO L'ARRAY E CONTROLLO SE IL NOME E' PRESENTE, IN TAL CASO ASSEGNO ALLA VARIABILE FLAG VALORE true

for (var i = 0; i < listaNomi.length; i++) {
  if (nome == listaNomi[i]){
    flag = true;
  }
}

// CONTROLLO LA VARIABILE FLAG E STAMPO IL RISULTATO
if (flag){
  document.getElementById("partecipazione").innerHTML = "Ciao " + nome + ", sei invitato alla festa!";
} else {
  document.getElementById("partecipazione").innerHTML = "Ciao " + nome + ", purtroppo non risulti nella lista degli invitati.";
}
