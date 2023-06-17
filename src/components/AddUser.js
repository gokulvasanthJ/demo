import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function AddUser({users,setUsers}) {

  let navigate = useNavigate()

  let [name,setName]=useState("")
  let [email,setEmail]=useState("")
  let [mobile,setMobile]=useState("")
  let [dob,setDob]=useState("")

  let handleSubmit=()=>{
    let newUser={name,email,mobile,dob}
    let newArray=[...users]
    newArray.push(newUser)
    setUsers(newArray)
    navigate('/dashboard')
  }

  

  return <>
  <div className='container-fluid'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Number" onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date Of Birth</Form.Label>
        <Form.Control type="Date" placeholder="Password" onChange={(e)=>setDob(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
     
    </Form>
    </div>
  


  
  </>
}

export default AddUser