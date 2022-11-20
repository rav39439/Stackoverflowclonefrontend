import React from 'react'
import TagList from './TagsList'
import LeftSidebar from 'src/components/LeftSidebar/LeftSidebar'
import './Tags.css'
const Tags = () => {

    const tagsList=[
        {
           id:6,
           tagname:"ReactJS",
           tagDesc:"Reactjs is a library for building frontend interfaces"

        },
        {
           id:1,
           tagname:"JavaScript",
           tagDesc:"JavaScript is a library for building frontend interfaces"

    },
        {
           id:2,
           tagname:"AngularJS",
           tagDesc:"Angularjs is a library for building frontend interfaces"

    },
        {
           id:3,
           tagname:"Android",
           tagDesc:"Android is a Google operating system used for developing applications for smartphones"

        },
        {
           id:4,
           tagname:"css",
           tagDesc:"css is a represenational style sheet that is used for describing look and formatting html and xml"

        },
        {
           id:5,
           tagname:"nodejs",
           tagDesc:"server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services"

        }



]
  return (
    <>
    <div className='home-container-1'>
<LeftSidebar/>
<div className='home-controller-2'>

    <h3>Tags</h3>
    <p>A tag is a keyword or label that categorizes your questioin with other , similar questions.</p>
    <p>Using the right tags makes it easir for others to find and answer your questions</p>
    <div className='tags-list-container'>

        {
            tagsList.map((tag)=>{
                <TagList tag={tag} key={tagsList.id}/>
            })
        }


    </div>

    <div className='userList-container'>
    {
    tagsList.map((tag) =>
      <TagList tag={tag} key={tag?.id} />
    )}
  </div>
</div>        
    </div>
    </>
  ) 


  }
  export default Tags

  