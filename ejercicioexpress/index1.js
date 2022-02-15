const express = require('express')
const app = express();
const path = require('path');


app.use(express.static('cascada'))

function respuesta(request, response){
    response.send('hola mundo1')

}

app.get('/', respuesta)

app.get('/index', function(request, response){
    response.sendFile(path.join(__dirname, 'HypertText/index1.html'))
})

app.listen(3000)
console.log("aplicacion corriendo en el puerto 3000")