//Call Task
console.log(1);

//Microtask
Promise.resolve().then(() => {
    console.log(4);
});

//Microtask
queueMicrotask(() => {console.log(3);});

//Task
setTimeout(() => {console.log(2)}, 2000);

//Sequência 1 4 3 2