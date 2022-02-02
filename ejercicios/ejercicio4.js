const prompt = require('prompt');

prompt.start();

prompt.get(['numero'], function (err , result){
    let numero = result.numero;

    if (numero < 0 && numero % 2 == 0){
        console.log("el numero " + numero + " par es negativo");
    }
    else if (numero < 0 && numero % 2 != 0){
        console.log("el numero " + numero + " impar es negativo");
    }

    else if ( numero > 0 && numero % 2 == 0){
        console.log("el numero " + numero + " par es positivo")
    }
    else{
        console.log("el numero " + numero + " impar es positivo");
    }

});