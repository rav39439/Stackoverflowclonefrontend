import React from 'react'

const Avatar = (children, backgroundcolor,px,py,
    padding,
    color,
    borderRadius,
    fontSize,
    textAlign,cursor) => {


    const style={
        backgroundcolor,
        padding:`${px} ${py}`,
        color:color||'black',
        borderRadius,
        fontSize,
        textAlign:'center',
        cursor:cursor||'null'
    }
  return (
    <div>{children}</div>
  )
}

export default Avatar