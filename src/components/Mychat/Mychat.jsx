import React from 'react'
import Messagetab from '../Message/Messagetab'
const Mychat = ({chat}) => {
  return (
    <div className='border bg-light'>

{
chat.map(({name,info,time},index) => (
 <Messagetab name={name} message={info} newdata={index} time={time}/>
 ))}



    </div>
  )
}

export default Mychat