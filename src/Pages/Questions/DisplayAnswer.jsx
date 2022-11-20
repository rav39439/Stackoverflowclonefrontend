import React from 'react'
import QuestionDetails from './QuestionDetails'
// import Avtar from '../../components/Avatar/Avatar'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
import { deleteAnswer } from 'src/actions/question'
import moment from 'moment'

const DisplayAnswer = (question) => {
    const User=useSelector(state=>state.currentUserReducer)
const id=useParams()
const dispatch=useDispatch()
    const handleDelete=(answerId,noOfAnswers)=>{
      
        dispatch(deleteAnswer(question.question._id,answerId,noOfAnswers-1))
    }
  return (
    <div>

        {
            Object.values(question)[0]?.answer?.map((ans)=>{


                return(
                <div className='display-ans'key={ans?._id}>
                    <p>{ans?.answerBody}</p>

                    {/* <div className="users">
      { question?.answer?.map((user) => (
        <div className="user">{user}</div>
      ))}
    </div> */}



<div className='question-actions-user'>

    <div>

<button type="button">share</button>

{
    User?.result?._id==ans?.userId && (

    <button type='button'onClick={()=>{handleDelete(ans?._id,ans?.length)}}>Delete</button>)
}


    </div>
    <div>
        <p>answered {moment(ans?.answeredOn).fromNow()}</p>
        <Link to={`/User/${question?.userId}`} className='user-link'style={{color:"#0006d8"}}>
    {/* <Avtar backgroundColor="orange" px="8px" py="5px">{ans.userAnswered.userPosted.charAt(0).toUpperCase()}</Avtar> */}
    <div>
        {question?.userPosted}
    </div>
</Link>
    </div>
</div>
</div>
                )
            })
        }
    </div>
  )
}

export default DisplayAnswer