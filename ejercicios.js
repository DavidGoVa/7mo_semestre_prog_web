// EJERCICIO 1
console.log("EJERCICIO 1");
let linea1 = "";
for (let i = 0; i < 4; i++) {
    linea1 += "X";
}
console.log(" " + linea1);
for (let i = 0; i < 4; i++) {
    console.log("X");
}

// EJERCICIO 2
console.log("EJERCICIO 2");
let numero = parseInt(prompt("Numero de X: "));
let linea2 = "";
for (let i = 0; i < numero; i++) {
    linea2 += "X";
}
console.log(" " + linea2);
for (let i = 0; i < numero; i++) {
    console.log("X");
}

// EJERCICIO 3
console.log("EJERCICIO 3");
console.log("xxxxxxxxxx");
for (let i = 0; i < 4; i++) {
    console.log("x        x");
}
console.log("xxxxxxxxxx");

// EJERCICIO 4
console.log("EJERCICIO 4");
for (let i = 1; i <= 10; i++) {
    let linea4 = "";
    for (let j = 1; j <= 10; j++) {
        linea4 += (i * j).toString().padStart(3, " ") + " ";
    }
    console.log(linea4);
}