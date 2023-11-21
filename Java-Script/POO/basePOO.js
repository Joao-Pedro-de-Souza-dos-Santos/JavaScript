class Mouse {
    constructor(color, model, size){
        this.color = color;
        this.model = model;
        this.size = size;
    }
}

const mouseGD = new Mouse("Black","Goldentec",16);
console.log(mouseGD.color);
console.log(mouseGD.model);
console.log(mouseGD.size);