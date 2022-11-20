import React from 'react'
import LeftSidebar from 'src/components/LeftSidebar/LeftSidebar';
import Homemainbar from '../Home/Homemainbar';
import RightSidebar from 'src/components/RightSidebar/RightSidebar';
const Questions = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
<div className='home-container-2'>
  <Homemainbar/>
  <RightSidebar/>
  
</div>
    </div>
  )
}
export default Questions;