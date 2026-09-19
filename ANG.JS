function calcularCompra() {

    const producto = document.getElementById("producto").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const descuento = parseFloat(document.getElementById("descuento").value);

    if (producto == "" || isNaN(precio) || isNaN(cantidad)) {
        document.getElementById("resultado").innerHTML =
            "Por favor, completa los datos.";
        return;
    }

    let subtotal = precio * cantidad;

    let dineroDescuento = subtotal * (descuento / 100);

    let precioDescuento = subtotal - dineroDescuento;

    let iva = precioDescuento * 0.16;

    let total = precioDescuento + iva;

    document.getElementById("resultado").innerHTML =
        "<strong>Producto:</strong> " + producto + "<br>" +
        "<strong>Subtotal:</strong> $" + subtotal.toFixed(2) + "<br>" +
        "<strong>Descuento:</strong> $" + dineroDescuento.toFixed(2) + "<br>" +
        "<strong>IVA:</strong> $" + iva.toFixed(2) + "<br>" +
        "<strong>Total:</strong> $" + total.toFixed(2);
}