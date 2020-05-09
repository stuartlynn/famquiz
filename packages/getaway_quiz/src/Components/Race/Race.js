import React from 'react'
import RaceTrack from '../RaceTrack/RaceTrack'
export default function Race({ players, positions }) {
    console.log("players are ", players)
    return (
        <div className='race'>
            {players.map((player) => (
                <RaceTrack player={player} position={player.position} key={player.name} />
            ))}
        </div>
    )
}