import { stringify } from "querystring";
import { QuestionType, Quiz } from "../Types/quizTypes"
const suffleArray = (arr: any[])=>{
    return [...arr].sort(()=>0.5 - Math.random())
    
}
 
export const getQuizDetails = async () :Promise<Quiz[]> =>{
    const res = await fetch('https://opentdb.com/api.php?amount=10&diffculty=easy&type=multiple')
    let {results} = await res.json()
    const quiz = results.map((item:QuestionType)=>{
        return {
            question: item.question,
            answer: item.correct_answer,
            option: suffleArray(item.incorrect_answers.concat(item.correct_answer))
        }
    })
    console.log(quiz)
    return quiz
}
