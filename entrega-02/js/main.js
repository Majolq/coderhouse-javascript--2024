// Ingresar los productos de la compra a la lista
function ingresarCompra() {
    let productos = [];
    let seguir = true;

    while (seguir === true) {
        let nombre;
        let precio;
        let cantidad;

        // Validación de nombre
        while (true) {
            nombre = prompt("Agregar producto");
            if (nombre && isNaN(nombre)) {
                break;
            } else {
                alert("Ingresá un nombre de producto válido.");
            }
        }

        // Validación de precio
        while (true) {
            precio = parseFloat(prompt("Agregar precio"));
            if (!isNaN(precio) && precio > 0) {
                break;
            } else {
                alert("Ingresá un precio válido \n(agregá sólo números).");
            }
        }

        // Validación de cantidad
        while (true) {
            cantidad = parseFloat(prompt("Agregar cuántos"));
            if (!isNaN(cantidad) && cantidad > 0) {
                break;
            } else {
                alert("Ingresá una cantidad válida. \n(agregá sólo números)");
            }
        }

        // Agregar el producto al array
        productos.push({ producto: nombre, precio: precio, cantidad: cantidad });

        // Validación de la respuesta "s" o "n"
        let respuestaValida = false;

        while (!respuestaValida) {
            const pregunta = prompt("¿Tenés más productos para agregar? \n(Responde 'S' para SI o 'N' para NO)").toLowerCase();

            if (pregunta === "s") {
                respuestaValida = true;
                seguir = true;
            } else if (pregunta === "n") {
                respuestaValida = true;
                seguir = false; 
            } else {
                alert('No es una respuesta válida. \nPor favor, ingresá "S" para SI o "N" para NO.');
            }
        }
    }

    return productos;
}





// Listado de precio Total por Producto agregado al Array
function sumarTotalUnidadesCompra(productos) {

    const total = productos.map(producto => ({
        ...producto, 
        total: producto.precio * producto.cantidad 
    }));

    return total;

}


// Calcular gasto total de la Compra
function calcularGastoTotal(productos) {

    const gasto = productos.reduce((acc, producto) => acc + producto.total, 0);

    return gasto;

}


// Funcion principal
function sistemaDeCompras() {

    const productos = ingresarCompra();
    console.log("%c*** Listado de Productos ***", "color: #508d78");
    console.table(productos);

    const total = sumarTotalUnidadesCompra(productos);
    console.log("%c*** Listado de precio Total por Producto ***", "color: #508d78");
    console.table(total);

    const gasto = calcularGastoTotal(total);
    console.log("%c*** Gasto Total ***", "color: #508d78");
    console.log(gasto);

}


sistemaDeCompras();