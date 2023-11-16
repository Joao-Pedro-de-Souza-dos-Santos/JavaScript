//const escalarTemp = prompt("Escolha a medida da temperatura desejada");
function degreeConvert (escalarTemp) {
    const degreeMod = escalarTemp.split(" ").join("");
    const degreeModArray = Array.from(degreeMod);
    const degreeScale = degreeModArray.pop();
    const degreeNum = Number(degreeModArray.join(""));

    if(isNaN(degreeNum)) throw new Error("Número Inválido");

    switch (degreeScale) {
        case "C":
            return convertToFarenheit() + "F";
            break;
        case "F":
            return convertToCelcius() + "C";
            break;     
        default:
            throw new Error("Valor Inválido");
            break;
    }

    function convertToFarenheit() {
        return degreeNum * 1.8 + 32;
    }

    function convertToCelcius() {
        return degreeNum * (5/9)  - 32;
    }
    
    return degreeMod;
    return degreeNum;
}

try {
    const escalarTemp = "1  0  C";
    const valorTemp = degreeConvert(escalarTemp);
    console.log(`${valorTemp}`);
}catch {

}
//console.log(`${degreeMod} = ${escalarTempConvert}`);
