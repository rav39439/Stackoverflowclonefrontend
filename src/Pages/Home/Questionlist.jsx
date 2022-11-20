import React from 'react'
import Questions from './Questions'
const Questionlist = ({questionlist}) => {
  return (
    <>
{/* {
 
    questionlist?.data?.map((question)=>{
      <div>
        <h1>Question</h1>
        <Questions question={question} key={question._id}/>

        </div>
    })
} */}




<ul>
    {
    questionlist?.data?.map((question) =>(
      <Questions question={question} key={question._id} />
    ))}
  </ul>

    </>
  )
}

export default Questionlist