import LeftSidebar from 'src/components/LeftSidebar/LeftSidebar'
import React from 'react'
import QuestionDetails from './QuestionDetails'
import RightSidebar from 'src/components/RightSidebar/RightSidebar'

const DisplayQuestions = () => {
  return (
    <div className='home-container-1'>
        <LeftSidebar/>
<div className='home-container-2'>
    <QuestionDetails/>
    <RightSidebar/>
</div>
    </div>
  )
}

export default DisplayQuestions