 const questions = [
    {
        question: "Hewan manakah yang paling besar di dunia?",
        answers: [
            { text: "Hiu", correct: false},
            { text: "Paus Biru", correct: true},
            { text: "Gajah", correct: false},
            { text: "Jerapah", correct: false},
        ]
    },
    {
        question: "Negara manakah yang paling besar di dunia?",
        answers: [
            { text: "China", correct: false},
            { text: "Amerika Serikat", correct: false},
            { text: "Indonesia", correct: false},
            { text: "Rusia", correct: true},
        ]
    },
    {
        question: "Hewan manakah yang paling kecil di dunia?",
        answers: [
            { text: "Lalat", correct: false},
            { text: "Semut", correct: true},
            { text: "Nyamuk", correct: false},
            { text: "Kucing", correct: false},
        ]
    },
    {
        question: "Negara manakah yang paling bersih di dunia?",
        answers: [
            { text: "Jepang", correct: false},
            { text: "Denmark", correct: true},
            { text: "Indonesia", correct: false},
            { text: "Australia", correct: false},
        ]
    }
 ];

 const questionElement = document.getElementById("question");
 const answerButton = document.getElementById("answer-buttons");
 const nextbutton = document.getElementById("next-btn");

 let currentQuestionIndex = 0;
 let nilai = 0;

 function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showQuestion();
 }

 function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
 }

function resetState() {
    nextbutton.style.display = "none"
    while(answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbutton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Kamu berhasil menjawab ${score} dari ${questions.length}!`;
    nextbutton.innerHTML = "Mulai lagi";
    nextbutton.style.display = "block";
}


function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextbutton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else{
        startQuiz();
    }
})

 startQuiz();