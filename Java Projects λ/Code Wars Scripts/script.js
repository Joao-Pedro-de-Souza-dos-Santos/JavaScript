let s = prompt("Digite o fi de rapariga logo");
let st = s.split("");
function substituirCaracteres(st) {
    let result = '';
    for (let i = 0; i < st.length; i++) {
        if (st.indexOf(st[i]) !== st.lastIndexOf(st[i])) {
            result += '(';
        } else {
            result += ')';
        }
    }
    return result;
}
console.log(substituirCaracteres(st));