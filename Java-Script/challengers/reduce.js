const compras = [
    {product: "Arroz", amount: 3, price: 8},  
    {product: "Café", amount: 6, price: 5},  
    {product: "Cuzuz", amount: 10, price: 7}  
];

let sumCompra = compras.reduce((a, b) => {
    return a + b.amount * b.price;
}, 0);

console.log(sumCompra);
