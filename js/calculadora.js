let numero_1, numero_2, operacion;
const resultado = document.querySelector("#resultado");


function inicio() {
    numero_1 = prompt("Introducir un número entero: ");
    numero_2 = prompt("Introducir otro número entero: ");
    numero_1 = parseFloat(numero_1);
    numero_2 = parseFloat(numero_2);
    console.log(numero_1);
    console.log(numero_2);
}


function sumar() {
    if (numero_1 == undefined && numero_2 == undefined) {
        alert("Por favor ingresar números válidos");
        inicio();
    } else {
        operacion = numero_1 + numero_2;
        resultado.innerHTML = (`El resultado es: ${operacion}`)
    }

}

function restar() {
    if (numero_1 == undefined && numero_2 == undefined) {
        alert("Por favor ingresar números válidos");
        inicio();
    } else {
        operacion = numero_1 - numero_2;
        resultado.innerHTML = (`El resultado es: ${operacion}`)
    }
}

function multiplicar() {
    if (numero_1 == undefined && numero_2 == undefined) {
        alert("Por favor ingresar números válidos");
        inicio();
    } else {
        operacion = numero_1 * numero_2;
        resultado.innerHTML = (`El resultado es: ${operacion}`)
    }
}
function dividir() {
    if (numero_1 == undefined && numero_2 == undefined) {
        alert("Por favor ingresar números válidos");
        inicio();
    } else {
        operacion = numero_1 / numero_2;
        resultado.innerHTML = (`El resultado es: ${operacion}`)
    }
}