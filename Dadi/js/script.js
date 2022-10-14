/*
generare un numero casuale per pc e per user 

chi fa il punteggio piu alto vince

*/


let max = 6;
let min = 1;

let utente;
let pc ;

let risultato= document.getElementById('risultato');

let btn = document.getElementById('click');


btn.addEventListener('click', function() {


 utente = Math.floor(Math.random() * (max - min +1) + min);


 pc = Math.floor(Math.random() * (max - min +1) + min);


  console.log(utente);

  console.log(pc);

  if (utente > pc) {

   document.getElementById('risultato-user').innerHTML= `
   
   Il numero che ti è uscito è ${utente}

   `;


   document.getElementById('risultato-pc').innerHTML= `

    Il numero che è uscito al tuo pc è ${pc}

   `

   risultato.innerHTML= "Complimenti Hai Vinto!!!"

    
  }else if (utente < pc ) {

    document.getElementById('risultato-user').innerHTML= `
   
    Il numero che ti è uscito è ${utente}
 
    `;
 
 
    document.getElementById('risultato-pc').innerHTML= `
 
     Il numero che è uscito al tuo pc è ${pc}
 
    `
 
    risultato.innerHTML= "Oh No Hai Perso..."


  }else{

    document.getElementById('risultato-user').innerHTML= `
   
    Il numero che ti è uscito è ${utente}
 
    `;
 
 
    document.getElementById('risultato-pc').innerHTML= `
 
     Il numero che è uscito al tuo pc è ${pc}
 
    `
 
    risultato.innerHTML= "Incredibile è un pareggio si vede che passi tanto tempo sul tuo Pc!"
    
  }

})