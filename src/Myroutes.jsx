import React from 'react'
import{Switch,Route,Routes} from 'react-router-dom'
import Location from './Pages/Location/Location'
import UserLocation from './Pages/Location/UserLocation'
import Home from './Pages/Home/Home'
import Questions from './Pages/Home/Questions'
import Auth from './Pages/Auth/Auth'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestions from './Pages/Questions/DisplayQuestions'
import Tags from './Pages/Tags/Tags'
import UserProfile from './Pages/UserProfile/UserProfile'
import Users from './Pages/Users/Users'
import Chat from './Pages/Chat/Chat'
import { useSelector } from 'react-redux'
const Myroutes = () => {
 
  return (



    <div>

        <Routes>
        <Route exact path="/"element={<Home/>}/>
        <Route exact path="/Questions"element={<Home/>}/>

        <Route exact path="/Auth"element={<Auth/>}/>
        <Route exact path="/AskQuestion"element={<AskQuestion/>}/>
        <Route exact path="/Questions/:id"element={<DisplayQuestions/>}/>
<Route exact path="/Tags" element={<Tags/>}/>

<Route exact path="/Users/:id" element={<UserProfile/>}/>
<Route exact path="/Chat/:id" element={<Chat/>}/>
{/* <Route exact path="/Chat" element={<Chat/>}/> */}
<Route exact path="/Users" element={<Users/>}/>
<Route exact path="/location" element={<UserLocation/>}/>
        </Routes>


    </div>
  )
}

export default Myroutes