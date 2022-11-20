import React from 'react'
import { useState } from 'react'

const EditProfile = ({currentUser,SetSwitch}) => {

    const [name,setName]=useState(currentUser?.result?.name)
    const [about,setAbout]=useState(currentUser?.result?.about)
  return (
    <div>
<h1 className='edit-profile-title'>
    Edit your profile
</h1>

<h2>
    <form className='edit-profile-form'>

        <label htmlFor="name">
            <h3>Display name</h3>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </label>
        <label htmlFor="about">

            <h3>About me</h3>
            <textarea id="about" cols="30" rows="10" value={about} onChange={(e)=>setAbout(e.target.value)}></textarea>
        </label>
        <label htmlFor='tags'>'
        <h3>Watched tags</h3>
        <p>Add tags separated by 1 space</p>
        <input type="text" id="tags" onChange={(e)=>setTags(e.target.value.split(''))}/>
        </label><br></br>

        <input type='submit' value="save-profile" className='user-submit-btn'/><br></br>
        <button type='button' className='user-cancel-btn'onClick={()=>{SetSwitch(false)}}>Cancel</button><br></br>
    </form>
</h2>

    </div>
  )
}

export default EditProfile