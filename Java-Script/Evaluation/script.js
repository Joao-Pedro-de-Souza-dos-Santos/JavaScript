// Avaliação JavaScript

// Questão 1 (Data Types):
// Declare as seguntes variáveis e atribua os valores por tipo: Sting, Number, Boolean, Function, Array, Object
console.log("FIRST QUETION");
let a = "P h i l o s o p h y";
let b = (1 + Math.sqrt(5))/2;
let c = true;
let d = (x, y, z) => x * y * z;
let e = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
let f = new Object();
 f.x = "Da Vince";
 f.y = "Michelangelo";
 f.z = "Donatelo";
let master = [typeof(a), typeof(b), typeof(c), typeof(d), typeof(e), typeof(f)];
console.table(master);


console.log("____________________________________");
// Questão 2 (Operators):
// Imprima as operações de soma, subtração, multiplicação, divisão, resto da divisão e potenciação de 12 e 3 e raiz quadrada de 144;
console.log("SECOND QUESTION");
let soma = 1 + 10 + 100;
let subtração = 100 - 10 - 1;
let multiplicação = 23 * 32;
let divisão = 81/9;
let restoDaDivisão = 121 % 10;
let potenciação = Math.pow(12,3);
let raizQuadrada = Math.sqrt(144);
let master2 = [soma, subtração, multiplicação, divisão, restoDaDivisão, potenciação, raizQuadrada];
console.table(master2);

console.log("____________________________________");
// Questão 3 (Functions):
// Crie e execute uma função de nome 'test" que retorne "JavaScript" concatenado com um valor passado como argumento e imprima seu retorno.
console.log("THIRD QUESTION");
let valor = "Art is programming";
let test = (valor) => {valor = (valor + " JavaScipt"); return valor};
console.log(test(valor));

console.log("____________________________________");
// Questão 4 (Data Manipulation):
// Usando os métodos FIFO e LIFO, crie um array com 3 valores e posteriormente insira mais um valor no final, em seguida substitua o do início por outro.
console.log("FOURTH QUESTION");
let physic = ["Mechanic","Optic","Relativy","Quantum Phisic"]; 
let FIFO = (physic) => {physic.push("Eletromagnetism"); return physic;};
let LIFO = (physic) => {physic.shift(); physic.unshift("Termodinamic"); return physic;};
console.table(FIFO(LIFO(physic)));

console.log("____________________________________");
// Questão 5 (for):
// Liste todos os valores do array criado na questão anterior ultilizando o for.
console.log("FIFTH QUESTION");
for (let index = 0 ; index < physic.length ; index++) {
    console.log(physic[index]);
}

console.log("____________________________________");
// Questão 6 (while):
// Escreva os números de 0 a 500 sem os que pertencem à familía do 200 e do 300:
console.log("SIXTH QUESTION");
let num = 0;
while (num <= 500) {
    (num > 199 && num < 400)? "" : console.log(num);
    num++;
}

console.log("____________________________________");
// Questão 7 (if):
// Crie uma lógica para verificar se o motorista foi multado
// A infração pode ser por velocidade alta (quando ultrapassar a máxima)
// E por velocidade baixa ( quando estiver inferior à metade da máxima )
// A velocidade da pista é de 60km/h
const velocity = 20;
const maxVelocity = 60;
if (velocity > maxVelocity) {console.log("Meu fi é sonique pa ta ligero assim😡?")}
else if(velocity < maxVelocity/2) {console.log("Bora meu fi avia q to com pressa🏃‍♂️")}
else {console.log("Ai que deliciAAAAAAAAAAAAAAAAAAAA😋")}

console.log("____________________________________");
// Questão 8 (array methods):
// Uma empresa vai dar 10% de aumento para seus funcionários
// Abaixo tem a lista com todos os salários atuais de cada um deles
// Apresente os novos salários e o novo total em folha dessa empresa
// const salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000];
const salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000];
const newSalary = salary.map((value) => {return ((value/10) + value)});
console.log("Os sálarios anteriores eram: \n");
console.table(salary);
console.log("E após o aumento ficarão:");
console.table(newSalary);
console.log(`Total Anterior: ${salary.reduce((a, b) => {return a + b})}`);
console.log(`Novo Total: ${newSalary.reduce((a, b) => {return a + b})}`);