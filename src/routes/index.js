const express = require('express');

// Esto nos permite crear multiples rutas y mantenerlas x separado
const router = express.Router();

// Routes/Rutas
router.get('/', (req, res) => {
    // Cada vez que alguien entra a la ruta inicial le envio el index.html
    // res.sendFile(path.join(__dirname, '/views/index.html'));

    // Usamos el motor de plantilla
    res.render('index.html', {title: 'First Website'});  // Le pasamos un dato a la view

    // La constante __dirname continen la ruta de ubicación del archivo
    // console.log(__dirname);
    // Usamos path para unir el directorio sin importar el Sistema Operativo
    // console.log(path.join(__dirname, '/views/index.html'))
});

router.get('/contact', (req, res) => {
    res.render('contact.html', {title: 'Contact Page'});
})


module.exports = router;