document.addEventListener("DOMContentLoaded", () => {
    initTimeline()
    initQuiz()
})

// Função para inicializar a linha do tempo
function initTimeline() {
    const timelineEvents = document.querySelectorAll(".timeline-event")
    const prevBtn = document.getElementById("prev-event")
    const nextBtn = document.getElementById("next-event")

    let currentEventIndex = 0

    // Esconder todos os eventos exceto o primeiro
    timelineEvents.forEach((event, index) => {
        if (index !== 0) {
            event.style.display = "none"
        }
    })

    // Botões de navegação
    prevBtn.addEventListener("click", () => {
        timelineEvents[currentEventIndex].style.display = "none"
        currentEventIndex = (currentEventIndex - 1 + timelineEvents.length) % timelineEvents.length
        timelineEvents[currentEventIndex].style.display = "block"

        // Rolar para o topo da seção da linha do tempo
        document.getElementById("linha-tempo").scrollIntoView({ behavior: "smooth", block: "start" })
    })

    nextBtn.addEventListener("click", () => {
        timelineEvents[currentEventIndex].style.display = "none"
        currentEventIndex = (currentEventIndex + 1) % timelineEvents.length
        timelineEvents[currentEventIndex].style.display = "block"

        // Rolar para o topo da seção da linha do tempo
        document.getElementById("linha-tempo").scrollIntoView({ behavior: "smooth", block: "start" })
    })
}

// Função para inicializar o quiz
function initQuiz() {
    const startBtn = document.getElementById("start-quiz")
    const restartBtn = document.getElementById("restart-quiz")
    const quizIntro = document.querySelector(".quiz-intro")
    const quizQuestions = document.querySelector(".quiz-questions")
    const quizResults = document.querySelector(".quiz-results")

    // Dados das questões do quiz
    const quizData = [
        {
            id: 1,
            question: "Qual evento é considerado o marco oficial do início do Modernismo no Brasil?",
            options: {
                a: "Publicação de 'Paulicéia Desvairada' de Mário de Andrade",
                b: "Exposição de Anita Malfatti em 1917",
                c: "Semana de Arte Moderna de 1922",
                d: "Publicação do 'Manifesto Antropófago' de Oswald de Andrade",
            },
            correct: "c",
        },
        {
            id: 2,
            question:
                "Qual obra de Mário de Andrade é considerada uma 'rapsódia' que narra as aventuras do herói sem nenhum caráter?",
            options: {
                a: "Paulicéia Desvairada",
                b: "Macunaíma",
                c: "Amar, Verbo Intransitivo",
                d: "Clã do Jabuti",
            },
            correct: "b",
        },
        {
            id: 3,
            question:
                "Qual manifesto de Oswald de Andrade propunha 'devorar' a cultura estrangeira e transformá-la em algo genuinamente brasileiro?",
            options: {
                a: "Manifesto da Poesia Pau-Brasil",
                b: "Manifesto Antropófago",
                c: "Manifesto Modernista",
                d: "Manifesto Nacionalista",
            },
            correct: "b",
        },
        {
            id: 4,
            question:
                "Quem escreveu a obra 'Paulicéia Desvairada', considerada o primeiro livro de poesia genuinamente modernista do Brasil?",
            options: {
                a: "Mário de Andrade",
                b: "Oswald de Andrade",
                c: "Manuel Bandeira",
                d: "Menotti Del Picchia",
            },
            correct: "a",
        },
        {
            id: 5,
            question: "Em que ano ocorreu a Semana de Arte Moderna?",
            options: {
                a: "1912",
                b: "1922",
                c: "1930",
                d: "1917",
            },
            correct: "b",
        },
        {
            id: 6,
            question: "Qual foi uma das características marcantes da primeira fase do Modernismo?",
            options: {
                a: "Nacionalismo e busca pela identidade brasileira",
                b: "Influência do surrealismo",
                c: "Valorização do academicismo e das formas tradicionais",
                d: "Pessimismo e introspecção",
            },
            correct: "a",
        },
        {
            id: 7,
            question: "Qual movimento literário o Modernismo brasileiro buscou romper?",
            options: {
                a: "Realismo",
                b: "Simbolismo",
                c: "Parnasianismo",
                d: "Romantismo",
            },
            correct: "c",
        },
        {
            id: 8,
            question: "O que o Manifesto Antropófago de Oswald de Andrade defendia?",
            options: {
                a: "A incorporação e adaptação das culturas estrangeiras à cultura brasileira",
                b: "A rejeição completa das influências externas",
                c: "A volta ao classicismo e aos modelos europeus",
                d: "O retorno às tradições indígenas puras",
            },
            correct: "a",
        },
    ]

    // Iniciar o quiz
    startBtn.addEventListener("click", () => {
        quizIntro.style.display = "none"
        quizQuestions.style.display = "block"

        // Gerar as questões do quiz
        generateQuizQuestions()
    })

    // Reiniciar o quiz
    restartBtn.addEventListener("click", () => {
        quizResults.style.display = "none"
        quizQuestions.style.display = "block"

        // Limpar seleções anteriores
        const radioInputs = document.querySelectorAll('input[type="radio"]')
        radioInputs.forEach((input) => {
            input.checked = false
        })

        // Rolar para o topo da seção do quiz
        document.getElementById("quiz").scrollIntoView({ behavior: "smooth", block: "start" })
    })

    // Gerar as questões do quiz
    function generateQuizQuestions() {
        const questionsContainer = document.querySelector(".quiz-questions")

        // Limpar conteúdo anterior
        questionsContainer.innerHTML = ""

        // Adicionar cada questão
        quizData.forEach((q) => {
            const questionDiv = document.createElement("div")
            questionDiv.className = "question"
            questionDiv.setAttribute("data-id", q.id)

            const questionTitle = document.createElement("h4")
            questionTitle.textContent = `Questão ${q.id}`

            const questionText = document.createElement("p")
            questionText.textContent = q.question

            const optionsDiv = document.createElement("div")
            optionsDiv.className = "options"

            // Adicionar opções de resposta
            for (const [key, value] of Object.entries(q.options)) {
                const label = document.createElement("label")

                const input = document.createElement("input")
                input.type = "radio"
                input.name = `q${q.id}`
                input.value = key

                label.appendChild(input)
                label.appendChild(document.createTextNode(` ${value}`))

                optionsDiv.appendChild(label)
            }

            // Montar a questão completa
            questionDiv.appendChild(questionTitle)
            questionDiv.appendChild(questionText)
            questionDiv.appendChild(optionsDiv)

            // Adicionar ao container
            questionsContainer.appendChild(questionDiv)
        })

        // Adicionar botão de enviar
        const submitBtn = document.createElement("button")
        submitBtn.id = "submit-quiz"
        submitBtn.textContent = "Enviar Respostas"
        submitBtn.className = "submit-btn"
        submitBtn.style.backgroundColor = "#005e9e"
        submitBtn.style.color = "white"
        submitBtn.style.border = "none"
        submitBtn.style.padding = "12px 25px"
        submitBtn.style.borderRadius = "4px"
        submitBtn.style.cursor = "pointer"
        submitBtn.style.fontSize = "1rem"
        submitBtn.style.marginTop = "20px"
        submitBtn.style.width = "100%"

        questionsContainer.appendChild(submitBtn)

        // Adicionar evento ao botão de enviar
        submitBtn.addEventListener("click", checkAnswers)
    }

    // Verificar respostas
    function checkAnswers() {
        let score = 0

        quizData.forEach((q) => {
            const selectedOption = document.querySelector(`input[name="q${q.id}"]:checked`)

            if (selectedOption && selectedOption.value === q.correct) {
                score++
            }
        })

        // Mostrar resultados
        document.getElementById("score").textContent = score
        document.getElementById("total").textContent = quizData.length

        // Feedback baseado na pontuação
        const feedbackDiv = document.getElementById("feedback")
        const percentage = (score / quizData.length) * 100

        if (percentage >= 80) {
            feedbackDiv.innerHTML =
                '<p style="color: green">Excelente! Você domina o conteúdo sobre a primeira fase do Modernismo!</p>'
        } else if (percentage >= 60) {
            feedbackDiv.innerHTML =
                '<p style="color: blue">Bom trabalho! Você tem um bom conhecimento, mas pode melhorar em alguns pontos.</p>'
        } else {
            feedbackDiv.innerHTML =
                '<p style="color: red">Continue estudando! Revise o conteúdo para melhorar sua compreensão sobre o Modernismo.</p>'
        }

        // Esconder perguntas e mostrar resultados
        document.querySelector(".quiz-questions").style.display = "none"
        document.querySelector(".quiz-results").style.display = "block"

        // Rolar para o topo da seção do quiz
        document.getElementById("quiz").scrollIntoView({ behavior: "smooth", block: "start" })
    }
}
