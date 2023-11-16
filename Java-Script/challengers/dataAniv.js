const dateUser  = Date(prompt("Digite sua data de nascimento em yyyy-mm-dd"));
const dateNow = Date();
const userAge = Math.floor((dateNow - dateUser) / 1000 / 3600 / 24 / 365.25);
console.log(userAge);