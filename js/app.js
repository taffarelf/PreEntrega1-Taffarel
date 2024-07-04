let precioDolar = 1355

function pesosADolares(pesos, tasaCambio) {
    return pesos / tasaCambio;
}
function dolaresAPesos(dolares, tasaCambio) {
    return dolares * tasaCambio;
}
function formatearDecimal(numero) {
    return numero.toLocaleString('es-AR', {minimunFractionDigits: 2, maximumFractionDigits: 2});
}
function convertir() {
    let tasaCambio = 1355;

let opcion = prompt('Consultar valores: 1) Pesos a Dolares o 2) Dolares a Pesos \n Ingresa 1 o 2.')

if(opcion == '1'){
    let pesos = parseInt(prompt('Monto en Pesos para convertir en USD:'))
    let dolares = pesosADolares(pesos, tasaCambio);
    alert(`El monto en USD de ${formatearDecimal(pesos)} es ${formatearDecimal(dolares)}`);
} else if(opcion == '2') {
    let dolares = parseInt(prompt('Monto en USD para convertir en Pesos:'))
    let pesos = dolaresAPesos(dolares, tasaCambio);
    alert(`El monto en pesos de ${formatearDecimal(dolares)}USD es ${formatearDecimal(pesos)}`);
} else {
    alert ('Por favor ingrese una de las opciones validas para poder continuar.');
}
}
convertir();