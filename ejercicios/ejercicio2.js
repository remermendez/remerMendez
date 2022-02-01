const prompt = require('prompt');

prompt.start();

prompt.get(['nota'], function (err , result){
    //
    // Log the results.
    //
    let nota = result.nota;

    if (nota < 3){
        console.log("tu nota es deficiente");
    }
    else if (nota >= 3 && nota < 5){
        console.log("tu nota es insuficiente")
    }
    else if (nota == 5 && nota < 6){
        console.log("tu nota es suficiente");
    }
    else if (nota == 6 && nota < 7){
        console.log("tu nota es bien");
    }
    else if (nota >= 7 && nota < 9){
        console.log("tu nota es notable");
    }
    else if (nota >= 9 && nota <= 10){
        console.log("tu nota es sobresaliente");
    }
    else {
        console.log("tu nota no es un numero o se pasa de los numeros 0-10.")
    }
  });