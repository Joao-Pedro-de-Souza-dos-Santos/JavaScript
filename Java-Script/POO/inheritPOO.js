class ReinoPLantae {
    constructor(name){
        this.name = name;
    }
}

class Briofita extends ReinoPLantae{
    constructor(name, vascular){
        super(name);
        this.vascular = vascular;
    }
}

//----------------------------------------//

const briofita = new ReinoPLantae("Briófita");

const musgo = new Briofita("Musgo", "No-Vascular");

//-------------------------------------------------//

console.table(briofita);
console.table(musgo);