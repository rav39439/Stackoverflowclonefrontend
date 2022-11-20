import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Location from '../Location/Location'
import { useSelector } from 'react-redux'

const User = ({user,key}) => {
const navigate=useNavigate()
  const currentUser=useSelector(state=>state.currentUserReducer)

  const coords=Location()
  const handleClick = () => {

    //navigate("/Restaurantitem",{state:props.restaurant,amatches:props.mymatches})
    navigate("/Chat",{state:{_id:user?._id,name:user.name,messages:user.messages}})
}
  return (
    <div>
      
<Link to={`/Users/${user?._id}`} className='user-profile-link'>
<h3>{user?.name.charAt(0).toUpperCase()}</h3>
<h5>{user?.name}</h5>
</Link>

{ 
currentUser?.result?._id!=user?._id?
<div>
<Link to={`/Chat/${user?._id}`} className='user-profile-link'>Chat</Link><br></br>


{/* <button onClick={handleClick}className="btn btn-primary">chat</button> */}



</div>:<div></div>
}

    </div>
  )
}

export default User