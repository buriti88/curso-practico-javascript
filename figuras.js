/* Código del cuadrado */
function perimetroCuadrado(lado) {
    return lado * 4
}

/* Arrow function example */
/* const perimetroCuadrado = (lado) => lado * 4; */

function areaCuadrado(lado) {
    return lado * lado
}


/* Código del triángulo */
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}


/* Código del círculo */
const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio, PI) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    (radio * radio) * PI
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}