import React from 'react'
import MultipleChoiceQuestion from '../MultipleChoiceQuestion/MultipleChoiceQuestion'
import Race from '../Race/Race'
import PlayerBet from '../PlayerBet/PlayerBet'
import Countdown from '../Countdown/Countdown'

import './GameScreen.scss'

export default function GameScreen({quizState, player, onSubmitAnswer, bet, onSetBet}){
    const playerAnswer  = quizState.currentAnswers.find(ans => ans.name === player)
    const playerScore   = quizState.scores.find(s => s.name === player)
    console.log("player score ", playerScore)
    return (
        <div className='race-screen'>
            <Race players={quizState.players} 
                positions={quizState.scores}
                answers = {quizState.currentAnswers} />
                { (quizState.currentState === 'show_question' && playerScore.alive) && 

                    <>
                     {playerAnswer ?
                        <div className='submitted-answer'>
                            <h3>You answered </h3> 
                            <h1>{playerAnswer.answer}</h1>
                            <h3>At speed</h3>
                            <h1> {bet}</h1>
                        </div>
                     
                     :
                     <div className='question-entry'>
                         
                        <MultipleChoiceQuestion 
                            question={quizState.currentQuestion} 
                            onSubmit={onSubmitAnswer}
                        />
                        <PlayerBet 
                            currentBet= {bet} 
                            onBetChange={onSetBet} 
                            />
                            </div>
                     }
                     </>
                }

                { (quizState.currentState === 'show_question' && !playerScore.alive) &&
                    <h1>You got caught by the police and locked up</h1>
                }

                {quizState.currentState ==='show_answer' &&
                    <div className='answers'>
                        
                        <h3>The correct Answer was</h3>
                        <h1>{quizState.currentQuestion.correctAnswer}</h1>
                        <div className='user-answers'>
                            {quizState.currentAnswers.map((user)=>(
                                <div className={`user-answer ${user.correct ? 'correct' : ''}`} >
                                    <h3>{user.name}</h3>
                                    <h1 className={`${user.correct ? 'correct' : ''}`}>{user.answer}</h1>
                                </div>
                            ))}
                            </div>
                            <Countdown />             
                     </div>
                } 
      </div>

    )
}