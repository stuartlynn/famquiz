
const API_URL = 'http://localhost:5000'

export const postAPI = (endpoint, body)=>{
    console.log("POSITNG to ", API_URL+'/getaway/'+endpoint )
    return fetch(API_URL+'/getaway/'+endpoint,{
        method: 'POST',
        body: JSON.stringify(body),
        headers:{
            'Content-Type': 'application/json'
        }
    })
}

export const getAPI = (endpoint='')=>{
    return fetch(API_URL+'/getaway/'+endpoint).then(r=>r.json())
}