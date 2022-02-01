const prompt = require('prompt');

prompt.start();

prompt.get(['numero'], function (err , result){
    let numero = result.numero;

    if (numero % 2 == 0){
        console.log("el numero es " + numero + " es par");
    }
    else{
        console.log("el numero es " + numero + " es impar")
    }

});