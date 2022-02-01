const prompt = require('prompt');

prompt.start();

prompt.get(['edad'], function (err , result){
    let edad = result.edad;

    if (edad > 18){
        console.log("ya puedes conducir");
    }
    else{
        console.log("no puedes conducir");
    }
});