class Characthers_JOJO {
    constructor (user_name, user_gender, user_age, user_height, user_stand, user_attack) {
        this.name = user_name;
        this.gender = user_gender;
        this.age = user_age;
        this.height = user_height + "cm";
        this.stand = user_stand;
        this.attack = user_attack;
    }
    attackAction() {
        let atk = this.attack.toUpperCase() + " !!!";
        console.log(`${atk}`);
    }
}

//------------------------------------------------------//

const Pucci = new Characthers_JOJO("Pucci", "Male", 39, 181, "Made in Heaven", "Made in Heaven");

const Jotaro = new Characthers_JOJO("Jotaro", "Male", 40, 195, "Star Platinum", "Star Platinum Za Warudo - Ora Ora Ora Ora Ora");

//------------------------------------------------------//

console.table(Pucci);
console.table(Jotaro);
console.log("");console.log("___________________________________________   ");
console.log("");
Pucci.attackAction();
Jotaro.attackAction();