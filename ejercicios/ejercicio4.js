const prompt = require('prompt');

prompt.start();

prompt.get(['numero'], function (err , result){
    let numero = result.numero;

    if (numero < 0){
        console.log("el numero " + numero + " es negativo");
    }
    else{
        console.log("el numero es " + numero + " es positivo")
    }

});