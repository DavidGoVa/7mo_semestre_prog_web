const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Configuración de la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'proyectoFinal',
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado a la base de datos.');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Crear un registro
app.post('/create', (req, res) => {
  const { nombre, correo } = req.body;
  const sql = 'INSERT INTO usuarios (nombre, correo) VALUES (?, ?)';
  db.query(sql, [nombre, correo], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Usuario creado exitosamente' });
  });
});

// Leer todos los registros
app.get('/read', (req, res) => {
  const sql = 'SELECT * FROM usuarios';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Actualizar un registro
app.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, correo } = req.body;
  const sql = 'UPDATE usuarios SET nombre = ?, correo = ? WHERE id = ?';
  db.query(sql, [nombre, correo, id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Usuario actualizado exitosamente' });
  });
});

// Eliminar un registro
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
