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
let seconds = 3;

let time = setInterval(function(){
    countdown("seconds",seconds);

    if(seconds == 0){
        clearInterval(time);
        // chiedo cinque volte i numeri all'utente
        for(let i = 0; i < arrayNumbers.length; i++){
            let numberPlayer = parseInt(prompt("Inserisci i numeri visti precedentemente"));
            if((numberPlayer!=NaN)||(numberPlayer.length>0)){
                arrayPlayer.push(numberPlayer);
            }else{
                numberPlayer = parseInt(prompt("Non è un numero reiseriscilo correttamente "));
            }   
        }
    }else{
        seconds--;
    }
    
}, 1000);

    
if(arrayPlayer.length == arrayNumbers.length){
    // creo un array dove inserire i numeri indovinati
    let numbersGuessed = [];

    // controllo se negli array dei numeri casuali e i numeri scelti dall'utente combacino in tal caso inserirli nell'array dei numeri indovinati
    for(let i = 0; i < arrayNumbers.length; i++){
        if(arrayNumbers[i] === arrayPlayer[i]){
        numbersGuessed.push(arrayPlayer[i]);
        }
    }

    let num = alert("Quanti numeri hai indovinato: "+ numbersGuessed.length +"  I numeri sono: "+ numbersGuessed);

}



function countdown(id , aggiornamento){
    document.getElementById(id).innerHTML = aggiornamento;
}

console.log(arrayNumbers);
console.log(arrayPlayer);
