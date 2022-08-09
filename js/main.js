const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
pintarTotalCarrito(total)



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
        img: src = "./img/ZapatillaAllStarNiño.jpg",
        price: 10500,
        category: "niño"
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

function totalCarrito(total){
    localStorage.setItem("carrito", JSON.stringify(carrito));
    document.getElementById("costoTotalCarrito").innerHTML = `Total =  $${total}`
}
totalCarrito(total)

function pintarTotalCarrito(total){
    localStorage.setItem("carrito", JSON.stringify(carrito));
    document.getElementById("cart-total").innerHTML = `${carrito.length}  - $${total}`;
}

//----Generador de cards----
function cards (card) {
    card.forEach((producto) => {
        document.getElementById("seccion-card").innerHTML += 
        `<div class="col mb-5">
            <div class="card h-100">
                <img class="card-img-top" src="${producto.img}" alt="..." />
                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder">${producto.title}</h5>
                        <p>$${producto.price}</p>
                    </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <button class="btn btn-outline-light mt-auto btn-dark" id="add-cart${producto.id}" href="#">
                        Agregar
                        </button>
                    </div>
                </div>
            </div>
        </div>`
})
}
cards(productos)


// ------cards carrito
function generarCardsCarrito() {
    document.getElementById("card-cart").innerHTML = "";
    carrito.forEach((producto) => {
        document.getElementById("card-cart").innerHTML += 
        `<tr>
            <th scope="row">${producto.title}</th>
            <td>${producto.category}</td>
            <td><img src="${producto.img}" style="height: 30px" ></td>
            <td>${producto.price}</td>
            <td><button type="button" class="btn btn-secondary"  id="eliminar(${producto.id}" onclick="eliminar(${producto.id})" info-borrar="${producto.id}">X</button></td>
        </tr>`
    })
}
generarCardsCarrito()


//----------------Funcion para agregar cart al carrito

function agregarCart(lista) {
    for(const producto of lista) {
        document.getElementById("add-cart"+producto.id).addEventListener("click", () => {
            carrito.push(producto);
            const costoTotal = carrito.reduce((total, producto) => total + producto.price, 0)
            pintarTotalCarrito(costoTotal);
            generarCardsCarrito()
        })
    }
}
agregarCart(productos)


// //------Filtrar productos por categoria

function filtroCategoria(categoria) {
    document.getElementById("seccion-card").innerHTML = "";
    const productosFiltrados = productos.filter((producto) => producto.category === categoria)
    cards(productosFiltrados)
    agregarCart(productosFiltrados)
    }


for (const nodoHTML of document.getElementsByClassName('filtrar-categoria')) {
    nodoHTML.onclick = (event) => {
        const categoria = event.target.getAttribute('data-categoria')
        filtroCategoria(categoria)
    };
}

//----------Elimiar cart del carrito

function eliminar(productoId) {
    const prod = carrito.find((producto) => producto.id == productoId)
    let i = carrito.indexOf(prod)
    if (i != -1) {carrito.splice(i, 1)}
    const costoTotal = carrito.reduce((total, producto) => total + producto.price, 0)
    pintarTotalCarrito(costoTotal)
    generarCardsCarrito()
}

