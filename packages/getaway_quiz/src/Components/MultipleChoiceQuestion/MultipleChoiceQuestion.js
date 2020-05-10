import React from 'react'
import "./MultipleChoiceQuestion.scss"


export default function MultipleChoiceQuestion({question, onSubmit}){
    
    return(
        <div className='multiple-choice-question'>
            <h3 className='category'>{question.difficulty} - {question.category}</h3>
            <h2 className='question'>{question.question}</h2>
            <div className='answers'>
                {question.answers.map(answer=> <button key={answer} onClick={()=>onSubmit(answer)} >{answer}</button>)}
            </div>
        </div>
    )
}