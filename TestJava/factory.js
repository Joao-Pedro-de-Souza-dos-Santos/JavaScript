function user(name, stand, age, requien){
    return {
        name: name,
        stand: stand,
        age: age,
        requien: () => {
            if(s){
                return "Possui Requien";
            }else{
                return "Não possui Requien";
            }
        }
    };
}

console.log(user("Jotaro","Star Platinum",28,"s"));
console.log(user("Dio","The Word",122,"n"));