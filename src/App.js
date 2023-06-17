import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import AddUser from "./components/AddUser";
import Profile from "./components/Profile";
import Task from "./components/Task";
import PendingRequest from "./components/PendingRequest";
import ProfileDetails from './components/ProfileDetails'
import ResetPassword from './components/ResetPassword'
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import { useState } from "react";


function App() {  
 let [users,setUsers]=useState([
  {
    name:"ajay",
    email:"ajay@gmail.com",
    mobile:"9294870987",
    dob:"12/4/2001"
  },
  {
    name:"jana",
    email:"jana@gmail.com",
    mobile:"9294870987",
    dob:"12/4/2001"
  },
  {
    name:"kabilan",
    email:"kabilan@gmail.com",
    mobile:"9294870987",
    dob:"12/4/2001"
  },
  {
    name:"arun",
    email:"arun@gmail.com",
    mobile:"9294870987",
    dob:"12/4/2001"
  } 
  
 ])

 
  return<>
  <BrowserRouter>
  <div id="wrapper">
    <Sidebar/>
    <Routes>
    <Route path="/dashboard" element={<Dashboard users={users} setUsers={setUsers}/>}/>
    <Route path="/add-user" element={<AddUser users={users} setUsers={setUsers}/>}/>
    <Route path="/edit-user/:id" element={<AddUser users={users} setUsers={setUsers}/>}/>
    <Route path="/profile" element={<Profile/>}>
      <Route path="details" element={<ProfileDetails/>}/>
      <Route path="reset-password" element={<ResetPassword/>}/>
      </Route>
    <Route path="/task" element={<Task/>}/>
    <Route path="/pendingrequest" element={<PendingRequest/>}/>
    <Route path="*" element={<Navigate to="/dashboard"/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  </>
}

export default App;
