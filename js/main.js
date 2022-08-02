const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
document.getElementById("cart-total").innerHTML = `${carrito.length}  - $${total}`;

const productos = [
    {
        id: 1,
        title: "Zapatilla nike",
        img: src = "./img/ZapatillasNike.webp",
        price: 24900,
        category: "caballero"
    },
    {
        id: 2,
        title: "Zapatilla Jaguar",
        img: src = "./img/ZapatillasJaguar.jpg",
        price: 11999,
        category: "niño"
    },
    {
        id: 3,
        title: "Zapatilla Adidas",
        img: src = "./img/ZapatillasAdidas.webp",
        price: 26500,
        category: "caballero"
    },
    {
        id: 4,
        title: "Zapatilla Reebok",
        img: src = "./img/ZapatillasReebok.webp",
        price: 16500,
        category: "dama"
    },
    {
        id: 5,
        title: "Zapatilla Fila",
        img: src = "./img/ZapatillasFila.webp",
        price: 14500,
        category: "caballero"
    },
    {
        id: 6,
        title: "Zapatilla Puma",
        img: src = "./img/ZapatillasPuma.webp",
        price: 23500,
        category: "dama"
    },
    {
        id: 7,
        title: "Zapatilla Topper",
        img: src = "./img/ZapatillaTopper.webp",
        price: 14800,
        category: "caballero"
    },
    {
        id: 8,
        title: "Zapatilla AllStar",
        img: src = "./img/ZapatillaAllStar.jpg",
        price: 18500,
        category: "dama"
    },
    {
        id: 9,
        title: "Zapatilla Nike",
        img: src = "./img/zapatillanikeniño.jpg",
        price: 15500,
        category: "niño"
    },
    {
        id: 10,
        title: "Zapatilla Adidas",
        img: src = "./img/zapatillaadidasdama.webp",
        price: 20500,
        category: "dama"
    },
    {
        id: 11,
        title: "Zapatilla Adidas",
        img: src = "./img/zapatillaadidasniño.webp",
        price: 13500,
        category: "niño"
    },
    {
        id: 12,
        title: "Zapatilla AllStar",
        img: src = "./img/ZapatillaAllStar.jpg",
        price: 23500,
        category: "dama"
    },
];

//----Generador de cards----
productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
    document.getElementById("seccion-card").innerHTML += `<div class="card bg-ligth" style="margin:10px">
    <img class="card-img-top" src="${producto.img}" alt="zapatilla adidas" style="margin:5px"/>
    <div class="card-body p-4">
    <div class="text-center">
    <h5 class="fw-bolder">${producto.title}</h5>
    <p>$${producto.price}</p>
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
    <div class="text-center">
    <a class="btn btn-outline-light mt-auto btn-dark" id="${idButton}" href="#">
    Agregar
    </a>
    </div>
    </div>
</div>`;
})

// ------cards carrito
function generarCardsCarrito() {
    carrito.forEach((producto) => {
        document.getElementById("cards-modal").innerHTML += `<div>
            <p>${producto.id}
            - ${producto.title}
            - <img src="${producto.img}" style="width:20px">
            - $${producto.price}
            - <button class="btn btn-outline-light mt-auto btn-dark boton">X</button>
            </div>`
    })
}
//-----Agregar cards al carrito
productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
    document.getElementById(idButton).addEventListener('click', () => {
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
        document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`;
        document.getElementById("cart-elements").innerHTML = ""
        carrito.forEach((producto) => {
            document.getElementById("cart-elements").innerHTML += `<tr>
                <th scope="row">${producto.id}</th>
                <td>${producto.title}</td>
                <td><img src="${producto.img}" style="width:50px"></td>
                <td>$${producto.price}</td>
                <td><button>Sacar del carrito</button></td>
            </tr>`
        })
    })
});

//------Filtrar productos por categoria

for (const nodoHTML of document.getElementsByClassName('filtrar-categoria')) {
    nodoHTML.onclick = (event) => {
        const categoria = event.target.getAttribute('data-categoria')
        filtrarPorCategoria(categoria)
    };
}

function filtrarPorCategoria(categoria) {
    document.getElementById("seccion-card").innerHTML = "";
    const productosFiltrados = productos.filter((producto) => producto.category === categoria)
    productosFiltrados.forEach((producto) => {
        const idButton = `add-cart${producto.id}`
        document.getElementById("seccion-card").innerHTML += `<div class="card bg-ligth" style="margin:10px">
            <img class="card-img-top" src="${producto.img}" alt="zapatilla adidas" />
            <div class="card-body p-4">
            <div class="text-center">
            <h5 class="fw-bolder">${producto.title}</h5>
            <p>$${producto.price}</p>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
            <a class="btn btn-outline-light mt-auto btn-dark" id="${idButton}" href="#">
            Agregar
            </a>
            </div>
            </div>
            </div>`;
        })
    }
    //-----eliminar producto del carrito

    // function eliminarDelCarrito(producto) {
    //     let i = carrito.indexOf(producto)
    //     if (i != -1) {carrito.splice(i, 1)}
    //     botones = document.getElementsByClassName("boton");
    // }

// for (let i=0;i<botones.length;i++) {
//   botones[i].onclick = function() {
//     alert(this.innerHTML);
//   }
// }
//     }
// // ---------------------DOM traicional

// const navBar =  document.getElementsByClassName("navbar");
// console.log(navBar);

// const container = document.getElementsByClassName("container");
// console.log(container);

// const boton = document.getElementById("button1");
// console.log(boton);

// //----------------------DOM nuevo

// let btonClass = document.querySelector(".btn"); //por class solo trae el primero q encuentra
// let allButton = document.querySelectorAll(".btn");
// let btonId = document.querySelector("#button1");
// console.log(btonClass);
// console.log(allButton);
// console.log(btonId);


// const cambiarTitulo = (document.querySelector("#titulo").textContent = "Ropa informal");

// console.log(cambiarTitulo);

// const encabezado = document.querySelector(".lead");
// encabezado.remove();

// let agregado = document.createElement("p")
// agregado.innerHTML = "<h5>Parrafo agregado</h5>";

// //FUNCIONES DE ORDEN SUPERIOR
// //-------recorre el array(forEach)
// productos.forEach( (prod)=> {
//     console.log(prod)
// });

// let cards = "";


// //----- genera una cards por cada elemento del array con forEach

// // productos.forEach((prod) => {
// //     cards += "<div>"+prod+"</div>"
// // });

// // document.write(cards);


// //-----Find-busca elmentos dentro del array por comparacion devuelve el primer resultado q encuentre
// let productoBusca = prompt("Que producto estas buscando?")
// const resultado = productos.find ((el) => el.producto === productoBusca);
// const resultado2 = productos.find ((el) => el.precio >= 600);

// console.log(resultado);
// console.log(resultado2);


// //-------- filter - filtrar elementos segun el parametro q le pedimos
// let valor = parseFloat(prompt("busar producto de menor/igual valor que:"))
// const resultado3 = productos.filter ((el) => el.precio <= valor );
// console.log(resultado3)


// // some()--- retorna true o false segun el resultado de la busqueda

// console.log(productos.some((el) => el.producto === "pantalon"))
// //retorna true


// //------- map() crea un nuevo array (para camabiar el precio por ejemplo)

// const productosActualizado = productos.map ((el) => {
//     return {
//         precio: el.precio * 1.15
//     }
// })
// console.log(productosActualizado)



// //-----ARRAY
// // ---recorre la lista(length)
// for (let i= 0; i < productos.length; i++) {
//     console.log(productos[i]);
// }

// //---- agrega obejeto a la lista (push)
// productos.push({producto:'medias', id:9922, stock:3, precio: 1000});

// // ----elimina un objeto de la lista(splice)
// productos.splice(4, 1);

// console.log(productos);


// function agregarAlCarrito(producto, stock) {
//     const tenemosStock = validarStock(stock);
//     if (tenemosStock === 'tenemos stock') {
//         console.log('agregaste el producto al carrito: ' + producto)
//     } else {
//         console.log('no tenemos stock')
//     }
// }

// function validarStock(stock) {
//     if (stock > 0) {
//         return 'tenemos stock';
//     } else {
//         return 'no tenemos stock';
//     }
// }

// console.log( new Date())



// function removeFromCart(Product){
//     cart.splice(cart.indexOf (Product))
//     console.log ("removiste "+ Product.productId +" del carrito")}
