const students = [
    { id: 1, name: "João", average: 6, birth: 2005 },
    { id: 2, name: "Thiago", average: 6, birth: 2002 },
    { id: 3, name: "Jonas", average: 5, birth: 1998 },
    { id: 4, name: "Rosa", average: 9, birth: 2004 },
    { id: 5, name: "Amanda", average: 8, birth: 1992 },
    { id: 6, name: "Pedro", average: 7, birth: 1998 },
    { id: 6, name: "Flavin do Pneu", average: 7, birth: 2009 },
  ];

console.log(students.find((value) => {
    return value.id === 6;
  }));

console.log(students.find((value) => {
    return value.name === "Rosa";
  }));

console.log(students.find((value) => {
    return value.birth === 2005 || value.name === "Pedro";
  }));

console.table(students.filter(value => value.id >= 4));

//Pega a visão menó 👇😈👇 //
console.table(students.filter(value => (new Date().getFullYear()) - value.birth < 18));