
function agregarAlCarrito(producto, stock) {
    const tenemosStock = validarStock(stock);
    if (tenemosStock === "tenemos stock") {
        console.log("agregaste el producto al carrito: " + producto)
    } else {
        console.log("no tenemos stock")
    }
}

function validarStock(stock) {
    if (stock > 0) {
        return 'tenemos stock';
    } else {
        return 'no tenemos stock';
    }
}


agregarAlCarrito('zapatilla', 1) 
agregarAlCarrito('Gorra', 0)
agregarAlCarrito('Pantalon', 1)
agregarAlCarrito('Remera', 1)














// function agregarAlCarrito(proucto, stock) {
//     const tenemosStock = validarStock(stock);
//     if (tenemosStock === 'tenemos stock'){
//         console.log('agregaste el proucto al carrito ' + producto) 
//     } else {
//         console.log('no tenemos stock')
//     }
// }

// function validarStock(stock){
//     if (stock > 0) {
//         return 'tenemos stock';
//     } else {
//         return 'no tenemos stock';
//     }
// }
// let numero = parseInt(prompt ("Decime de que numero te gustaria saber la tabla de multiplicar"))
// console.log("tabla del "+ numero)
// for(let i = 0; i <= 10; i++){
//     let resultado = numero * i;
//     console.log(numero + " x "+ i +" = "+ resultado);
// }

// // funciones------------------- siempre con() despues de nombrarla entre las comillas van los parametros
// function saludar() {
//     console.log("hola estudiantes!")
// }
// // como llamarla
// saludar();
// // prompt y alert son funciones

// function solicitarNombre() {
//     let nombreIngresado = prompt("ingresar nombre")
//     alert("el nombre ingresado es "+ nombreIngresado)
// }
// solicitarNombre();
// solicitarNombre();
// solicitarNombre();
// // llame a la funcion 3 veces---
// const producto = "zapatilla nike"
// function agregarAlCarrito(){
//     console.log("Agregar al carrito "+ producto)
// }
// agregarAlCarrito();
// agregarAlCarrito();
// agregarAlCarrito();


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

