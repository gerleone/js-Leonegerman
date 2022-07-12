



function agregarAlCarrito(producto, stock)  {
    const tenemosStock = validarStock (stock) ;
    if (tenemosStock === 'tenemos stock' )  {
        console.log ('agregaste el producto al carrito: ' + producto)
    } else{
        console.log ('no tenemos stock')
    }
}

function  validarStock (stock)  {
    if (stock > 0)  {
        return 'tenemos stock' ;
    } else  {
        return 'no tenemos stock' ;
    }
}

agregarAlCarrito ('zapatilla', 1) 
agregarAlCarrito ('Gorra', 0)
agregarAlCarrito ('Pantalón', 1)
agregarAlCarrito ('Remera', 1)

const producto1 = 4000
const producto2 = 500

function suma(numero1, numero2) {
    let total = numero1 + numero2;
    console.log(total);
}
suma(producto1, producto2)

