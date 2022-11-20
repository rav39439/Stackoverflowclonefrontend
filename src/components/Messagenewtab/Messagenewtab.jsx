import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import moment from 'moment';
const Messagenewtab = ({to,from,name,message,newdata,time,}) => {
  


    const user=useSelector(state=>state.currentUserReducer)



  let isuser=(user?.result?.name==name)
  return (





    <>

    <div className='border bg-light'style={{overflowY:scroll}}>



 <p key={newdata} style={{marginLeft:isuser?"0px":"100px"}}><span style={{fontSize:"20px"}}><b>{name}</b></span>:<span style={{fontFamily:"cursive",fontSize:"24px"}}>{message}</span></p><br></br>
 <span>{moment(time).fromNow()}</span>




    </div>
    </>






    
  )
}

export default Messagenewtab