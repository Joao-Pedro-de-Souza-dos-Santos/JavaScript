const num = [7,5,99,2];
console.log(num);
console.log(...num);
console.log(Math.max(...num));

//destruture 👇
const array = ["x","y","z"];
const [c1, c2, c3] = array;
console.table(`${array} ${c1} ${c2} ${c3}`);