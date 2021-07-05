export type QuestionType = {
    category: String
    correct_answer:String
    difficulty: String 
    incorrect_answers: String[]
    question: String
    type: String
}

export type Quiz = {
    question: String
    answer: String
    option: string[]
}