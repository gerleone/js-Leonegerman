

// let tablaDelUno = parseInt(1);
// let tablaDelDos = parseInt(2);
// let tablaDelTres = parseInt(3);
// let tablaDelCuatro = parseInt(4);
// let tablaDelCinco = parseInt(5);
// let tablaDelSeis = parseInt(6);
// let tablaDelSiete = parseInt(7);
// let tablaDelOcho = parseInt(8);
// let tablaDelNueve = parseInt(9);
// console.log("tabla del uno")
// for(let i = 0; i <= 10; i++){
//     let resultado = tablaDelUno * i;
//     console.log(tablaDelUno + " x "+ i +" = "+ resultado);
// }
// console.log("tabla del dos")
// for(let i = 0; i <= 10; i++){
// let resultado = tablaDelDos * i;
// console.log(tablaDelDos + " x "+ i +" = "+ resultado);
// }
// console.log("tabla del tres")
// for(let i = 0; i <= 10; i++){
//     let resultado = tablaDelTres * i;
//     console.log(tablaDelTres + " x "+ i + " = " + resultado)
// }
// console.log("tabla del cuatro")
// for(let i = 0; i <= 10; i++){
//     let resultado = tablaDelCuatro * i;
//     console.log(tablaDelCuatro + " x " + i + " = " + resultado)
// }
// console.log("tabla del cinco")
// for(let i = 0; i <= 10; i++){
//     let resultado = tablaDelCinco * i;
//     console.log(tablaDelCinco + " x " + i + " = " + resultado)
// }
// console.log("tabla del seis")
// for(let i = 0; i <= 10; i++){
//     let resultado = tablaDelSeis * i;
//     console.log(tablaDelSeis + " x " + i + " = "+ resultado)
// }


// let entrada = prompt("como es su nombre");
// let nombre = "Martin";

// if (entrada===nombre){
//     alert("Fui yo");
// } else {
//     alert("Yo no fui")
// }

// let entrada2 = prompt("Ingresa una letra");
// if((entrada2=="o") || (entrada2=="O")){
//     alert("correcto");
// } else {
//     alert("error");
// }

// let entrada3 = prompt("Elegi un numero entre 1 y 4")

// if(entrada3 === "1"){
//     alert("Elegiste a Homero");
// } else if (entrada3 === "2"){
//     alert("Elegiste a Marge");
// } else if (entrada3 === "3"){
//     alert("Elegiste a Bart");
// } else if (entrada3 === "4"){
//     alert("Elegiste a Lisa");
// } else {
//     alert("Error")
// }

// let entrada4 = parseInt(prompt("Decime un numero"))
// if ((entrada4 >= 0) && (entrada4 <=1000)){
//     alert ("Presupuesto bajo");
// } else if ((entrada4 >= 1001)&& (entrada4 <= 3000)){
//     alert ("Presupuesto medio");
// } else {
//     alert("Presupuesto alto")
// }

// let producto1 = prompt("ingresar 1er producto");
// let producto2 = prompt("ingresar 2do producto");
// let producto3 = prompt("ingresar 3er producto");
// let producto4 = prompt("ingresar 4to producto");
// if((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")){
//     let heladera = "1) " + producto1 + " " + 
//         "2) " + producto2 + " " +
//         "3) " + producto3 + " " + 
//         "4) " + producto4;
//     console.log(heladera);    
// } else {
//     console.log("Error: debe ingresar todos los productos");
// }

// let numero = prompt("Decime un numero");
// let entrada = prompt("decime una palabra");
// for(let i = 0; i < numero; i++){
//     console.log(entrada);
// }

// let numero = prompt("Decime un numero");
// for(let i = 0; i < numero; i++){
//     if(i > 3){
//         break;
//     }
//     alert("lado");
// }

// let alumnos = "";
// for(let i = 0; i < 10; i++) {
//     alumnos += prompt("ingresar nombre de alumno")+ i + " ";
// } alert(alumnos);

let numero = prompt ("Decime de que numero te gustaria saber la tabla de multiplicar")
console.log("tabla del "+ numero)
for(let i = 0; i <= 10; i++){
    let resultado = numero * i;
    console.log(numero + " x "+ i +" = "+ resultado);
}