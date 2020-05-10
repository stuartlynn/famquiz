import React from 'react'
import './RaceTrack.scss'

export default function RaceTrack({ player, position , submitted}) {

    return (
        <div className='race-track-outer'>
            <h3 className={`${submitted ? 'submitted' :''}`}>{player.name} {!position.alive && <span>are in the slammer</span>} </h3>
            {position.alive ? 
            <div className='race-track'>
                <div className='space'>
                    <img src='/police.png'/>
                </div>
                {[...Array(10)].map((_, index) => (
                    <div key={index} className={`space ${index}`}>
                        {index === position.score &&
                            <img src={player.icon} />
                        }
                    </div>
                ))}
            </div>
            :
            <div className='jail'>
                <div className='bars'>
                    {[...Array(10)].map(()=>
                        <div className='bar'/>
                    )}
                </div>
                <img src={player.icon}/>
            </div>
            }   
        </div>
    )
}