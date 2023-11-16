let student = "Pedrin Rei Delas";
let age = 18;
let profission = "WebDeveloper";

console.log(student + "\n" + age + "\n" + profission);

console.log("");
console.log("________________________________________________");
console.log("");

let Diavolo = {
    nick: "Diavolo",
    age: 33,
    sexo: "Masculino",
    profission: "Chefe da Marfia",
    altura: 1.91,
    stand: "King Crinson",
    power1: () => "Salto Temporal",
    power2: () => "Epitaph"
};
    console.log(Diavolo.nick);
    console.log(Diavolo.age);
    console.log(Diavolo.sexo);
    console.log(Diavolo.profission);
    console.log(Diavolo.altura);
    console.log(Diavolo.stand);
    console.log(Diavolo.power1());
    console.log(Diavolo.power2());

console.log("");
console.log("________________________________________________");
console.log("");

//let Joestars = ["Jonathan","Joseph","Jotaro","Josuke","Giorno"];
//console.log(Joestars);
//console.log(typeof Joestars);
//console.log(Joestars[1]);
//console.log(Joestars[4]);
//console.log(Joestars.length);

//let Joestars = [
    //["Jolyne", "Stone Free"],
    //["Jonny", "Tusk Act 4"],
    //["Josuke", "Soft and Wet"]
//];
//console.log(Joestars);
//console.log(typeof Joestars);
//console.log(Joestars[0][0] + " " + Joestars[0][1]);
//console.log(Joestars[1][0] + " " + Joestars[1][1]);

let Joestars = [
    {Jojo: "Jolyne",Stand: "Stone Free"},
    {Jojo: "Jonny",Stand: "Tusk Act 4"},
    {Jojo: "Josuke",Stand: "Soft and Wet"}
];
console.log(Joestars);
console.log(Joestars[0].Jojo + " " + Joestars[0].Stand);










//var formulario = document.querySelector("button");

//Formulario.onclick = function () {
    //alert(student + "\n" + age + "\n" + profission);
    //alert("Rapaz ele ta sem zap");
//}

