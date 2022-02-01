const prompt = require('prompt');

prompt.start();

prompt.get(['diametro'], function (err , result){
    let diametro = result.diametro;

    if (diametro > 1.4 ){
        console.log("la rueda es para un vehiculo grande.");
    }
    else if (diametro <= 1.4 && diametro > 0.8){
        console.log("la rueda es para un vehiculo liviano");
    }
    else{
        console.log("la rueda es para un vehiculo pequeño");
    }
});