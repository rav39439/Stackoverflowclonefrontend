import React from 'react';
import { useEffect } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { fetchAllQuestions } from './actions/question';
import Myroutes from './Myroutes';
import { Provider, connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchUsers } from './actions/users';
import Navbar from './Pages/Navbar/Navbar';
import { fetchAllmessages } from './actions/users';
import './App.css'

const mapStateToProps=(props)=>{
    return {
        users:props.usersReducer,
        questions:props.questionReducer,
       
    }


}

const mapDispatchToProps=(dispatch)=>({
 
    fetchUsers:()=>{dispatch(fetchUsers())},
    fetchAllQuestions:()=>{dispatch(fetchAllQuestions())},

})


function App(props) {
    const User=useSelector(state=>state.currentUserReducer)

    const currentUser=useSelector(state=>state.currentUserReducer)

console.log("dddddddddddddskufdiadfghsfgh")
    // componentDidMount()

    // {
    
        
    //    console.log(this.props.fetchUsers)
    //    console.log(this.props.fetchAllQuestions)
    //    }
    
const dispatch=useDispatch()
    useEffect(()=>{


       
        dispatch(fetchAllQuestions())

        //
       
     dispatch(fetchUsers())

     //setUsers(allusers)
  
    },[dispatch])


   
return(

   <div className='App'>

<Router>
    <Navbar/>
    <Myroutes/>


    </Router>
     
  
   </div>


)


    }





    export default connect(mapStateToProps, mapDispatchToProps)(App);
    //export default App