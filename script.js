function calculateLevel() {
    let score = 0;

    const form = document.forms['levelTestForm'];

    // Evaluar la pregunta 1
    if (form['q1'].value === 'goes') {
        score += 1;
    }

    // Evaluar la pregunta 2
    if (form['q2'].value === 'watched') {
        score += 1;
    }

    // Evaluar la pregunta 3
    if (form['q3'].value === 'two years') {
        score += 1;
    }

    // Calcular el nivel basado en el puntaje
    let level = '';
    if (score === 3) {
        level = 'B1 (Intermediate)';
    } else if (score === 2) {
        level = 'A2 (Elementary)';
    } else if (score === 1) {
        level = 'A1 (Beginner)';
    } else {
        level = 'Below A1';
    }

    // Mostrar el resultado
    document.getElementById('result').innerText = `Your English Level: ${level}`;
}
