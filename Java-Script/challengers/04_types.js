let n1 = 3;
let n2 = 5;

// Binary

console.log(n1 + n2);
console.log("Number " + n1);
console.log(2 + 3);

// Unary

console.log(++n1);
console.log(n1++);

// Ternary

let test = 5;
console.log(test > 4? test = 9 : "verdadeiro");
let n3 = 10;
console.log(n3 != 2? ++n3 : --n3);

// Truthy Falsy

//Trytht              Falsy
//1, 1.5, -1          0
//" ", "0", "false"   ""
//{}                  null
//[]                  undefined

console.log(0? "true" : "false");
console.log(test);