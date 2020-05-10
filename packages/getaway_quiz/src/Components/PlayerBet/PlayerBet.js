import React from 'react'
import './PlayerBet.scss'

import {RadioGroup, RadioButton, ReversedRadioButton} from 'react-radio-buttons'


export default function PlayerBet({currentBet, onBetChange}){
    return(
        <div className='player-bet'>
            <RadioGroup onChange={ (v) => onBetChange(v)} horizontal value={currentBet}>
                <RadioButton value="coast">
                    Coast (+/- 1)
                </RadioButton>
                <RadioButton value="accelerate">
                    Accelerate (+/-2)
                </RadioButton>
                
            </RadioGroup>
        </div>
    )
}