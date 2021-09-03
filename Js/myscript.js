// funzione per creare randomicamente un numero da min a max
function getNumberInt(min , max){
    let numberRandomic = Math.floor(Math.random() * (max - min + 1) - min);
    return numberRandomic;
}

// array per inserire i cinque numeri casuali
let arrayNumbers = [];

// genero cinque numeri casuali
for (let i = 0; i < 5; i++){
    arrayNumbers.push(getNumberInt(1,100));
}
const numbers = alert("Numeri: "+ arrayNumbers);

// array di numeri scelti dall'utente
let arrayPlayer = [];

// inserisco un timer che dopo 30 secondi si attiva una funzione per inserire dei numeri
setTimeout (function (){

  // chiedo cinque volte i numeri all'utente
  for(let i = 0; i < 5; i++){
    let numberPlayer = parseInt(prompt("Inserisci i numeri visti precedentemente"));
    arrayPlayer.push(numberPlayer);
    }    
},3000);





console.log(arrayNumbers);
console.log(arrayPlayer);