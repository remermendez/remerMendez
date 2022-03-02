const express = require('express')
const app = express();
const path = require('path');


app.use(express.static('curriculum'))

function respuesta(request, response){
    response.send('hola mundo1')

}

app.get('/', respuesta)

app.get('/index', function(request, response){
    response.sendFile(path.join(__dirname, '/texto/hypert.html'))
})

app.listen(4000)
console.log("aplicacion corriendo en el puerto 4000");