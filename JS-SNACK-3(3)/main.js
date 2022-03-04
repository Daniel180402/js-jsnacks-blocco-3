
/**
 *
    Crea due tag div con due id diversi:
    un div avrà il testo colorato di rosso mentre l'altro di verde.
    Partendo da un array di numeri, creo una funzione che controlla se siano pari o dispari.
    Se sono pari li stampo nell'div "rosso",
    se sono dispari li stampo nell'div "verde".
 *
 */

let arrnum = [2,512,234,345,765,56,657,786,3,67,56,89,56,7,567,768,576,8697,567,87694,657];

const reddiv = document.getElementById("red");
const greendiv = document.getElementById("green");

for(let i = 0; i< arrnum.length; i++){
    if(iseven(arrnum[i])){
        console.log(arrnum[i] + " è un numero pari");
        reddiv.innerHTML += arrnum[i] + ", ";
    }
    else{
        console.log(arrnum[i] + " è un numero dispari");
        greendiv.innerHTML += arrnum[i] + ", ";
    }
}

// pari o dispari
function iseven(number){
    if(number % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}