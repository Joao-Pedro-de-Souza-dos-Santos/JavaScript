const incomes = ["salary", "R$ 2000,00", "commission", "R$ 825,45", "bônus", "R$ 320,00"];

const expenses = [
  "rent",
  "R$ 500,00",
  "energy",
  "R$ 325,55",
  "water",
  "R$ 120,34",
  "food",
  "R$ 1300,62",
];

const incomeValues = incomes.filter((value) => value.includes("R$ "));
const incomeValuesNumbers = incomeValues.map((value) => Number(value.replace("R$ ","").replace(",",".")));
const incomeValuesSum = incomeValuesNumbers.reduce((a, b) => a + b);

const expensesValues = expenses.filter((value) => value.includes("R$ "));
const expensesValuesNumbers = expensesValues.map((value) => Number(value.replace("R$ ","").replace(",",".")));
const expensesValuesSum = expensesValuesNumbers.reduce((a, b) => a + b);

console.log(incomeValues);
console.log(incomeValuesNumbers);
console.log(incomeValuesSum);
console.log(incomeValuesSum.toLocaleString("pt-BR",{
    style: "currency",
    currency: "brl"
}));
console.log(expensesValuesSum.toLocaleString("pt-BR",{
    style: "currency",
    currency: "brl"
}));

let situation;
if (incomeValuesSum > expensesValuesSum) {
    console.log("Saldo Positivo!");
} else if (incomeValuesSum == expensesValuesSum) {
    console.log("Sem saldo e Sem dívidas");
} else  if (incomeValuesSum < expensesValuesSum) {
    console.log("Saldo Negativo!");
}