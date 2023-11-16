function run() {
    return "Running...";  
}

try {
    console.log("Test");
    console.log(ru1());
} catch (messageError) {
    console.log(messageError);
} finally{
    console.log("Sempre executo papai");
}

document.write("The software is running...");