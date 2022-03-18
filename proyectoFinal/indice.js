const express = require('express')
const app = express();
const path = require('path');


app.use(express.static('informacion'))

function respuesta(request, response){
    response.send('hola mundo1')

}

app.get('/', respuesta)


app.get('/maqueta', function(request, response){
    response.sendFile(path.join(__dirname, '/maqueta/marckup.html'))
});

app.get('/people', function(request, response){
    response.sendFile(path.join(__dirname, '/maqueta/marckup2.html'))
});

app.get('/index', function(request, response){
    response.sendFile(path.join(__dirname, '/maqueta/index.html'))
});

app.get('/ingresos', function(request, response){
    response.sendFile(path.join(__dirname, '/maqueta/ingresos.html'))
});

app.get('/gastos', function(request, response){
    response.sendFile(path.join(__dirname, '/maqueta/gastos.html'))
});

app.listen(4000)
console.log("aplicacion corriendo en el puerto 4000");