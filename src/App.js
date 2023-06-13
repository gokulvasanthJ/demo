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


function App() {
 
  return<>
  <BrowserRouter>
  <div id="wrapper">
    <Sidebar/>
    <Routes>
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/add-user" element={<AddUser/>}/>
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
