let gastos = [];

function agregarGasto() {

    const nombre = document.getElementById("nombreGasto").value;
    const cantidad = parseFloat(document.getElementById("cantidadGasto").value);

    if (nombre == "" || isNaN(cantidad) || cantidad <= 0) {
        alert("Ingresa correctamente el gasto.");
        return;
    }

    gastos.push({
        nombre: nombre,
        cantidad: cantidad
    });

    mostrarGastos();

    document.getElementById("nombreGasto").value = "";
    document.getElementById("cantidadGasto").value = "";
}

function mostrarGastos() {

    const lista = document.getElementById("listaGastos");

    lista.innerHTML = "";

    for (let i = 0; i < gastos.length; i++) {

        lista.innerHTML +=
            "<div class='gasto'>" +
            gastos[i].nombre + " - $" +
            gastos[i].cantidad.toFixed(2) +
            "</div>";
    }
}

function calcularGastos() {

    const dinero = parseFloat(document.getElementById("dinero").value);

    if (isNaN(dinero) || dinero <= 0) {
        alert("Ingresa el dinero disponible.");
        return;
    }

    let total = 0;

    for (let i = 0; i < gastos.length; i++) {
        total = total + gastos[i].cantidad;
    }

    let restante = dinero - total;

    document.getElementById("resultado").innerHTML =
        "<strong>Dinero disponible:</strong> $" +
        dinero.toFixed(2) + "<br>" +

        "<strong>Total de gastos:</strong> $" +
        total.toFixed(2) + "<br>" +

        "<strong>Dinero restante:</strong> $" +
        restante.toFixed(2);
}