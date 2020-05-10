import {useState, useEffect} from 'react'
import {postAPI} from '../utils/api'

export const usePlayer =()=>{
    const [player, setPlayer] = useState(null)


    useEffect(()=>{
        const cachedPlayer = localStorage.getItem('player')
        if(cachedPlayer){
            setPlayer(cachedPlayer)
            submitJoined(cachedPlayer)
        }
    },[])


    const submitJoined = (player)=>{
        if(player!=='viewer'){
            postAPI('join', {name: player })
        }
    }

    const submitLeft = (player)=>{
        if(player!=='viewer'){
            postAPI('left', {name: player })
        }
    }

    const updatePlayer = (name)=>{
        if(player){
            submitLeft(player)
        }
        submitJoined(name)
        setPlayer(name)
        localStorage.setItem('player', name )
    }

    return [player, updatePlayer]
}