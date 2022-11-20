const questionReducer=(state=[],actions)=>{
    console.log("actions data")
    console.log(actions.payload)
    switch(actions.type){
        case "POST_QUESTION":
            return({...state,data:actions.payload})
   case "FETCH_ALL_QUESTIONS":
    return({...state,data:actions.payload})
case "POST_ANSWER":
    return {...state}
    default:
        return state
    }
}
export default questionReducer