

const productos = [ { producto: 'zapatillas', id: 3322, stock: 2 },
                    { producto: 'gorra', id: 3442, stock: 0 },
                    { producto: 'remera', id: 5522, stock: 1 },
                    { producto: 'pantalon', id: 6622, stock: 1 }
]
console.log(productos[1]);

//---- agrega obejeto a la lista (push)
productos.push({producto:'medias', id:9922, stock:3});

// ---recorre la lista(length)
for (let i= 0; i < productos.length; i++) {
    console.log(productos[i]);
}

// ----elimina un objeto de la lista(splice)
productos.splice(4, 1)

console.log(productos)


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

const producto1 = 4000
const producto2 = 500

function suma(numero1, numero2) {
    let total = numero1 + numero2;
    console.log(total);
}
suma(producto1, producto2)




