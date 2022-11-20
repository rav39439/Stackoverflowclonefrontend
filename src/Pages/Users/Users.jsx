import LeftSidebar from 'src/components/LeftSidebar/LeftSidebar'
import React from 'react'
import './Users.css'
import UsersList from './UsersList'
const Users = () => {
  return (
    <div className='home-container-1'>

<LeftSidebar/>
<div className='home-container-2'>
  <UsersList/>
<></>

</div>
    </div>
  )
}

export default Users