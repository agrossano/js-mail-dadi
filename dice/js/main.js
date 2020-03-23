// 2 Gioco dei dadi, chi fa di più vince.

// dichiaro variabili
var lancio1, lancio2, vincitore;

// randomizzo i numeri dei due lanci

alert ('Premi per lanciare i dadi')
lancio1 = Math.round(Math.random() * 5 + 1)
// stampo a video il valore del primo dado
document.getElementById('lancio-uno').innerHTML = 'Il tuo dado ha prodotto il valore ' + lancio1;
lancio2 = Math.round(Math.random() * 5 + 1)
// stampo a video il valore del secondo dado
document.getElementById('lancio-due').innerHTML = 'Il dado del computer ha prodotto il valore ' + lancio2;

// verifico quale dei due numeri è il maggiore
if (lancio1 > lancio2 ) {
  vincitore = 'Complimenti hai vinto!'
} else if (lancio1 < lancio2) {
  vincitore = 'Purtroppo il computer ha vinto. Ritenta!'
} else {
  vincitore = 'Pari!'
}

document.getElementById('winner').innerHTML = vincitore;
