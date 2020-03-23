// 1 Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;

// dichiaro variabili
var listaMail, mailFornita, check, msg;

// creo array con email
listaMail = ['huangbo@chan.com','nansen@killscat.com', 'not@enlightened.io','zhaozhou@void.net']

// chiedo all'utente il suo indirizzo email
mailFornita = prompt('Qual è la tua mail?')

// SOLUZIONE CON VERIFICA ESTERNA AL CICLO

// assegno il valore false al check di controllo
check = false;

// verifico che l'email fornita sia presente all'interno dell'array
for (i = 0; i < listaMail.length; i++) {
  if (mailFornita === listaMail[i]) {
    // assegno il valore true alla variabile check
    check = true;
 }
}

// se il check ritorna true consento l'accesso, altrimenti lo nego
if (check) {
  msg = 'La mail è presente nella lista. Accesso consentito.';
} else {
  msg = 'La tua mail non è presente nella lista. Accesso non consentito';
}

document.getElementById('mail-check').innerHTML = msg;


/*
** SOLUZIONE CON VERIFICA INTERNA AL CICLO
** verifico che l'email fornita sia presente all'interno dell'array
*
** for (i = 0; i < listaMail.length; i++) {
**   console.log(listaMail[i]);
**   if (mailFornita === listaMail[i]) {
**     msg = 'La tua mail è presente. Accesso consentito.';
**     break;
**   } else if (mailFornita !== listaMail[i]) {
**     msg = 'La tua mail non è presente. Accesso non consentito.';
**   }
** }
*/
