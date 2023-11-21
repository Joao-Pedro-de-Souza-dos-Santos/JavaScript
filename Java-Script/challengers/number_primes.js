//let numQuantidade = Number(prompt("Digite quantos números deseja meu Mestre 🤠"));
//for (let i = 1; i <= numQuantidade; i++) {}
//let numPrim = Number(prompt("Digite o número primo a ser testado"));
//let contDiv = 1;
//let dividend = 1;
//let testePrim = false;
//while (contDiv <= 2) {  // Famoso testa PRIMOS
//  numPrim % dividend == 0? contDiv++ : "";
//  numPrim == dividend? testePrim = true : "";
//  dividend++;
//}

//let quantPrim = Number(prompt("Digite quantos números deseja meu Mestre 🤠"));
//let firstPrim = 2;
//verificador = false;
//for (let i = 1 ; i <= quantPrim ; i++) { 
//  
//  let dividendo = 1;
//  let contDivisor = 1;
//  let valorPrim = 0;
//  while (contDivisor <= 2 && verificador == false) { // Famoso caça PRIMOS
//    firstPrim % dividendo == 0? contDivisor++ : "";
//    firstPrim == dividendo? valorPrim = firstPrim : verificador = true;
//    dividendo++;
//  }
//  firstPrim++;
//  document.write(`${valorPrim} `);
//}

let quantPrim = Number(prompt("Digite quantos números deseja verificar:"));
let primosEncontrados = 0;
let numeroAtual = 2;

while (primosEncontrados < quantPrim) {
  let ehPrimo = true;

  for (let divisor = 2; divisor < numeroAtual; divisor++) {
    if (numeroAtual % divisor === 0){
      ehPrimo = false;
      break;
    }
  }

  if (ehPrimo) {
    document.write(`${numeroAtual} `);
    primosEncontrados++;
  }

  numeroAtual++;
}
//3 * 3 = 9

//2?
//2 / 1 = 0 y 
//2 / 2 = 0 y

//3? 
//3 / 1 = 0 y
//3 / 2 = 1 n
//3 / 3 = 0 y

//4?
//4 / 1 = 0 y
//4 / 2 = 0 y
//4 = 3 nope

//5?
//5 / 1 = 0 
//5 / 2 = 1 
//5 / 3 = 2
//5 / 4 = 1
//5 / 5 = 0 yes

//6?
//6 / 1 = 0
//6 / 2 = 0 break
//6 / =
//6 / =
//6 / =
//6 / =
