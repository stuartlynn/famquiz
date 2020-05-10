import {useState,useEffect,useRef} from 'react'


export const useQuiz = ()=>{
    const [questions,setQuestions] = useState([])
    const [questionNumber, setQuestionNumber] = useState(0)

    const fetchQuestions = ()=>{ 
        fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple')
            .then(r=>r.json())
            .then(({results})=>{
                console.log("GOT QUESTIONS ",results)
                setQuestions(results)
            })
        }

    useEffect(()=>{
        fetchQuestions()
    },[])

    useEffect(()=>{
        if(questionNumber===9-1){
            console.log("FETCHING MORE")
            fetchQuestions()
        }
    },[questionNumber])

    const nextQuestion = () => {
        setQuestionNumber(questionNumber+1)
    }
    return [ questions[questionNumber], nextQuestion]
}