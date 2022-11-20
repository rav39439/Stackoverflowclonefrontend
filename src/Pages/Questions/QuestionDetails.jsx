import React,{useEffect, useState} from 'react'
import Avatar from 'src/components/Avatar'
import moment from 'moment'
import { Link, Navigate, useParams ,useLocation, useNavigate} from 'react-router-dom'
import copy from 'copy-to-clipboard'
import './Questions.css'
import {useSelector,useDispatch} from 'react-redux'
// import Avtar from '../../components/Avatar/Avatar'
import { postAnswer } from '../../../src/actions/question'

import { deleteQuestion,voteQuestion } from '../../../src/actions/question'
import DisplayAnswer from './DisplayAnswer'
const QuestionDetails = () => {
   // const questionlist=useSelector(state=>state.questionReducer)
   const navigate=useNavigate()
const {id}=useParams();
const location=useLocation()
const dispatch=useDispatch()
const [Answer,setAnswer]=useState('')

const User=useSelector(state=>state.currentUserReducer)
const [question,setquestion]=useState({})
const handlePostAns=(e,answerlength)=>{
e.preventDefault()
    if(User==null){
        alert("login or register")
        Navigate('/Auth')
    }else{
        if(Answer==''){
            alert('Enter an answer before submitting')

        }
        else{
            dispatch(postAnswer({id,noOfAnswers:answerlength+1,answerBody:Answer,userAnswered:User.result.name,userId:User.result._id}))
        }
    }
}
const handleShare=()=>{
    copy(url+location.pathname)
    alert('copied url:'+url+location.pathname)
}

const handledelete=(e)=>{
    e.preventDefault()

    console.log(id)
    console.log(User.result._id)
    dispatch(deleteQuestion(id,navigate))
}



    // const questionlist=[
    //     {
    //         id:1,
    //         votes:3,
    //         upVote:3,
    //         downVote:2,
    //         noOfAnswers:2,
    //         questionTitle:"what is function?",
    //         questionBody:"It meant to be",
    //         questionTags:["java","nodejs","reactjs","mongodb"],
    //         userPosted:"mano",
    //         askedOn:"jan 1",
    //         userId:[{
    //             answerBody:"Answer",
    //             userAnswered:'kumar',
    //             answerdOn:"jan 2",
    //             userId:2,

    //         }]
    //     },
    //     {
    //         id:2,
    //         votes:3,
    //         upVote:3,
    //         downVote:2,
    //         noOfAnswers:2,
    //         questionTitle:"what is function?",
    //         questionBody:"It meant to be",
    //         questionTags:["java","nodejs","reactjs","mongodb"],
    //         userPosted:"Rocky",
    //         askedOn:"jan 1",
    //         userId:[{
    //             answerBody:"Answer",
    //             userAnswered:'kumar',
    //             answerdOn:"jan 2",
    //             userId:2,

    //         }]
    //     },{
    //         id:3,
    //         votes:3,
    //         upVote:3,
    //         downVote:2,
    //         noOfAnswers:2,
    //         questionTitle:"what is function?",
    //         questionBody:"It meant to be",
    //         questionTags:["java","nodejs","reactjs","mongodb"],
    //         userPosted:"Rambo",
    //         askedOn:"jan 1",
    //         userId:[{
    //             answerBody:"Answer",
    //             userAnswered:'kumar',
    //             answerdOn:"jan 2",
    //             userId:2,

    //         }]
    //     }
    
    // ]

    const questionlist=useSelector(state=>state.questionReducer)



    const handleUpVote=(e)=>{
        e.preventDefault()
        console.log("upvote")
        if(User){
            dispatch(voteQuestion(id,'upvote',User.result._id))

        }
        else{
alert("login to upvote")
        }
      
    }

    const handleDownVote=(e)=>{
        e.preventDefault()
        if(User){
            dispatch(voteQuestion(id,'downvote',User.result._id))

        }
        else{
            alert("Login to downvote")
        }

    }
  return (
    <div className='question-details-page'>


{
    

    questionlist?.data?.filter(question => question._id==id).map(question => { 
      return(
              <div key={question._id}>

<section className='question-details-container'>
<h1>{question.questionTitle}</h1>
<div className='question-details-container-2'>

    <div className='question-votes'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8AAAA6Ojr7+/uysrLZ2dmvr6+zs7PY2Njc3NzCwsLu7u7x8fHPz8+ioqLT09OAgIAKCgpOTk5bW1uKiorm5uZubm6VlZVjY2M/Pz8YGBgmJiZFRUUn+g54AAADzUlEQVR4nO2d21rqQAxGpyIiIFBARZT3f869C1Vb2pkmmdSZ9PvXJXKYRZImXKQ6BwAAAAAAAAAAAAAAAAAAAAAAAAAwTdar1/J1tU59jNF4ey9uvL+lPso4LIpfFqkPMwbbosk29XH0eSzaPKU+kDb3gpNT7ApOTLFPcFKK/YITUvQJFsVj6qPp8OQVnEgUFwHBSUTRn6ITiWI4ghNQHIqgeUWKoGlFmqBhRaqgWUW6oFFFjqBJxeE20cZc6w+NapOIIjeC5qLIq0GDUZQJGlKUCppRlAsaUYwRNKEYJ2hAUdImTCnGRjB7xfgIVmTc+v2j2udX56GvT3tRDERwd+k8dNn5n56pYqAG5+6h89iDWxpTDAg+u1mP4czNTSkGI+gxdMu9HcWwoM/QUKIGLjLP1d99hmYSNfCLfn59gtfQSKIGIngTDBiGEjWb1j9QgxUBQwO1OFSDFSHD7GvRH8H9/OdJQcPMa5GQom7IMOtEDU4yvwwYZpyotAgOG2arSBUcNsy0FsmCBMMsa5HSJmoIhqFETdT6B0e1BhTD7BJ1eFRrQDLMbICj12AFzTCrKyqxD35DNMxIkTSqNaAaZlOLvBR1DMNMmgYzRR3HMItEZUeQZZhBFFltooZjmLwWBRFkGiaOImNUa8AzTDrAcUa1BkzDhIkqqcEKrmGyROW3iRq2YaKmIRYUGCZR5I5qDQSGCWpR1CZqJIZ/XouyNlEjMvzjRBW2iRqZ4Z9GcRUlKDUMRXEVq9RmHScoNgwp6q6El97PGa7BCrGhe/Z+chkjdM+L78I92CZq5Ib+prF/kQt12Pi+R6JgjKE/UTdSnR62ns+gpaiLM/Qqam68nyIF4wx9iieJiof+GFJT1MUaempRM4a9dbhkvEGkYX/r16zDvmspPUVdvGFfoqpeS3v6ISNFnYJhT6Kq9sPuTMMTVDDsRlH5Njd3cylTUMPwXlF5Lm3/eNpzLjJXNAzbiTrCHW6Wh+83f2efTcfQzb5vUlQc2N8xiV15PF8+TpI31zH8/zWfPi7nY7kTvJSI5FTX1ykZxpxhXDQN8wSG9oGhfWBoHxjaB4b2gaF9YGgfGNoHhvaBoX1gaB8Y2geG9oGhfWBoHxjaB4b2gaF9YGgfGNoHhvaBoX1gaB8Y2geG9oGhfWBon9m5Y3ielqE7dgyPqY+kTHeBUXd9MD3df/Uw4u5SGg53gofUB1Lnfld5nPW6pLTvbzPCgmR6mou26iuuebAub2uu+1J5STkjXjbb03ajukcPAAAAAAAAAAAAAAAAAAAAAAAAAJAR/wA63ieBmH4PbgAAAABJRU5ErkJggg==" width="18"alt=''className='votes-icon' onClick={(e)=>{handleUpVote(e)}}/>
        <p>{question.upVote?.length-question.downVote?.length}</p>

        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAACWlpalpaX5+fng4ODU1NTn5+fr6+vx8fHu7u719fUwMDB+fn6goKDa2trNzc0NDQ0VFRWurq66urpCQkJSUlJubm5nZ2ddXV0jIyPHx8e2trbAwMAhISE2NjZ7e3uHh4eOjo5LS0tyjdTbAAADYklEQVR4nO3a6VLqQBRFYVEGBRVBcUDE6f3f8SqFmmF36L4S0tta31+b1FmKSI4cHQEAAACAheNe0UnX47SAQn8U+qPQH4X+KPRHoT8K/VHoj0J/FPqj0B+F/ij0R6E/Cv1R6I9CfxT6o9Afhf4o9EehPwr9UeiPQn8U+qPQH4X+KPRHoT8K/VHoj0J/FPqj0B+F/ij0R6E/Cv1R6I9CfxT6o9Afhf4o9EehPwr9UeiPQn8U+qPQH4X+KPRHoT8K/VHoj0J/FPqj0B+F/ij0R6E/CrN31TttPpBUOOhN9zfafgw/ph40nkgp3H21gxtsxm4cKqFwuDky2u+IvzPazt301IovfNye2fG0P6TR9+DD8KHowqevM7Oz/Y/6f8aFyR+Dp2ILVz+H5pM2xk13NiuO/hQ6Fll4XTy17rczcprJvDR67yZwLq7wpHyx8wwS+8texbU+GFV4Wb3Yc3uTR5qcV2cKJcYUHtcvtuj8p3hbH6p3qQ5GFL6Kaz20O36MBzHWsTi3u/BFXOm+7fFj3InBXuvHdhaq61y0P34M9b2vj7ar8D7uG9WNCzHcS/XQjkL1ZH87xPBxXsV4d5UzzYXqBUv9NnfmTQxYeZFoLHwXj5evyN0Rf8kqL/RNhc/i0dltAWrvRj7cFg+EC/viXUPonVGXrsWYi8LXg4WTtXhk8A18l1Zi0MLbylDhmU1g4da14OfmIFB4Kh7UdCPdrUcx7PIrUReOxEPyDfxcKdatt7sIWThQgZlt2cqGYuDZePMlVTi1CwzMvNkLikL1/chriagEn3f1QvWc3v7AsyZfO6aiUL0urbNZIDY5nYnRh7VC9bdl2fnKIs5YJU7Lb+tWN+JMDpu1OJPa/u1D+f5I3Uwsdl85G/UVY4T3rqdO0lf3Q80yWKqlWSQGZrFUS6N+08KqOw8LavXypwL1+kzLZC2aTq1AlWzWounUGrsuq61hKrUOr8psa5hKrcPLstsaplK74qJV1wP+ntoV/wj9T9yK2hV/yXRrmOokGBj+bIoZtQ7/lPHWMJVahzd/RsyOuqPPfGuYqr52yn5rmKq6Oszog4f7UtoVzy22hqkKictMPnS4b9/rcJ+tYartOrz7j6q1Z/PvUKe1aLrxvPzxhT9obLpzAgAAAAAAAAAAB/MPtDofC02BkCgAAAAASUVORK5CYII=" width="18"alt=''className='votes-icon'onClick={(e)=>{handleDownVote(e)}}/>
    </div>

    <div style={{width:"100%"}}>

        <p className='question-body'>{question.questionBody}</p>
        {/* <div className='question-details-tags'>
            {
                question.questionTags.map((tag)=>{
                    <p key={tag}>{tag}</p>
                })
            }
        </div> */}
        <div className='question-action-user'>
            <div>
                <button type="button"onClick={handleShare}>share</button>
                {
                    User?.result?._id==question?.userId ?(

                        <button type="button" onClick={(e)=>{handledelete(e)}}>Delete</button>
                    ):<p></p>
                }
            </div>
            <div>
                <p>asked {moment(question.askedOn).fromNow()}</p>
<Link to={`/Users/${question.userId}`} className='user-link'style={{color:"#0006d8"}}>
    {/* <Avtar backgroundColor="orange" px="8px" py="5px">{question.userPosted.charAt(0).toUpperCase()}</Avtar> */}
    <div>

    {question.userPosted.charAt(0).toUpperCase()}
        {question.userPosted}
    </div>
</Link>
            </div>
        </div>
    </div>
</div>
</section>
{
    question.answer.length!==0 && (
        <section>
            <h3>{question.answer.length} answers</h3>
            <p>{ <DisplayAnswer question={question} key={question?._id}/>
}</p>
        </section>
    )
}
<section className='post-ans-container'>

    <h3>Your Answer</h3>
    <form onSubmit={(e)=>{handlePostAns(e,question.answer.length)}}>
        <textarea name="" id="" cols="30" rows="10"onChange={(e)=>{setAnswer(e.target.value)}}></textarea>
        <input type="submit"className="post-ans-btn" value="post your answer"/>
    </form>
<div>
    Browse other questions tagged
  
    
    <div className='question-details-tags'>
    {
    question?.questionTags?.map((tag) =>
    <p key={tag}>{tag}</p>
    )}
  
        </div>
    
    or
    <Link to ='/AskQuestion' style={{textDecoration:"none"}}>Ask you question</Link>

    </div>
</section>
        </div>
      )
     })
} 


    </div>
  )
}

export default QuestionDetails