import * as api from '../api/index'

export const fetchUsers=()=>async(dispatch)=>{
    try{
        console.log("All users are")
        const {data}=await api.fetchAllUsers()
           console.log(data)
            dispatch({type:'FETCH_USERS',payload:data})

    }
    catch(err){
        console.log(err)
    }
}


export const sendmessages=(chat)=>async(dispatch)=>{
    try{
        const {data}=await api.apimessages(chat)
           console.log(data)

    }
    catch(err){
        console.log(err)
    }
}


export const fetchAllmessages=(userid)=>async(dispatch)=>{
    try{
        const{data} =await api.getmessages(userid)

        

        dispatch({type:'FETCH_MESSAGES',payload:data})
    } catch(err){
        console.log(err)
    }
}