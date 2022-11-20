import React from 'react'

const ProfileBio = ({currentProfile}) => {
  return (
    <div>
        <div>
{
    currentProfile?.tags==[]? (

        <>
        <h4>Tags watched</h4>
        {
            currentProfile?.tags.map((tag)=>{
                <p key={tag}>{tag}</p>
            })
        }
        </>
    ) :(
        <p>0 tags watched</p>
    )
}

</div>

{
    currentProfile?.about ?(
        <>
        
        <h4>about</h4>
        <p>{currentProfile?.about}</p>
        </>
    ) : (
        <p>No bio Found</p>
    )
}
    </div>
  )
}

export default ProfileBio