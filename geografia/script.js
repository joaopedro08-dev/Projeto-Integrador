function checkAnswers() {
  const form = document.getElementById('quizForm');
  const resultDiv = document.getElementById('result');
  const answers = {
    q1: 'c',
    q2: 'c',
    q3: 'a',
    q4: 'b',
    q5: 'b',
    q6: 'a',
    q7: 'a',
    q8: 'a',
    q9: 'a',
    q10: 'a'
  };

  let score = 0;
  const userAnswers = new FormData(form);
  let feedback = "";

  for (let i = 1; i <= 10; i++) {
    const questionKey = `q${i}`;
    const userAnswer = userAnswers.get(questionKey);
    const correctAnswer = answers[questionKey];

    if (userAnswer === correctAnswer) {
      score++;
      feedback += `<p><strong>Pergunta ${i}:</strong> ✅ Correta!</p>`;
    } else if (userAnswer === null) {
      const correctLabel = form.querySelector(`input[name="${questionKey}"][value="${correctAnswer}"]`).parentElement.innerText;
      feedback += `<p><strong>Pergunta ${i}:</strong> ❌ Não respondida. Resposta correta: <em>${correctLabel}</em></p>`;
    } else {
      const correctLabel = form.querySelector(`input[name="${questionKey}"][value="${correctAnswer}"]`).parentElement.innerText;
      feedback += `<p><strong>Pergunta ${i}:</strong> ❌ Errada. Resposta correta: <em>${correctLabel}</em></p>`;
    }
  }

  resultDiv.innerHTML = `
    <h3>Resultado</h3>
    <p>Você acertou <strong>${score}</strong> de 10 perguntas.</p>
    ${feedback}
  `;
  resultDiv.style.fontSize = '1.1em';
  resultDiv.style.fontWeight = 'normal';
  resultDiv.style.textAlign = 'left';
  resultDiv.style.marginTop = '30px';
  resultDiv.style.padding = '20px';
  resultDiv.style.backgroundColor = '#f9f9f9';
  resultDiv.style.border = '1px solid #ccc';
  resultDiv.style.borderRadius = '10px';
}
