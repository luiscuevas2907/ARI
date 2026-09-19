function mostrarFigura(figura) {

    document.getElementById("menu").style.display = "none";

    let figuras = document.getElementsByClassName("figura");

    for (let i = 0; i < figuras.length; i++) {
        figuras[i].style.display = "none";
    }

    document.getElementById(figura).style.display = "block";
}


function regresar() {

    let figuras = document.getElementsByClassName("figura");

    for (let i = 0; i < figuras.length; i++) {
        figuras[i].style.display = "none";
    }

    document.getElementById("menu").style.display = "block";
}


function calcularTriangulo() {

    let lado = parseFloat(document.getElementById("ladoTriangulo").value);
    let base = parseFloat(document.getElementById("baseTriangulo").value);
    let altura = parseFloat(document.getElementById("alturaTriangulo").value);

    let perimetro = lado * 3;
    let area = (base * altura) / 2;

    document.getElementById("resultadoTriangulo").innerHTML =
        "Perímetro: " + perimetro +
        "<br>Área: " + area;
}


function calcularCuadrado() {

    let lado = parseFloat(document.getElementById("ladoCuadrado").value);

    let perimetro = lado * 4;
    let area = lado * lado;

    document.getElementById("resultadoCuadrado").innerHTML =
        "Perímetro: " + perimetro +
        "<br>Área: " + area;
}


function calcularRectangulo() {

    let base = parseFloat(document.getElementById("baseRectangulo").value);
    let altura = parseFloat(document.getElementById("alturaRectangulo").value);

    let perimetro = base + base + altura + altura;
    let area = base * altura;

    document.getElementById("resultadoRectangulo").innerHTML =
        "Perímetro: " + perimetro +
        "<br>Área: " + area;
}


function calcularRombo() {

    let lado = parseFloat(document.getElementById("ladoRombo").value);
    let diagonalMayor = parseFloat(document.getElementById("diagonalMayor").value);
    let diagonalMenor = parseFloat(document.getElementById("diagonalMenor").value);

    let perimetro = lado * 4;
    let area = (diagonalMayor * diagonalMenor) / 2;

    document.getElementById("resultadoRombo").innerHTML =
        "Perímetro: " + perimetro +
        "<br>Área: " + area;
}


function calcularRomboide() {

    let base = parseFloat(document.getElementById("baseRomboide").value);
    let lado = parseFloat(document.getElementById("ladoRomboide").value);
    let altura = parseFloat(document.getElementById("alturaRomboide").value);

    let perimetro = base + base + lado + lado;
    let area = base * altura;

    document.getElementById("resultadoRomboide").innerHTML =
        "Perímetro: " + perimetro +
        "<br>Área: " + area;
}


function calcularTrapecio() {

    let baseMayor = parseFloat(document.getElementById("baseMayor").value);
    let baseMenor = parseFloat(document.getElementById("baseMenor").value);
    let lado1 = parseFloat(document.getElementById("lado1").value);
    let lado2 = parseFloat(document.getElementById("lado2").value);
    let altura = parseFloat(document.getElementById("alturaTrapecio").value);

    let perimetro = baseMayor + baseMenor + lado1 + lado2;
    let area = ((baseMayor + baseMenor) * altura) / 2;

    document.getElementById("resultadoTrapecio").innerHTML =
        "Perímetro: " + perimetro +
        "<br>Área: " + area;
}


function calcularPentagono() {

    let lado = parseFloat(document.getElementById("ladoPentagono").value);
    let apotema = parseFloat(document.getElementById("apotemaPentagono").value);

    let perimetro = lado * 5;
    let area = (perimetro * apotema) / 2;

    document.getElementById("resultadoPentagono").innerHTML =
        "Perímetro: " + perimetro +
        "<br>Área: " + area;
}


function calcularHexagono() {

    let lado = parseFloat(document.getElementById("ladoHexagono").value);
    let apotema = parseFloat(document.getElementById("apotemaHexagono").value);

    let perimetro = lado * 6;
    let area = (perimetro * apotema) / 2;

    document.getElementById("resultadoHexagono").innerHTML =
        "Perímetro: " + perimetro +
        "<br>Área: " + area;
}


function calcularCirculo() {

    let radio = parseFloat(document.getElementById("radio").value);

    let perimetro = 2 * Math.PI * radio;
    let area = Math.PI * radio * radio;

    document.getElementById("resultadoCirculo").innerHTML =
        "Perímetro: " + perimetro.toFixed(2) +
        "<br>Área: " + area.toFixed(2);
}