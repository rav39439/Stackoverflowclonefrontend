import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import io, { Socket } from "socket.io-client";
import moment from 'moment';
import { fetchAllmessages } from 'src/actions/users';
import Messagetab from 'src/components/Message/Messagetab';
import LeftSidebar from 'src/components/LeftSidebar/LeftSidebar'
import { sendmessages } from 'src/actions/users';
import Messagenewtab from 'src/components/Messagenewtab/Messagenewtab';
import Mychat from 'src/components/Mychat/Mychat';
const socket=io("http://localhost:8800", { transports: ['websocket', 'polling', 'flashsocket'] })

const Chat = () => {
   
const dispatch=useDispatch()
const user=useSelector(state=>state.currentUserReducer)
var userid=user?.result?._id
    const messages=[]
    const {id}=useParams()
    const [chat ,setchat]=useState([])
    const users=useSelector(state=>state.usersReducer)
    const currentProfile=users.filter((user)=>user?._id==id)[0]
    console.log("partnerid")
console.log(currentProfile?._id)
    const currentUser=useSelector(state=>state.currentUserReducer)
    
    console.log(currentUser?.result?._id)

    const message=useSelector(state=>state.currentUserMesssages)
    //const message=JSON.parse(localStorage.getItem('Profile')).result.messages
console.log("dsgagfgsdgfagfjdgsj")
console.log(message)

useEffect(()=>{

    socket.emit("online",currentUser)
    if(JSON.parse(localStorage.getItem('Profile'))==null){
        alert("login to see the messages")
    } else{
        dispatch(fetchAllmessages(JSON.parse(localStorage.getItem('Profile')).result._id))

    }

},[currentUser?.result?._id],[id])



socket.on('online',function(message){
    console.log(message)
})



    socket.on('partner message',function(message){
messages.push({

    name:currentProfile?.name,
    info:message,
    time:moment(new Date()).fromNow()
})
var name=currentProfile?.name
var info=message
var time=moment(new Date()).fromNow()
var partnerid=id
var userid=currentUser?.result?._id
var partnername=currentUser?.result?.name
setchat([...chat,{name,info,time,partnerid,userid,partnername}])
    })



    socket.on('mymessage',function(message){
        messages.push({
           
            name:currentUser?.result?.name,
            info:message,
            time:moment(new Date()).fromNow()
        })
        var name=currentUser?.result?.name
        var info=message
        var time=moment(new Date()).fromNow()
        var partnerid=id
        var partnername=currentProfile?.name
var userid=currentUser?.result?._id
        setchat([...chat,{name,info,time,partnerid,userid,partnername}])
    })


const handleMessage=(e)=>{
    e.preventDefault()

 var information=e.target.children[0].value
    var name=currentUser?.result?.name
    
    var time=new Date()
    var partnerid=id
    var partnername=currentProfile?.name
var userid=currentUser?.result?._id
    socket.emit('message',e.target.children[0].value,id)
    dispatch(sendmessages({name,information,time,partnerid,userid,partnername}))

}


  return (

    <div style={{display:"flex"}} >

<LeftSidebar/>

<div style={{marginLeft:"300px"}}>



    <div className="users" style={{backgroundColor:"blue",width:"500px"}}>

    <h1>Messages</h1>
{


message.map(({to,from,name,message,time},index) => (

(to==currentProfile?._id)||(to==currentUser?.result?._id)&&(from==currentUser?.result._id)||(from==currentProfile?._id)?

 <Messagenewtab to={to} from={from} name={name} message={message} newdata={index} time={time} partnerid={currentProfile?._id} userid={currentUser?.result?._id} />
:<div></div>

 ))}


{/* {
chat.map(({name,info,time},index) => (
 <Messagetab name={name} message={info} newdata={index} time={time}/>
 ))} */}


 <Mychat chat={chat}/>

</div>





</div>
<div style={{marginLeft:"200px"}}>
<p>{currentUser?.result?.name}</p>
to
<p>{currentProfile?.name}</p><br></br>
<br></br>
<br></br>
<br></br>






<form onSubmit={(e)=>{handleMessage(e)}}>
        <textarea name="" id="" cols="30" rows="10"></textarea><br></br>
        <br></br>
        <input type="submit"className="post-ans-btn" value="Message" onChange={(e)=>{setmessage(e.target.value)}}/>
    </form>
</div>
    </div>
  )
}

export default Chat