import React from 'react'
import './WinScreen.scss'
export default function WinScreen({winner}){
    return (
        <div className='win-screen'>
            <h1>AND THE WINNER IS!</h1>
            <img src={winner.icon} />
            <h1>{winner.name}</h1>
        </div>
    )
}