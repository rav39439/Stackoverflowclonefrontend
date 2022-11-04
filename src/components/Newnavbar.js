import React from 'react'
import { Link } from 'react-router-dom'
const Newnavbar = () => {
  return (
    <div>
 <nav>
    <div className='mynavbar'>



      <Link to="/Adduser">

        Adduser
      </Link>
      <Link to="/data" style={{marginLeft:"50px"}}>

        Userdata
      </Link>
    
    
</div>
</nav>
    </div>
  )
}

export default Newnavbar