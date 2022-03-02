let arr1 = [];
let arrp = [];
let arrd = [];
let sum = 0;
let num = 0;
let result = document.getElementById("result");
let odd = document.getElementById("odd");
let even = document.getElementById("even");

while(sum < 200){
    num = parseInt(prompt("inserisci un numero"));
    arr1.push(num);
    sum += num;
}
console.log(sum);
console.log(arr1);

for(i = 0; i < arr1.length; i++){
    if(arr1[i] % 2 == 0){
        arrp.push(arr1[i]);
    }
    else{
        arrd.push(arr1[i]);
    }
}
console.log("numeri dispari " + arrd);
console.log("numeri pari " + arrp);

result.innerHTML = "La somma dei numeri inseriti ha superato 200, ecco tutti i numeri: " + arr1 + ";";
even.innerHTML = "i numeri pari inseriti sono: " + arrp;
odd.innerHTML = "i numeri dispari inseriti sono: " + arrd;