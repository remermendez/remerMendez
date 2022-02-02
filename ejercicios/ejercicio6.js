const prompt = require('prompt');

prompt.start();

prompt.get(['diametro','grosor'], function (err , result){
    let diametro = result.diametro;

    if (diametro > 1.4){
        console.log("la rueda es para un vehiculo grande.");
    }
    else if (diametro <= 1.4 && diametro > 0.8){
        console.log("la rueda es para un vehiculo liviano");
    }
    else{
        console.log("la rueda es para un vehiculo pequeño");
    }

    let grosor = result.grosor;

    if (diametro > 1.4 && grosor < 0.4){
        console.log("el grosor de esta rueda es inferior a lo recomendado");
    }
    else if (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25){
        console.log("el grosor de esta rueda es inferior a lo recomendado");
    }
});