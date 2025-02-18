import {Route,Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import LoginForm from './components/LoginForm';


function App() {
  
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  return (
<div>
  <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path= "/login" element = {<LoginForm/>}/>
    <Route path="/Signup" element = {<Signup/>}/>
    <Route path="/dashboard" element ={<Dashboard/>}/>

  </Routes>
</div>
  );
}

export default App;
