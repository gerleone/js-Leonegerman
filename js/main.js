

const productos = [ { producto: 'zapatillas', id: 3322, stock: 2, precio: 8000 },
                    { producto: 'gorra', id: 3442, stock: 0, precio: 3500 },
                    { producto: 'remera', id: 5522, stock: 1, precio: 2500 },
                    { producto: 'pantalon', id: 6622, stock: 1, precio: 6200}
]
console.log(productos[1]);

//FUNCIONES DE ORDEN SUPERIOR
//-------recorre el array(forEach)
productos.forEach( (prod)=> {
    console.log(prod)
});

let cards = "";


//----- genera una cards por cada elemento del array con forEach

// productos.forEach((prod) => {
//     cards += "<div>"+prod+"</div>"
// });

// document.write(cards);


//-----Find-busca elmentos dentro del array por comparacion devuelve el primer resultado q encuentre
let productoBusca = prompt("Que producto estas buscando?")
const resultado = productos.find ((el) => el.producto === productoBusca);
const resultado2 = productos.find ((el) => el.precio >= 600);

console.log(resultado);
console.log(resultado2);


//-------- filter - filtrar elementos segun el parametro q le pedimos
let valor = parseFloat(prompt("busar producto de menor/igual valor que:"))
const resultado3 = productos.filter ((el) => el.precio <= valor );
console.log(resultado3)


// some()--- retorna true o false segun el resultado de la busqueda

console.log(productos.some((el) => el.producto === "pantalon"))
//retorna true


//------- map() crea un nuevo array (para camabiar el precio por ejemplo)

const productosActualizado = productos.map ((el) => {
    return {
        precio: el.precio * 1.15
    }
})
console.log(productosActualizado)



//-----ARRAY
// ---recorre la lista(length)
for (let i= 0; i < productos.length; i++) {
    console.log(productos[i]);
}

//---- agrega obejeto a la lista (push)
productos.push({producto:'medias', id:9922, stock:3, precio: 1000});

// ----elimina un objeto de la lista(splice)
productos.splice(4, 1);

console.log(productos);


function agregarAlCarrito(producto, stock) {
    const tenemosStock = validarStock(stock);
    if (tenemosStock === 'tenemos stock') {
        console.log('agregaste el producto al carrito: ' + producto)
    } else {
        console.log('no tenemos stock')
    }
}

function validarStock(stock) {
    if (stock > 0) {
        return 'tenemos stock';
    } else {
        return 'no tenemos stock';
    }
} 

