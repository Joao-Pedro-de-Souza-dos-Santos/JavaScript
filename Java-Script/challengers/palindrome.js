function chekPalindrome(text){
    let normalText = text;
    let reverseText = text.split("").reverse().join("");
    return  normalText == reverseText;
}

let text = prompt("Digite um palíndromo meu mestre");
const isPalindrome = chekPalindrome(text);
isPalindrome? alert("É sim meu rei") : alert("É não meu nobre");
