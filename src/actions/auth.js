import * as api from  '../api/index'
import { setcurrentUser } from './currentUser'

export const signup=(authData,navigate)=>async(dispatch)=>{
try{
const {data}=await api.SignUp(authData)
dispatch({type:'AUTH',data})
dispatch(setcurrentUser(JSON.parse(localStorage.getItem('Profile'))))
navigate('/')
}
catch(err){
console.log(err)
}
}

export const login=(authData,navigate)=>async(dispatch)=>{
try{
    const {data}=await api.logIn(authData)
console.log(authData)
    dispatch({type:'AUTH',data})
    dispatch(setcurrentUser(JSON.parse(localStorage.getItem('Profile'))))
//console.log(data)
    navigate('/')
}catch(err){
    console.log(err)
}
}