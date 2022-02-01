const prompt = require('prompt');

prompt.start();

prompt.get(['estacionamiento'], function (err , result){
    let estacionamiento = result.estacionamiento;

    let totalHoras = parseFloat(estacionamiento / 60);

    if (totalHoras <= 1){
        console.log("Tienes que pagar $1,500");
    }
    else{
        let totalFraccion = parseFloat(1500 * totalHoras);            
        console.log("Tienes que pagar $" + totalFraccion.toString());
    }
});