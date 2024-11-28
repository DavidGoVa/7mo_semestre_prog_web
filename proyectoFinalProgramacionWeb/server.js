//se importa express para su uso
const express = require('express');
//se importa mysql para su uso
const mysql = require('mysql');
//se importa body parser para su uso
const bodyParser = require('body-parser');
//se importa path para el direccionamiento de las paginas
const path = require('path');

//se crea la aplicacion
const app = express();
//se asigna el puerto que se utilizará
const port = 3000;

// Configuración de la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'proyectoFinal',
});
//condicion para que por si hay un error, se enseñe, si no, se imprime que se conecto a la base de datos exitosamente
db.connect(err => {
  if (err) throw err;
  console.log('Conectado a la base de datos.');
});

// Middleware que deja que los datos se envien entre paginas como solicitudes http, ñpero con json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal de la pagina
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// metodo para isnertar un nuevo registro
app.post('/create', (req, res) => {
  const { nombre, correo } = req.body;
  const sql = 'INSERT INTO usuarios (nombre, correo) VALUES (?, ?)';
  db.query(sql, [nombre, correo], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Usuario creado exitosamente' });
  });
});

// metodo par a leer todos los registros
app.get('/read', (req, res) => {
  const sql = 'SELECT * FROM usuarios';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// metodo para actualizar un registro
app.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, correo } = req.body;
  const sql = 'UPDATE usuarios SET nombre = ?, correo = ? WHERE id = ?';
  db.query(sql, [nombre, correo, id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Usuario actualizado exitosamente' });
  });
});

// metodo para wliminar un registro
app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM usuarios WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Usuario eliminado exitosamente' });
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
