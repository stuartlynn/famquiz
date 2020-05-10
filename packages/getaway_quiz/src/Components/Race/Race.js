import React from 'react'
import RaceTrack from '../RaceTrack/RaceTrack'
export default function Race({ players, positions, answers }) {
    console.log("players are ", players, 'positions are ', positions)
    return (
        <div className='race'>
            {players.map((player) => (
                <RaceTrack 
                player={player} 
                position={positions.find(position => position.name===player.name)} 
                key={player.name}
                submitted= {answers.find(ans => ans.name=== player.name)} />
            ))}
        </div>
    )
}