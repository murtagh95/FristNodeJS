const express = require('express');
const path = require('path');


// Configuraciones
const app = express();
// Defino una variable 
app.set('port', 3000);
// Configuro las views
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');  // Informamos el motor de plantilla a utilizar


// middlewares / Funciones que se ejecutan antes de las rutas



// routes/Rutas
app.use(require('./routes/index'));


// static files/ Archivos estaticos
// Creamos una carpeta que sera accesible desde el navegador
app.use(express.static(path.join(__dirname, 'public')))



// Escuchando al servidor
app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
});



