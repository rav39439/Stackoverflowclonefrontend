import React from 'react'
import {Table,Button,Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap'
import axios from 'axios'
import { useState,useEffect } from 'react';

import user from './data';



const Tabl = () => {
  let a=[]
  let b=[]

  const [currentstate, setcurrentstate]=useState({

    selected:"",
    ID:"",
    username:"",
    phoneno:"",
    Email:"",
    Hobby:""
  }
  )




  const data=[]

const [mydata,setmydata]=useState([])

  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);



  useEffect(()=>{
    async function fetchData() {
 
    try {
      const res = await axios.get("http://localhost:8800/api/users/getdata");
  
      console.log(res.data)
      
        res.data.map((elem,index)=>{
          b.push(elem)
        })
        setmydata(b)

    } catch (err) {
     console.log(err)
    }
   
  }
fetchData()
    
},[])







const handleUpdate=async(e)=>{
  e.preventDefault()

  const updateduser={
    username:e.target.children[1].children[1].value,
    Email:e.target.children[2].children[1].value,
     phoneno:e.target.children[3].children[1].value,
    Hobby:e.target.children[4].children[1].value,
    selected:"false",
  
  }

  
  try{
    const res = await axios.put(`http://localhost:8800/api/users/updateuser/${e.target.children[0].children[1].value}`,updateduser );
  console.log("data is updated")
  
  res.data.map((elem,index)=>{
    b.push(elem)
  })
  setmydata(b)

  }
   
  catch(err){
    
  }

  setModal1(!modal1)

}





  const toggle = () => setModal(!modal);


const handleAdd=async(e)=>{
  e.preventDefault()
 


const newUser={
  username:e.target.children[0].children[1].value,
  Email:e.target.children[1].children[1].value,
   phoneno:e.target.children[2].children[1].value,
  Hobby:e.target.children[3].children[1].value,
  selected:"false",

}
  try {
    const res = await axios.post("http://localhost:8800/api/users/postuser",newUser);


      console.log("request is send")
      

      res.data.map((elem,index)=>{
        b.push(elem)
      })
      setmydata(b)
  
   
  } catch (err) {
   console.log(err)
  }

  setModal(!modal)
}




  const toggle1 = (id) => {
    

    mydata.map((elem)=>{
      if(elem._id==id){
        

currentstate.Email=elem.Email;
currentstate.Hobby=elem.Hobby;
currentstate.ID=elem._id
currentstate.phoneno=elem.phoneno
currentstate.selected=elem.selected;
currentstate.username=elem.username;
      } 
      
    })

    setModal1(!modal1);
  }


  const toggle2 = (id) => {
    
    mydata.map((elem)=>{
      if(elem._id==id){
        
     
currentstate.Email=elem.Email;
currentstate.Hobby=elem.Hobby;
currentstate.ID=elem._id
currentstate.phoneno=elem.phoneno
currentstate.selected=elem.selected;
currentstate.username=elem.username;
      } 
      
    })
    setModal2(!modal2)
  
  };


const handledelete=async(id)=>{


  try{
    const res = await axios.delete(`http://localhost:8800/api/users/deleteuser/${id}`);
    
    res.data.map((elem,index)=>{
      b.push(elem)
    })
    setmydata(b)
  }
   
  catch(err){
    
  }
  setModal2(!modal2)
}



  const handleSend=async()=>{
    let c=[]
    mydata.map((elem)=>{
      if(elem.selected=="true"){
        console.log(elem)
      c.push(elem)
      } 
      
      
    })

    console.log(c)


    try {
      const res = await axios.post("http://localhost:8800/api/users/senddata",c);
  
  
       alert(res.data)
       
    
     
    } catch (err) {
     console.log(err)
    }
  
  }


const handleChange=(e)=>{
  console.log(e.target.value)
mydata.map((elem)=>{
  if(elem._id==e.target.value){
    if(elem.selected=="false"){
      elem.selected="true"
      return elem
    }
    else {
      elem.selected="false"
      return elem
    } 
  } 
  
})


}




  return (

    <>
    <div className='bg-light mt-5 border'>
<Table
>
  <thead>
    <tr>
      <th>
      Select
      </th>
      <th>
        ID
      </th>
      <th>
        Name
      </th>
      <th>
        Phoneno
      </th>
      <th>
        Email
      </th>
      <th>
        Hobbies
      </th>
      <th>
        Action
      </th>
    </tr>
  </thead>
  <tbody>


 

      
      

{mydata?.map((d,index) => (
 <tr>
 <th scope="row">
 <div class="form-check">
<input class="form-check-input" type="checkbox" defaultValue={d._id} id="flexCheckDefault"onChange={(e)=>{handleChange(e)}}/>
<label class="form-check-label" for="flexCheckDefault">

</label>
</div>
 </th>
 <th scope="row">
   {d._id}
 </th>
 <td>
   {d.username}
 </td>
 <td>
   {d.phoneno}
 </td>
 <td>
   {d.Email}
 </td>
 <td>
   {d.Hobby}
 </td>
 <td>
  

 <div>
<Button
color="primary"
onClick={(e)=>{toggle1(d._id)}}>
Update
</Button>
</div>

<div>
<Button
color="primary mt-2"
onClick={(e)=>toggle2(d._id)} >
Delete
</Button>
</div>
 </td>
</tr>


))}

  </tbody>
</Table>



    </div>


<div>



<Button color="primary" onClick={toggle}>
  Add
</Button>
<Modal isOpen={modal} toggle={toggle} >
  <ModalHeader toggle={toggle}>Modal title</ModalHeader>
  <ModalBody>
  <form onSubmit={(e)=>{handleAdd(e)}}>
 
  <div class="form-group">
    <label for="exampleInputPassword1">Username</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter username" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Enter Email" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Phoneno</label>
    <input type="text" class="form-control" id="exampleInputPassword1" pattern="[7-9]{1}[0-9]{9}" placeholder="Enter Phoneno" required />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Hobby</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Phoneno" required />
  </div>
  
  <button type="submit" class="btn btn-primary">Add</button>
</form>
  </ModalBody>
  <ModalFooter>
   
  </ModalFooter>
</Modal>



<Modal isOpen={modal1} toggle={toggle1} >
  <ModalHeader toggle={toggle1}>Modal title</ModalHeader>
  <ModalBody>
  
  <form onSubmit={(e)=>{handleUpdate(e)}}>
  <div class="form-group">
    <label for="exampleInputEmail1">ID</label>
    <input type="text" class="form-control"name="ID" id="exampleInputEmail1" placeholder="Enter ID" defaultValue={currentstate.ID} readOnly/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Username</label>
    <input type="text" class="form-control" name="username" id="exampleInputPassword1" placeholder="Enter username"defaultValue={currentstate.username} />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input type="email" class="form-control" name="Email" id="exampleInputPassword1" placeholder="Enter Email"defaultValue={currentstate.Email} />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Phoneno</label>
    <input type="text" class="form-control" name="phoneno" id="exampleInputPassword1" pattern="[7-9]{1}[0-9]{9}" placeholder="Enter Phoneno" defaultValue={currentstate.phoneno} />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Hobby</label>
    <input type="text" class="form-control" name="Hobby" id="exampleInputPassword1" placeholder="Enter Hobby" defaultValue={currentstate.Hobby} />
  </div>
  
  <button type="submit" class="btn btn-primary">Update</button>
</form>




  </ModalBody>
  <ModalFooter>
   
  </ModalFooter>
</Modal>


<Modal isOpen={modal2} toggle={toggle2} >
  <ModalHeader toggle={toggle2}>Modal title</ModalHeader>
  <ModalBody>
  <button type="click" class="btn btn-primary"onClick={(e)=>{handledelete(currentstate.ID)}}>Delete</button>

  </ModalBody>
  <ModalFooter>
   
  </ModalFooter>
</Modal>
</div>



<Button color="primary mt-2" onClick={handleSend}>
  send
</Button>

</>


  )
}

export default Tabl