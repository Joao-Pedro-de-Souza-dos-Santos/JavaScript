const url = "https://api.github.com/users/Joao-Pedro-de-Souza-dos-Santos";

console.log("i N i C i o");

const githubUser = fetch(url)
    .then((request) => request.json())
    .then(({ name, bio }) => console.log({name,bio,}))
    .catch((error) => console.error(error))
    .finally(() => alert("Requisição Encerrada"));

console.log(githubUser);

console.log("F i M");