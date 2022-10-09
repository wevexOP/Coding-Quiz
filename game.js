const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = []
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Arrays in JavaScript can be used to store',
        choice1: 'Numbers and Strings',
        choice2: 'Other Arrays,',
        choice3: 'Boolean',
        choice4: 'All of the Above',
        answer: 4,
    },
    {
        question: 'String values must be enclosed within ____ when being assigned to variables',
        choice1: 'Commas',
        choice2: 'Curly Brackets',
        choice3: 'Quotes',
        choice4: 'Parenthesis',
        answer: 3,
    },
    {
        question: 'Commonly used data types DO NOT include',
        choice1: 'Strings',
        choice2: 'Booleans',
        choice3: 'Alerts',
        choice4: 'Numbers',
        answer: 3,
    },
    {
        question: 'The condition of an if/else statement is enclosed with',
        choice1: 'Quotes',
        choice2: 'Curly Brackets',
        choice3: 'Parenthesis',
        choice4: 'Square Brackets',
        answer: 3,
    },
    
];

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionsCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    preogressText.innderText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
    progressBarFull.style.width = '${(questionCounter/MAX_QUESTIONS) * 100}%'

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innderText - currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innderText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true

}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selctedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout (() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})