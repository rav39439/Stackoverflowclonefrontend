import React from 'react'
import{Switch,Route,Routes} from 'react-router-dom'
import Tabl from './components/Table'
import Form from './components/Form'
const Myroutes = () => {
  return (



    <div>

        <Routes>
        <Route exact path="/Adduser"element={<Form/>}/>
        
        <Route exact path="/data"element={<Tabl/>}/>
        
        </Routes>


    </div>
  )
}

export default Myroutes