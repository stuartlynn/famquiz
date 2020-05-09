import React from 'react'
import './RaceTrack.scss'

export default function RaceTrack({ player, position }) {
    console.log('player pos ', position)
    return (
        <div className='race-track-outer'>
            <h3>{player.name}</h3>
            <div className='race-track'>
                <div class='space'>
                    <img src='/police.png' width />
                </div>
                {[...Array(10)].map((_, index) => (
                    <div class='space'>
                        {index === position &&
                            <img src={player.icon} />
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}