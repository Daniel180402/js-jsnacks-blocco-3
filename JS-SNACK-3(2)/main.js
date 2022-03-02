let random = 0;
const result = document.getElementById("result");

let num = parseInt(prompt("inserisci il numero di array da generare."))
while(isNaN(num)){
    num = parseInt(prompt("inserisci il numero di array da generare."))
}

if (num >= 150){
    num = 150;
}

for(i = 0; i < num; i++){
    const temparray = [];
    while ( temparray.length < 10){
        temparray.push(Math.floor(Math.random() * 4528) + 4);
    }
    console.log(temparray);
    result.innerHTML = "il numero di array generati è " + num;

}
