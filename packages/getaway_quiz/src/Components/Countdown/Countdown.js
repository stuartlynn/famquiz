import React, {useEffect,useState} from 'react'
import './Countdown.scss'


export default function Countdown(){
    const [time, setTime ] = useState(5)

    useEffect(()=>{
        if(time >0){
             setTimeout(()=> setTime(Math.max(0,time-1)), 1000)
        }
        // return ()=> clearInterval(inter)
    },[time])
    return (
        <div className='countdown'>
            <h3>Next Question in...</h3>
            <h1>{time}</h1>
        </div>
    )
}