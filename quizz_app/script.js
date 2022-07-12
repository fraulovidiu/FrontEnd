const quizData = [
    {
        question: 'How old is your dog?',
        a: '10',
        b: '198',
        c: '2',
        d: '0.5',
        correct: 'c'
    }, {
        question: 'What car do you like?',
        a: 'BMW',
        b:' Mercedes-Benz',
        c: 'Volvo',
        d: 'Audi',
        correct:'a',
    }, {
        question: 'What is 7 x 8?',
        a: '7',
        b: '8',
        c: '56',
        d: '100',
        correct:'c',
    }, {
        question: 'How many corners are in a circle?',
        a: '1',
        b: '2',
        c: '3',
        d: '0',
        correct: 'd',
    }
];
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submitBtn');

// let currentQuestion = 0;
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData [currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
// check to see the answer
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if ( currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }

});
