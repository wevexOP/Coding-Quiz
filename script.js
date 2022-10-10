const quizData = [
    {
        question: "Arrays in JavaScript can be used to store:",
        a: "Numbers and Strings",
        b: "Other Arrays",
        c: "Booleans",
        d: "All of the Above",
        correct: "d",
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables",
        a: "Commas",
        b: "Curly Brackets",
        c: "Quotes",
        d: "Parenthesis",
        correct: "c",
    },
    {
        question: "Commonly used data types DO NOT include:",
        a: "Strings",
        b: "Boolens",
        c: "Alerts",
        d: "Numbers",
        correct: "c",
    },
    {
        question: "The condition of an if/else statement is enclosed with:",
        a: "Parenthesis",
        b: "Quotes",
        c: "Curly Brackets",
        d: "Square Brackets",
        correct: "a",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})