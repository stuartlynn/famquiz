import React from 'react'
import './PlayerBet.scss'

import {RadioGroup, RadioButton, ReversedRadioButton} from 'react-radio-buttons'


export default function PlayerBet({currentBet, onBetChange}){
    return(
        <div className='player-bet'>
            <RadioGroup onChange={ (v) => onBetChange(v)} horizontal value={currentBet}>
                <RadioButton value="coast">
                    Coast
                </RadioButton>
                <RadioButton value="accelerate">
                    Accelerate
                </RadioButton>
                
            </RadioGroup>
        </div>
    )
}