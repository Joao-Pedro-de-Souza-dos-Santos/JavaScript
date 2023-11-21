let quantPrim = Number(prompt("Digite quantos números deseja verificar:"));
let primosEncontrados = 0;
let numeroAtual = 2;
let cont = 1;
while (primosEncontrados < quantPrim) {
  let ehPrimo = true;

  for (let divisor = 2; divisor < numeroAtual; divisor++) {
    if (numeroAtual % divisor === 0) {
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


 