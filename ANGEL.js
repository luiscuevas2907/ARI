function calcularIMC() {

    const peso = parseFloat(document.getElementById("peso").value);
    const estatura = parseFloat(document.getElementById("estatura").value);

    const resultado = document.getElementById("resultado");

    // Verificar datos
    if (
        isNaN(peso) ||
        isNaN(estatura) ||
        peso <= 0 ||
        estatura <= 0
    ) {
        resultado.innerText = "Ingrese valores válidos";
        return;
    }

    // Calcular IMC
    const imc = peso / (estatura * estatura);

    let clasificacion;

    // Clasificación
    if (imc < 18.5) {
        clasificacion = "Bajo peso";
    } else if (imc < 25) {
        clasificacion = "Peso normal";
    } else if (imc < 30) {
        clasificacion = "Sobrepeso";
    } else {
        clasificacion = "Obesidad";
    }

    // Mostrar resultado
    resultado.innerText =
        "Tu IMC es: " + imc.toFixed(2) +
        "\nClasificación: " + clasificacion;
}