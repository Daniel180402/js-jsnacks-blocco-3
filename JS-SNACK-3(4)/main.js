let x = parseInt(prompt("inserisci il primo numero"));
let y = parseInt(prompt("inserisci il secondo numero"));

console.log(x);
console.log(y);

function sumnum(x, y){
    sum =  x + y;
    if(sum % 2 === 0){
        console.log("è pari");
        return true;
    }
    else{
        console.log("è dispari");
        return false;
    }
}

console.log(sumnum(x, y));