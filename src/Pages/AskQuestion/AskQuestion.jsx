import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import './AskQuestion.css'
import { askQuestion } from 'src/actions/question';
const AskQuestion = () => {

   // const user=null;
   const User=useSelector((state)=>(state.currentUserReducer))

   const dispatch=useDispatch()
   const [questionTitle,setQuestionTitle]=useState('')
   const [questionBody,setQuestionBody]=useState('')
   const [questionTags,setQuestionTags]=useState('')

    const navigate =useNavigate()
   const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(askQuestion({questionTitle,questionBody,questionTags,userPosted:User.result.name,userId:User.result._id},navigate))
   }

   const handleEnter=(e)=>{
    if(e.key=='Enter'){
        setQuestionBody(questionBody+"\n")
    }
   }
  return (
    <>
    {
 
        <div className='ask-question'>
            <div className='ask-ques-container'>
                <h1>Aks a public Question</h1>
                <form onSubmit={(e)=>{handleSubmit(e)}}>
                    <div className='ask-form-container'>
                        <label htmlFor='ask-ques-title'>
                        <h4>Title</h4>
                        <p>Be specific and imagine you 're asking a question to another person</p>
                        <input type="text"id="ask-ques-title"onChange={(e)=>{setQuestionTitle(e.target.value)}}/>
                        </label>

                        <label htmlFor='ask-ques-body'>
                        <h4>Body</h4>
                        <p>Include all the informatiion that someone need to answer your question</p>
                        <textarea name="" id="ask-ques-body" cols="30" rows="10" onChange={(e)=>{setQuestionBody(e.target.value)}} onKeyPress={handleEnter}></textarea>
                      
                        </label>

                        <label htmlFor='ask-ques-tags'>
                        <h4>Tags</h4>
                        <p>Add upto 5 tags to describe what your question is about</p>
                        <input type="text"id="ask-ques-tags" onChange={(e)=>{setQuestionTags(e.target.value.split(' '))}}/>
                        </label>
                    </div>
                    <input type="submit" value="Review your question"/>
                </form>
            </div>

        </div>
    }
    
    </>
  )
}

export default AskQuestion