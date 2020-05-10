import easy from './Easy'
import normal from './Normal'
import hard from './Hard'

const Entities = require('html-entities').XmlEntities;
 
const entities = new Entities();
 

const changeFormat = (question)=>({
    question:entities.decode(question.question),
    answers: [entities.decode(question.correct_answer), ...question.incorrect_answers.map(ans => entities.decode(ans))],
    difficulty: question.difficulty,
    type: question.type,
    category: question.category,
    correctAnswer: entities.decode(question.correct_answer)
})

export default {
    easy: easy.map(changeFormat),
    normal: normal.map(changeFormat),
    hard : hard.map(changeFormat)
}