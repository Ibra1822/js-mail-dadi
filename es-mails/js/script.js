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

  risultato.innerHTML="Conferma Mail Superata"

  document.querySelector('.container').style.display = "block";

}else{
  risultato.innerHTML="Siamo Spiacenti la sua Mail non ha superato il controllo per tanto non puo accedere e visualizzare le Mail "

  alert('Non puoi accdere la tua Mail è SBAGLIATA ')


}

