import React from 'react';

//import Navbar from '../../../Tutorial/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import Myroutes from './Myroutes'

import Form from './components/Form'
//import Table from './components/Table';
import Tabl from './components/Table';
import Newnavbar from './components/Newnavbar';
function App() {

return(

   <div className='App'>

    <h1>Assignment</h1>
{/* <Router>
    <Newnavbar/>
    <Myroutes/>


    </Router>
      */}
<Tabl/>
    <Form/>
  
   </div>


)


    }





export default App;
//export default App