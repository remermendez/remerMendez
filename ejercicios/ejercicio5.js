const prompt = require('prompt');

prompt.start();

prompt.get(['docenas'], function (err , result){
    let docenas = result.docenas;

    let montoDeCompra = "3 docenas";
    let montoDeDesacuento = 15;
    let montoAPagar = 1200 * 15 / 100 - 1200;

    //segunda opcion----------------

    let montoDeDesacuento2 = 10;
    let montoAPagar2 = 500 * 10 / 100 - 500;
    
    if (docenas > 3){
        console.log(`hola su monto de compra fue mas de: ${montoDeCompra}`);
        console.log(`has recibido un descuento del: ${montoDeDesacuento}%`);
        console.log(`su compra es de 1200 pesos, pero con el ${montoDeDesacuento}% de descuento su monto a pagar es de: ${montoAPagar} pesos`);
        console.log("ademas te obsequiamos una unidad del producto por cada docena.");
    }
    else if (docenas <= 3 && docenas >= 1){
        console.log(`hola su monto de compra fue igual o menos de: ${montoDeCompra}`);
        console.log(`has recibido un descuento del: ${montoDeDesacuento2}%`);
        console.log(`su compra es de 500 pesos, pero con el ${montoDeDesacuento2}% de descuento su monto a pagar es de: ${montoAPagar2} pesos`);
    }
    else {
        console.log("no has hecho compra");
    }
});