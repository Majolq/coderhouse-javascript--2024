let carrito = [];

const platos = [
    {
        id: "plato-01",
        title: "Pizza",
        price: 12000,
        img: "./images/01.jpeg"
    },
    {
        id: "plato-02",
        title: "Empanadas",
        price: 16000,
        img: "./images/02.jpeg"
    },
    {
        id: "plato-03",
        title: "Hamburguesa",
        price: 13000,
        img: "./images/03.jpeg"
    },
    {
        id: "plato-04",
        title: "Picada",
        price: 22000,
        img: "./images/04.jpeg"
    },
    {
        id: "plato-05",
        title: "Ensalada",
        price: 8000,
        img: "./images/05.jpeg"
    },
    {
        id: "plato-06",
        title: "Paella",
        price: 32000,
        img: "./images/06.jpeg"
    },
    {
        id: "plato-07",
        title: "Tacos",
        price: 18000,
        img: "./images/07.jpeg"
    },
    {
        id: "plato-08",
        title: "Fideos",
        price: 20000,
        img: "./images/08.jpeg"
    }
];


const listadoPlatos = document.querySelector("#platos");
const carritoVacio = document.querySelector("#carrito-vacio");
const carritoPlatos = document.querySelector("#carrito-platos");
const carritoPlatosListado = document.querySelector(".carrito__list");
const carritoTotal = document.querySelector("#carrito-total");


// Foreach de carrito
platos.forEach((plato) => {
    let li = document.createElement("li");
    li.classList.add("platos__item");
    li.innerHTML = `
        <img class="platos__img" src=${plato.img} alt="${plato.title}">
        <h3 class="platos__name">${plato.title}</h3>
        <p class="platos__price">$${plato.price}</p>
    `;

    let button = document.createElement("button");
    button.classList.add("platos__btn");
    button.innerText = "Agregar al carrito";
    button.addEventListener("click", () => {
        agregarAlCarrito(plato);
    })

    li.append(button);

    listadoPlatos.append(li);
});


// Actualizar el Carrito
function actualizarCarrito() {
    if (carrito.length === 0) {
        carritoVacio.classList.remove("hidden");
        carritoPlatos.classList.add("hidden");
    } else {
        carritoVacio.classList.add("hidden");
        carritoPlatos.classList.remove("hidden");

        carritoPlatosListado.innerHTML = ""; // vacío el carrito por defecto
        carrito.forEach((plato) => {
            let li = document.createElement("li");
            li.classList.add("carrito__item");
            li.innerHTML = `
                <img class="carrito__img" src=${plato.img} alt="${plato.title}">
                <h3 class="carrito__name">${plato.title}</h3>
                <p class="carrito__price">$${plato.price}</p>
                <p class="carrito__quantity">Cantidad: ${plato.cantidad}</p>
                <p class="carrito__subtotal">Subtotal: $${plato.price * plato.cantidad}</p>
            `;

            let button = document.createElement("button");
            button.classList.add("carrito__btn");
            button.innerHTML = "&#x2716;&#xfe0f;";
            button.addEventListener("click", () => {
                borrarDelCarrito(plato);
            });

            li.append(button);
            carritoPlatosListado.append(li);
        });
    }
    actualizarTotal();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


// Agregar al Carrito
function agregarAlCarrito(plato) {
    let itemEncontrado = carrito.find((item) => item.id === plato.id);

    if (itemEncontrado) {
        itemEncontrado.cantidad++;
    } else {
        carrito.push({...plato, cantidad: 1});
    }

    actualizarCarrito();
}


// Borrar Plato del carrito
function borrarDelCarrito(plato) {
    let indice = carrito.findIndex((item) => item.id === plato.id);
    carrito.splice(indice, 1);

    actualizarCarrito();
}


actualizarCarrito();