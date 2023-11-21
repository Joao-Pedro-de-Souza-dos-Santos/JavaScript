const a = [2, 3, 5, 7];
function showArray(a, ...items){
    console.log(a);
    console.log(items);
}
showArray(a, "A", "B", "C");