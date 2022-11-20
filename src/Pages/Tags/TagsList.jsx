import React from 'react'

const TagsList = ({tag,key}) => {
  return (
    <div className='tag'>
      {key}
      <h5>{tag.id}</h5>
        <h5>{tag.tagname}</h5>
        <p>{tag.tagDesc}</p>


    </div>
  )
}

export default TagsList