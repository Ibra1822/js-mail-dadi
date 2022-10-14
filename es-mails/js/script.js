/*  
Chiedi al utente la sua mail

Controllo lista - mail utente

se è combacia puo accedere 

se non combacia - negato accesso

*/ 


let listamail = ["mia@mail","franco@mail","giuseppe@mail","marco@mail",]

let email = prompt('Ineserisci la tua mail');

let isAttivo = false

let risultato = document.getElementById('attivo');

for(let i = 0; i < listamail.length; i++){

  if(listamail[i] === email ){
    
    isAttivo = true;
  }
}

if(isAttivo){
  risultato.innerHTML="Conferma avvenuta puoi accedere"
}else{
  risultato.innerHTML="Conferma non superata non puoi accedere"
}

