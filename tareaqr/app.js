const express = require('express');
const bodyParser = require('body-parser');
const QRCode = require('qrcode');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para la página de inicio
app.get('/', (req, res) => {
    res.render('index');
});

// Ruta para la página 1
app.get('/pagina1', (req, res) => {
    res.render('pagina1', { qrCodeUrl: null });
});

// Generar el QR después de recibir el formulario
app.post('/generarQR', (req, res) => {
    const { nombre, id, carrera, semestre, turno, colorFavorito } = req.body;
    const texto = `Nombre: ${nombre}\nID: ${id}\nCarrera: ${carrera}\nSemestre: ${semestre}\nTurno: ${turno}\nColor Favorito: ${colorFavorito}`;
    
    QRCode.toDataURL(texto, (err, url) => {
        if (err) return res.send('Error al generar el código QR');
        res.render('pagina1', { qrCodeUrl: url });
    });
});

// Ruta para la página 2 (calculadora)
app.get('/pagina2', (req, res) => {
    res.render('pagina2');
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
