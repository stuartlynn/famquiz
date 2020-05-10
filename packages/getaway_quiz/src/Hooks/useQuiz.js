import {useState,useEffect} from 'react'
import {getAPI,postAPI} from '../utils/api'

export const useQuiz = ()=>{
    const [quizState,setQuizState] = useState(null)

    useEffect(()=>{
        const interval = setInterval(()=>{
            getAPI().then(state=>{
                setQuizState(state)
            })
        }, 500)
        return ()=> clearInterval(interval)
    },[])

    const submitAnswer = (player,bet,correct,answer )=>{
        postAPI('answer', {name: player, bet, correct, answer })
    }

    return [quizState, submitAnswer]
}