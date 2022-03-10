// Questions for Quiz
const quizData = [
    {
        question: 'Google (www.google.com) is a:',
        a: 'Search Engine',
        b: 'Number in Math',
        c: 'Directory of images',
        d: 'Directory of images',
        correct: 'a',
    }, 
    {
        question: 'Which is not an Internet protocol?',
        a: 'HTTP',
        b: 'FTP',
        c: 'STP',
        d: 'IP',
        correct: 'c',
    }, 
    {
        question: 'Another name for a computer chip is:',
        a: 'Execute',
        b: 'Micro chip',
        c: 'Microprocessor',
        d: 'Select',
        correct: 'b',
    }, 
    {
        question: 'Which of the following is not a valid domain name?',
        a: ' www.yahoo.com',
        b: 'www.yahoo.co.uk',
        c: 'www.com.yahoo',
        d: 'www.yahoo.co.in',
        correct: 'c',
    }, 
    {
        question: 'Which one is the Mobile Game?',
        a: 'Valorant',
        b: 'Free Fire',
        c: 'CSGO',
        d: 'Apex Legend',
        correct: 'b',
    },
];

const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');



let currentQuiz = 0;
let score = 0;

loadQuiz();

// To load Quiz Questions 
function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;


}

// To select and check the answer
function getSelected() {

    let answer =  undefined;

    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

// to DeSelect the answer
function deselectAnswers(){
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;

    });

}
// Submit Button
submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();
    if (answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {

            loadQuiz();
    
        }
        else {

            
            quiz.innerHTML= `<h2>You answerd Correctly  ${score}/${quizData.length} questions.</h2> <button id="submit" onclick="location.reload()">Reload</button>`;
        
        }
    }
});