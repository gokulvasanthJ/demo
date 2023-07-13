import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect ,useContext} from 'react';
import { useNavigate ,useParams} from 'react-router-dom';
import { UsersContext } from '../App';


function AddUser() {
  let userContext=useContext(UsersContext)
  console.log('Context',userContext)

  let navigate = useNavigate()
  let params = useParams()
  

  let [name,setName]=useState("")
  let [email,setEmail]=useState("")
  let [mobile,setMobile]=useState("")
  let [dob,setDob]=useState("")
  
  let handleSubmit=()=>{
    let newUser={name,email,mobile,dob}
    let newArray=[...userContext.users]
   {if(params.id!==undefined)
   {newArray.splice(params.id,1,newUser)}
   else{newArray.push(newUser)}}
   userContext.setUsers(newArray)
    navigate('/dashboard')
  }
//useEffect:
  // useEffect(()=>{
  //  console.log("trigger useEffect") entha state change analum trigger agum.

  // })//Trigger when a state changes(not array ([])present so, it's dependencies.)

  // useEffect(()=>{
  //   console.log("trigger useEffect")
 
  //  },[])//Triggered onlu for the  first time when the component is loading({[]-->this means dependency) one time than triggeragum.

// useEffect(()=>{
//   console.log("Trigger useEffect")
// },[email])//namma mention pannirukkarastate variable chnge ana mattum trigger agum.

useEffect(()=>{
  if(params.id!==undefined){
    setEmail(userContext.users[params.id].email)
    setMobile(userContext.users[params.id].mobile)
    setDob(userContext.users[params.id].dob)
    setName(userContext.users[params.id].name)
 }
  else{
    setName("")
    setEmail("")
    setMobile("")
    setDob("")
  }
},[])

  return <>
  <div className='container-fluid'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value ={name} onChange={(e)=>userContext.setName(e.target.value)} />        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="email" value={email} onChange={(e)=>userContext.setEmail(e.target.value)}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Number" value={mobile} onChange={(e)=>userContext.setMobile(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date Of Birth</Form.Label>
        <Form.Control type="Date" placeholder="Password" value={dob} onChange={(e)=>userContext.setDob(e.target.value)}/>
      </Form.Group>

      <Button variant="primary"  onClick={()=>userContext.handleSubmit()}>
        Submit
      </Button>
     
    </Form>
    </div>
  


  
  </>
}

export default AddUser