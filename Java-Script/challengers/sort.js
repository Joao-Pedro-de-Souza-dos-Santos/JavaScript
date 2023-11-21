// const list = [2, 3 , 5, 9, 1, 10, 8, 40, 1, 4];
// const list2 = [2, 3 , 5, 9, 1, 10, 8, 40, 1, 4];

// let listOrd = list.sort((a, b) => {
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
// });

// let listOrd = list.sort((a, b) => a - b);
// let listDesord = list2.sort((a, b) => b - a);

// console.log(listOrd.join(" - "));
// console.log(listDesord.join(" - "));
// console.log(list.join(" - "));

const friends = ["Duds", "Erick", "JP", "Lu", "Odilon", "Marcão", "Manel", "Kauan", "Isa"];

let friendsOrd = friends.sort((a, b) => {
    a = a.toUpperCase();
    b = b.toUpperCase();
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(friendsOrd);

let friendsOrd1 = friends.sort((a, b) => a.localeCompare(b));
let friendsOrd2 = friends.sort((a, b) => a.localeCompare(b));

console.log(friendsOrd1);
console.log(friendsOrd2);