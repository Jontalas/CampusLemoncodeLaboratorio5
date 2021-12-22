const carrito = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
];
var mostrarCarrito = (soloPremium) => {
    document.write("<h3>carrito:</h3>");
    document.write("<ul>");
    for (i of carrito) {
        if (!(soloPremium && !i.premium)) {
            mostrarArticulo(i);
        }
    };
    document.write("</ul>");
    mostrarPrecio(soloPremium);
    mostrarGastosEnvio(soloPremium);
}
var mostrarArticulo = (articulo) => {
    document.write("<li>" + articulo.name + " (id: " + articulo.id + ", precio: " + Number(articulo.price).toFixed(2) + "€, cantidad: " + articulo.count + ", premium: " + (articulo.premium ? "si" : "no") + ")</li>");

};
var mostrarPrecio = (soloPremium) => {
    var precioTotal = 0;
    for (i of carrito) {
        if (!(soloPremium && !i.premium)) {
            precioTotal += i.price * i.count;
        }
    }
    if (precioTotal > 100) {
        document.write("<p>Precio total: " + (Number(precioTotal) * 0.95).toFixed(2) + "€. (Precio sin descuento: " + Number(precioTotal).toFixed(2) + "€) </p>");
    }
    else {
        document.write("<p>Precio total: " + Number(precioTotal).toFixed(2) + "€</p>");
    }
}
var mostrarGastosEnvio = (soloPremium) => {
    var sinGastos = true;
    if (!soloPremium) {
        var iterGastos = 0;
        while (sinGastos && iterGastos < carrito.length) {
            sinGastos = carrito[iterGastos].premium;
            iterGastos++;
        };
    }
    if (sinGastos) {
        document.write("<p>(Pedido sin gastos de envio)</p>");
    }
    else {
        document.write("<p>(Este pedido tiene gastos de envio)</p>");
    };
}
var eliminarArticuloById = (articuloId) => {
    var iterEliminar = 0;
    while (iterEliminar < carrito.length && carrito[iterEliminar].id != articuloId) {
        iterEliminar++;
    };
    if (iterEliminar < carrito.length) {
        var eliminado = carrito.splice(iterEliminar, 1);
        document.write("<p>Se ha eliminado el siguiente articulo:</p>");
        document.write("<ul>");
        mostrarArticulo(eliminado[0]);
        document.write("</ul>");
    }
    else {
        document.write("<p>No se ha encontrado el articulo con id: " + articuloId + "</p>");
    };
};
//------- main ----------
document.write("<h2>Apartado 1: mostrar el carrito (completo)</h2>");
mostrarCarrito(false);
document.write("<br>");
document.write("<h2>Apartado 2: mostrar el carrito (solo premium)</h2>");
mostrarCarrito(true);
document.write("<br>");
const articuloAEliminar = 54657;
document.write("<h2>Apartado 3: Eliminar articulo con ID: " + articuloAEliminar + "</h2>");
eliminarArticuloById(articuloAEliminar);
document.write("<p>Carrito tras el proceso de eliminado:</p>");
mostrarCarrito();