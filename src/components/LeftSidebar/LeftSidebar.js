import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
const LeftSidebar = () => {
  return (


<div className='left-sidebar'>
    <nav className='side-nav'>
<NavLink to ='/Questions' className='side-nav-links' activeClass='active'>
{/* <img src={Globe} alt="Globe"/> */}
    <p style={{paddingLeft:"10px"}}>Home</p>
</NavLink>
<div className='side-nav-div'>
    <NavLink to='/Questions'>
        {/* <img src={Globe} alt="Globe"/> */}
        <p style={{paddingLeft:"10px"}}>Questions</p>
    </NavLink><br></br>


<NavLink to="/Tags" className='side-nav-links' activeClass='active' style={{paddingLeft:"10px"}}>
<p>Tags</p>

</NavLink><br></br>




<NavLink to="/Users" className='side-nav-links' activeClass='active' style={{paddingLeft:"10px"}}>
<p>Users</p>

</NavLink><br></br>


<NavLink to="/location" className='side-nav-links' activeClass='active' style={{paddingLeft:"10px"}}>
<p>Location</p>
</NavLink>
</div><br></br>
    </nav>


    </div>
  )
}

export default LeftSidebar