const cubo = [
    {x : 2, y : 3, z : 5},
    {x : 5, y : 4, z : 10},
    {x: 4, y : 12, z : 3}
];
console.log(cubo[1]);
const cuboCalc = cubo.map((value, index) => {
    return{
        name: `Cubo ${index + 1}`,
        volume: `${value.x * value.y * value.z} m³`
    }
});

console.table(cuboCalc);
