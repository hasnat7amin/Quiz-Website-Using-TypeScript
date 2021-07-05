import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {getQuizDetails} from './services/quizServics';
import { Quiz } from './Types/quizTypes';
import QuestionCard from './Components/QuestionCard';


function App() {
  let [QuizQuestion, setQuizQuestions] = useState<Quiz[]>([])
  let [QuestionNo, setQuestionNo] = useState(0)
  let [Score ,setScore] = useState(0)
  useEffect(() => {
    async function fetchdata (){
      const question: Quiz[]= await  getQuizDetails();
      setQuizQuestions(question)
   
      console.log(QuizQuestion)
    }
    fetchdata()
    console.log(QuizQuestion)
  }, [])
  if(!QuizQuestion.length){
    return <h1>Loading Question ...</h1>
  }
  const nextQuestion = (e:React.FormEvent<EventTarget>, userAnswer: string) =>{
    e.preventDefault()
    
      if(userAnswer == QuizQuestion[QuestionNo].answer){
        setScore(++Score)
      }
    if(QuestionNo !== QuizQuestion.length-1){
      setQuestionNo(++QuestionNo)
    }else{
      alert(Score>6?`Congratlation! You got ${Score} out of 10.`:`Oops! please try again.You got ${Score} out of 10.`)
      setQuestionNo(0)
      setScore(0)
    }
   
    
  }
  return (
    <div className="App">
      <header >

         <QuestionCard option={QuizQuestion[QuestionNo].option} question={QuizQuestion[QuestionNo].question} handleSubmit={nextQuestion} Score={Score}/>
      </header>
    </div>
  );
}

export default App;
