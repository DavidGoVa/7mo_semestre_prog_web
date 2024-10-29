const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    const reqUrl = url.parse(request.url, true);
    const path = reqUrl.pathname;
    const method = request.method;

    // Respuesta para la ruta principal con botones
    if (path === '/' && method === 'GET') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Servidor Node.js</title>
                <style>
                    body { font-family: Arial, sans-serif; }
                </style>
            </head>
            <body>
                <h1>Bienvenido al servidor</h1>
                <button onclick="location.href='/rutauno'">Ruta Uno</button>
                <button onclick="location.href='/rutados'">Ruta Dos</button>
                <button onclick="location.href='/rutatres'">Ruta Tres</button>
            </body>
            </html>
        `);
    } else if (path === '/rutauno' && method === 'GET') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Ruta Uno</title>
            </head>
            <body>
                <h1>Esta es la ruta 1</h1>
                <button onclick="location.href='/'">Volver</button>
            </body>
            </html>
        `);
    } else if (path === '/rutados' && method === 'GET') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Ruta Dos</title>
            </head>
            <body>
                <h1>Esta es la ruta 2</h1>
                <button onclick="location.href='/'">Volver</button>
            </body>
            </html>
        `);
    } else if (path === '/rutatres' && method === 'GET') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Ruta Tres</title>
            </head>
            <body>
                <h1>Esta es la ruta 3</h1>
                <button onclick="location.href='/'">Volver</button>
            </body>
            </html>
        `);
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/plain');
        response.end('Página no encontrada');
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});
