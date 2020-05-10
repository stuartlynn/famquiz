import React, {useState} from 'react';
import './App.scss';
import Race from './Components/Race/Race';
import PlayerBet from './Components/PlayerBet/PlayerBet'
import {useQuiz} from './Hooks/useQuiz.js'
import {usePlayer} from './Hooks/usePlayer.js'

import PlayerSelectScreen from './Components/PlayerSelectScreen/PlayerSelectScreen'
import GameScreen from './Components/GameScreen/GameScreen'
import WinScreen from './Components/WinScreen/WinScreen';

function App() {
  const [player, setPlayer] = usePlayer(null)
  const [bet, setBet] =  useState("coast")
  const [quizState, submitAnswer]  = useQuiz()



  const onSubmitAnswer = (answer)=>{
    
    submitAnswer(player, bet ,answer === quizState.currentQuestion.correctAnswer ,answer )
  } 


  return (
    
    <div className="App">
      { (quizState && quizState.currentState === 'wait_to_start') && 
        <PlayerSelectScreen players={quizState.players} 
                            selectedPlayer={player} 
                            onPlayerSelect={setPlayer}/>
      }
      { (quizState && ['show_question', 'show_answer'].includes(quizState.currentState) ) &&
        <GameScreen bet={bet} onSetBet ={setBet} onSubmitAnswer={onSubmitAnswer} quizState={quizState} player={player} />
      }
      {(quizState && quizState.currentState === 'show_winner') &&
        <WinScreen winner={quizState.winner}/>
      }
      {!quizState &&
        <h1>Loading...</h1>
      }

    </div>
  );
}

export default App;
