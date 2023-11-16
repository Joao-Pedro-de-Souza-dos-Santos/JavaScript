let N = 2.90909083763633;
console.log(N);
console.log(parseInt(N*1.5));
console.log(N.toFixed(2).replace(".",","));
console.log(N.toLocaleString("pt-BR",{style: "currency", currency:"jpy"}));
console.log(Math.max(6,4,2,8,9,11,45,78,9));
console.log(Math.PI);
console.log(parseInt(Math.random()*100));
let test = true;
let cont = 0;
for (let i = 1 ; i <= 1000 ; i++) {
    if(parseInt((Math.random()))  == 0){
        cont++;
    }
}
console.log("achei " + cont + " zeros patrao");

