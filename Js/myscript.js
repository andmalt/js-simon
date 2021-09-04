// funzione per creare randomicamente un numero da min a max
function getNumberInt(min , max){
    let numberRandomic = Math.floor(Math.random() * (max - min + 1) + min);
    return numberRandomic;
}


// array per inserire i cinque numeri casuali
let arrayNumbers = [];

// genero cinque numeri casuali da 1 a 100 e controllo che non ci siano doppioni
let i = 0;
while (arrayNumbers.length < 5){
    let numbersRandomic = getNumberInt(1,100);
    if(!arrayNumbers.includes(numbersRandomic)){
        arrayNumbers.push(numbersRandomic);
    }
    i++;
}
const numbers = alert("Numeri: "+ arrayNumbers);

// array di numeri scelti dall'utente
let arrayPlayer = [];

// inserisco un timer che dopo 30 secondi si attiva una funzione per inserire dei numeri
let seconds = 30;

let time = setInterval(function(){
    countdown("seconds",seconds);

    if(seconds == 0){
        clearInterval(time);

        let index = 0;
        // chiedo cinque volte i numeri all'utente
        while(arrayPlayer.length < arrayNumbers.length){
            let numberPlayer = parseInt(prompt("Inserisci i numeri visti precedentemente da 1 a 100"));
            
            if((numberPlayer > 0)&&( numberPlayer < 101)&&(!arrayPlayer.includes(numberPlayer))){
                arrayPlayer.push(numberPlayer);
                console.log(numberPlayer);
            }else {
                alert("Non è un numero oppure hai reinserito lo stesso numero ritenta");
            } 
            index++; 
        }

        // se la lunghezza dell'array del pc è uguale a quella del giocatore.....
        if(arrayPlayer.length == arrayNumbers.length){
            // creo un array dove inserire i numeri indovinati
            let numbersGuessed = [];


            // controllo se negli array dei numeri casuali e i numeri scelti dall'utente combacino in tal caso inserirli nell'array dei numeri indovinati
            for(let i= 0; i <= arrayNumbers.length; i++){
                if(arrayNumbers.includes(arrayPlayer[i])){
                numbersGuessed.push(arrayPlayer[i]);
                }
            }  
            
            alert("Quanti numeri hai indovinato: "+ numbersGuessed.length +"  I numeri sono: "+ numbersGuessed); 

            console.log("Numeri del pc "+ arrayNumbers);
            console.log("Numeri del giocatore " + arrayPlayer);
            console.log("Numeri indovinati "+numbersGuessed);
        } 
        
    }
    else {
        seconds--;
    }
    
}, 1000);



function countdown(id , aggiornamento){
    document.getElementById(id).innerHTML = aggiornamento;
}


