import React from 'react'
import { Link } from 'react-router-dom'
import LeftSidebar from 'src/components/LeftSidebar/LeftSidebar'
import moment from 'moment'
import './Homemainbar.css'
const Questions = ({question,key}) => {
    console.log(question)

  return (

<>
    
    <div className='display-ans-container mt-5'>

<div className='display-votes-ans'>
<p>{question?.upVote.length-question?.downVote.length}</p>
    <p>votes</p>
    
</div>

<div className='display-votes-ans'>

    <p>{question?.answer.length}</p>
    <p>answers</p>
    
</div>

<div className='display-question-details'>

   
    <Link to ={`/Questions/${question?._id}`} className='question-title-link'>{question?.questionTitle}</Link>
    <div className='display-tags-time'>

     {/* <div className='display-tags'>
            {
                question?.tags.map((tag)=>{
                    <p key={tag}>{tag}</p>
                })
            }  */}

<div className='display-tags'>
    {
    question?.questionTags?.map((tag) =>(
        
    <p key={tag}>{tag}</p>
    ))

}
  
        </div>
        <p className='display-time'>
            asked {moment(question?.postedOn).fromNow()} by {question?.userPosted}
        </p>
    </div>
    
</div>


    </div>
    </>
  )
 
}

export default Questions