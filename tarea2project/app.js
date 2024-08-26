function presioname(){
    alert('presionaste el boton');
}

function sumar(){
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let result = numero1 + numero2;
    let resultado = document.getElementById("resultado");
    resultado.textContent = result;
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const heightM = heightCm / 100; // Convertir altura a metros
    const bmi = weight / (heightM * heightM);

    let category = '';
    if (bmi < 18.5) {
        category = 'Bajo peso';
    } else if (bmi < 24.9) {
        category = 'Normal';
    } else if (bmi < 29.9) {
        category = 'Sobrepeso';
    } else {
        category = 'Obesidad';
    }

    document.getElementById('result').innerText = `Tu IMC es ${bmi.toFixed(2)}. Categoría: ${category}`;
}