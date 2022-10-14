/*
generare un numero casuale per pc e per user 

chi fa il punteggio piu alto vince

*/


let max = 6;
let min = 1;

let utente;
let pc ;


let btn = document.getElementById('click');


btn.addEventListener('click', function() {


 utente = Math.floor(Math.random() * (max - min +1) + min);


 pc = Math.floor(Math.random() * (max - min +1) + min);


  console.log(utente);

  console.log(pc);
  
  if (utente > pc) {

    console.log('vince utente')
    
  }else if (utente < pc ) {

    console.log('vince pc')

  }else{

    console.log('pareggio')
  }








})