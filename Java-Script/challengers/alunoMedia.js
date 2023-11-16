let nota = prompt("Enter the student's grade");
if (nota == "string") {
  nota = Number(nota.replace("," , "."));  
}
console.log(nota);
console.log(typeof(nota));
