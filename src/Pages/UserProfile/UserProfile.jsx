import React, { useEffect, useState } from 'react'
import moment from 'moment'
import LeftSidebar from 'src/components/LeftSidebar/LeftSidebar'
import { useParams } from 'react-router-dom'
import './UserProfile.css'
import ProfileBio from './ProfileBio'
import { useSelector } from 'react-redux'
import EditProfile from './EditProfile'
const UserProfile = () => {
    const {id}=useParams()

const users=useSelector(state=>state.usersReducer)
    const currentUser=useSelector((state)=>state.currentUserReducer)
    console.log(currentUser)
    const currentProfile=users.filter((user)=>user._id==id)[0]

    const [Switch,SetSwitch]=useState(false)

const Changeswitch=()=>{
    SetSwitch(true)
}
  return (
    <div className='home-container-1'>

        <LeftSidebar/>
        <div className='home-container-2'>

            <section>

                <div className='user-details-container'>
                    <div className='user-details'>
                        {/* <Avatar "> */}
                        <p className="username">{currentProfile?.name.charAt(0).toUpperCase()}</p>
                        {/* </Avatar> */}
                        <div className='user-name'>
                            <h1>{currentProfile?.name}</h1>
                            Joined {moment(currentProfile?.joinedOn).fromNow()}
                                                </div>
                    </div>

                    <div>
                        {currentProfile.about}
                    </div>
                    
                    {
                        currentUser?.result._id==id &&(
                            <button type='button' onClick={Changeswitch} className='edit-profile-btn'>

                                Edit Profile
                            </button>
                        )
                    }
                </div>
                {
                    Switch ? (
                        <EditProfile currentUser={currentUser} SetSwitch={SetSwitch}/>
                    ):(
                        <ProfileBio currentProfile={currentProfile}/>
                    )
                }
            </section>
        </div>
    </div>
  )
}

export default UserProfile