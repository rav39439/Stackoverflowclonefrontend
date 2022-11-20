import React from 'react'
import LeftSidebar from 'src/components/LeftSidebar/LeftSidebar'
import RightSidebar from 'src/components/RightSidebar/RightSidebar'
import Homemainbar from './Homemainbar'
import './Homemainbar.css'
const Home = () => {

  console.log("This is HOME")
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

export default Home