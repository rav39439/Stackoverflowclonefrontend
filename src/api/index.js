import axios from "axios";
//const API=axios.create({baseURL:'http://localhost:8800'})
const API=axios.create({baseURL:'https://stackoverflowcloneapi.onrender.com'})
export const logIn=(authData)=>API.post('/api/users/login',authData);
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('Profile')){
        req.headers.authorization=`Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})
export const fetchAllUsers=()=>API.get('/api/users/getAllUsers')


export const SignUp=(authData)=>API.post('/api/users/signup',authData);
export const postQuestion=(questionData)=>API.post('/api/questions/Ask',questionData)
export const getAllQuestions=()=>API.get('/api/questions/get')
export const deleteQuestion=(id)=>API.delete(`/api/questions/delete/${id}`)
export const voteQuestion=(id,value,userId)=>API.patch(`/api/questions/vote/${id}`,{value,userId})
export const postAnswer=(id,noOfAnswers,answerBody,userAnswered,userId)=>API.patch(`/api/answer/post/${id}`,{noOfAnswers,answerBody,userAnswered,userId})
export const deleteAnswer=(id,answerId,noOfAnswers)=>API.patch(`/api/answer/delete/${id}`,{answerId,noOfAnswers})
export const apimessages=(chat)=>API.put('/api/users/messages',chat)
export const getmessages=(userid)=>API.get(`/api/users/usermessages/${userid}`)



