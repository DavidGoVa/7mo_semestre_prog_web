const preguntas = [
    { pregunta: "¿Cuánto es 5 + 7?", respuesta: "12" },
    { pregunta: "¿Cuánto es 9 - 4?", respuesta: "5" },
    { pregunta: "¿Cuánto es 8 * 6?", respuesta: "48" },
    { pregunta: "¿Cuánto es 15 / 3?", respuesta: "5" },
    { pregunta: "¿Cuánto es 7 + 6?", respuesta: "13" },
    { pregunta: "¿Cuál es la capital de Francia?", respuesta: "Paris" },
    { pregunta: "¿Cuáto es 1+1?", respuesta: "2" },
    { pregunta: "¿Quién interpretó a Jack Sparrow en 'Pirates of the Caribbean'?", respuesta: "Johnny Depp" },
    { pregunta: "¿Como se llama el profe?", respuesta: "Aaron" },
    { pregunta: "¿Cuanto es 12 * 12?", respuesta: "144" }
];

let preguntaActual = 0;
let respuestasCorrectas = 0;

document.getElementById('iniciar').addEventListener('click', function() {
    document.getElementById('iniciar').classList.add('d-none');
    document.getElementById('contenido').classList.remove('d-none');
    mostrarPregunta();
});

document.getElementById('siguiente').addEventListener('click', function() {
    preguntaActual++;
    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        document.getElementById('resultado').textContent = `Cuántas acertaste: ${respuestasCorrectas}`;
        document.getElementById('titulo').classList.add('d-none');
        document.getElementById('contador').classList.add('d-none');
        document.getElementById('respuesta').classList.add('d-none');
        document.getElementById('siguiente').classList.add('d-none');
    }
});

function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];
    document.getElementById('titulo').textContent = pregunta.pregunta;
    document.getElementById('respuesta').value = '';
    document.getElementById('resultado').textContent = '';
    document.getElementById('siguiente').classList.add('d-none');

    let tiempo = 15;
    const contadorElemento = document.getElementById('contador');
    const intervalo = setInterval(() => {
        contadorElemento.textContent = `Tiempo restante: ${tiempo} segundos`;
        tiempo--;

        if (tiempo < 0) {
            clearInterval(intervalo);
            evaluarRespuesta();
        }
    }, 1000);

    document.getElementById('respuesta').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            evaluarRespuesta();
        }
    });
}

function evaluarRespuesta() {
    const respuesta = document.getElementById('respuesta').value.trim();
    const pregunta = preguntas[preguntaActual];
    if (respuesta.toLowerCase() === pregunta.respuesta.toLowerCase()) {
        document.getElementById('resultado').textContent = 'BIEN';
        respuestasCorrectas++;
    } else {
        document.getElementById('resultado').textContent = 'MAL';
    }
    document.getElementById('siguiente').classList.remove('d-none');
}
