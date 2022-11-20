import React from 'react'
import{Link, uselocation, useNavigate} from 'react-router-dom'
import Questionlist from './Questionlist'
import {useSelector} from 'react-redux'
import './Homemainbar.css'
const Homemainbar = () => {


    const user=useSelector((state)=>(state.currentUserReducer))

const navigate=useNavigate()
    const redirect=()=>{
        alert("login or signup to ask a question")
        navigate('/Auth')

    }
    const checkAuth=()=>{
        if(user==null){
            alert("login or signup to ask a question")
            navigate('/Auth')
        }else{
            navigate('/AskQuestion')
        }
    }
    const questionlist=useSelector(state=>state.questionReducer)
    
    console.log("questionlist")
    console.log(questionlist)
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
    //         askedO7n:"jan 1",
    //         tags:[],
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
    //         askedO7n:"jan 1",
    //         tags:[],
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
    //         askedO7n:"jan 1",
    //         tags:[],
    //         userId:[{
    //             answerBody:"Answer",
    //             userAnswered:'kumar',
    //             answerdOn:"jan 2",
    //             userId:2,

    //         }]
    //     }
    
    // ]
  return (
    <div className='main-bar'>

        <div className='main-bar-header'>

            {
                location.pathname=='/'?<h1>Top Questions</h1>:<h1>All Questions</h1>
            }
          
            <button onClick={checkAuth} className='ask-btn'>Ask a Question </button> <br/>
            {
            questionlist==null?
            <h1>Loading..</h1>:
            <>
        
            <p>{questionlist?.length} questions</p>  <br/>
            <Questionlist questionlist={questionlist}/>
            </>
}
        </div>
    </div>
  )
}

export default Homemainbar