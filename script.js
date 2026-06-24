// const { handle } = require("express/lib/application");

const questions=[
  {
    question:"Which is the largest animal in the world?",
    answers:[
    {text:"shark",correct:false},
    {text:"Blue whale",correct:true},
    {text:"Elephant",correct:false},
    {text:"Giraffe",correct:false},
    ]

  },
  {
    question:"What is 5 * 3?",
    answers:[
    {text:"12",correct:false},
    {text:"15",correct:true},
    {text:"8",correct:false},
    {text:"10",correct:false},
    ]

  },
   {
    question:"Which animal says 'Meow'?",
    answers:[
    {text:"Dog",correct:false},
    {text:"Cow",correct:false},
    {text:"Cat",correct:true},
    {text:"Horse",correct:false},
    ]

  },
  {
    question:"How many days are there in a week?",
    answers:[
    {text:"10",correct:false},
    {text:"6",correct:false},
    {text:"5",correct:false},
    {text:"7",correct:true},
    ]

  },
   {
    question:"Which color is the sun usually drawn as??",
    answers:[
    {text:"Blue",correct:false},
    {text:"Yellow",correct:true},
    {text:"Green",correct:false},
    {text:"Black",correct:false},
    ]

  },
];
const questionElement=document.querySelector("#question");
const ansbtn=document.querySelector(".ansBtn");
const nextbtn=document.querySelector("#nextbtn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
  currentQuestionIndex=0;
  score=0;
  nextbtn.innerHTML="Next";
  showQuestion();  
}

function showQuestion(){
  resetState();
  let currentQuestion=questions[currentQuestionIndex];
  let questionNo=currentQuestionIndex+1;
  questionElement.innerHTML=questionNo+". "+currentQuestion.question;

  currentQuestion.answers.forEach(answer=>{
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    ansbtn.appendChild(button);
    
    if(answer.correct){
      button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectAns);
  });
}
function resetState(){
  nextbtn.style.display="none";
  while(ansbtn.firstChild){
    ansbtn.removeChild(ansbtn.firstChild)
  }
}

function selectAns(e){
  const selectbtn=e.target;
  const iscorrect=selectbtn.dataset.correct==="true";
  if(iscorrect){
    selectbtn.classList.add("correct");
    score++;
  }
  else{
    selectbtn.classList.add("incorrect");
  }
  Array.from(ansbtn.children).forEach(button=>{
    if(button.dataset.correct==="true"){
      button.classList.add("correct");

    }
    button.disabled=true;

  })
  nextbtn.style.display="block";
}

function showScore(){
  resetState();
  questionElement.innerHTML=`your scored ${score} out of ${questions.length}!`
  nextbtn.innerHTML="play again";
  nextbtn.style.display="block";
}

function handlenextbtn(){
  currentQuestionIndex++;
  if(currentQuestionIndex<questions.length){
    showQuestion();
  }
  else{
    showScore();
  }
}
nextbtn.addEventListener("click",()=>{
  if(currentQuestionIndex<questions.length){
    handlenextbtn();
  }
  else{
    startQuiz();
  }
})

startQuiz();

