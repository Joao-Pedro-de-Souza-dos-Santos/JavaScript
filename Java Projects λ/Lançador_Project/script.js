function lancar(button){
    var projetil = document.getElementById("projetil1");
    let t = 0.1;
    let cX = setInterval(() => {
        projetil.style.left = `${t}%`; 
        t = t + 0.1; 
        cX++;
        console.log(cX);
        if (cX == 200) {clearInterval(cX);clearInterval(cY);}}, 1);
    let cY = setInterval(() => {
        projetil.style.bottom = `${t}%`; 
        t = t + 0.1;
        cY++;
        if (cY == 200) {clearInterval(cY);clearInterval(cX);}}, 1);  
}