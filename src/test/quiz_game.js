quizData = [
    {question:'Which planet is closest to the sun?',choices:['Earth','Mercury','Venus','Jupiter'],correct:'Mercury'},
    {question:'Who is the president of the US?', choices:['Donald Trump', 'Joe Biden','Vladimir Putin','None of these'], correct:'Joe Biden'},
    {question:'Which is the largest mammal?', choices:['Blue whale','Elephant','Cow','Goat'], correct:'Blue whale'}
]

let currentQuestionIndex = 0
let userAnswers = []
let score = 0

//the function to handle how the question and choices will be handled
  function displayQuestion(){
    const questionElement = document.getElementById('question')
    const choicesElement = document.getElementById('choices')

    questionElement.innerHTML = `<p>${quizData[currentQuestionIndex].question}</p>`

    choicesElement.textContent = ''

    for(let choice of quizData[currentQuestionIndex].choices){
        const li = document.createElement('li')
        li.innerHTML = `<p class = 'p-1 w-28 rounded-md'>${choice}</p>`
        li.onclick = () => selectAnswer(choice)
        choicesElement.appendChild(li)
    }
  }

//the function that will handle the selected option
function selectAnswer(selectedChoice){
    userAnswers[currentQuestionIndex] =  selectedChoice;

    document.querySelectorAll('#choices li').forEach(li=>{
        li.style.backgroundColor = 'initial'
    })
    event.target.style.backgroundColor = 'rgb(56, 56, 235)'
  
}

//the function to check the answer given by the user
function checkAnswer(){
    const correctAnswer = quizData[currentQuestionIndex].correct
    if(userAnswers[currentQuestionIndex] === correctAnswer){
        score++
    }
    currentQuestionIndex++
    if(currentQuestionIndex < quizData.length){
        displayQuestion()
    }else{
        displayScore()
    }
}

//the function to handle the showing of user's scores
function displayScore(){
    const scoreElement = document.getElementById('score')
    scoreElement.textContent = `Your score is ${score}/${quizData.length}`
}

//the function to handle how the game quiz will be reset
function reset(){
    currentQuestionIndex = 0
    score = 0
    userAnswers = []
    displayQuestion()
    document.getElementById('score').textContent = ''
}

displayQuestion()