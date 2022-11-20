import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchAllUsers } from 'src/api'
import { fetchUsers } from 'src/actions/users'
import User from './User'
import './Users.css'
const UsersList = () => {
  
const dispatch=useDispatch()
    // useEffect(()=>{
    //   dispatch(fetchUsers())

    // },[dispatch])
    // const [users,setUsers]=useState([])

  
    const users=useSelector(state=>state.usersReducer)
   // console.log(users)

  

    //onsole.log(users)
  return (
   <>
    <div >
      {
        
        users.map((user)=>{
          <div>
          <h1>{user?.name}</h1>
          <User user={user} key={user?._id}/>
          </div>
        })
      }
    </div>

    <div className='userList-container'>
    {
    users.map((user) =>
      <User user={user} key={user?._id} />
    )}
  </div>
  </>
  )
}

export default UsersList