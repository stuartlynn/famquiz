import React from 'react'
import './PlayerSelectScreen.scss'

export default function PlayerSelectScreen({players, onPlayerSelect, selectedPlayer}){

    const selectPlayer = (name)=>{
        if( !players.find(p=>p.name === name).joined){
            onPlayerSelect(name)
        }
    }
    return(
        <div className='player-select-screen'>
            {selectedPlayer ?
            <h1>Waiting for others to join</h1>
            : 
             <h1>Select your player</h1>
            }

            <div className='players'>
                {players.map(player=>
                    <div onClick={()=>selectPlayer(player.name)} className={`player ${player.joined && 'joined'} ${selectedPlayer === player.name ? 'selected' : ''} `}>
                        <img src={player.icon} />
                        <h3>{player.name}</h3>
                    </div>  
                )}
            </div>
        </div>
    )
}