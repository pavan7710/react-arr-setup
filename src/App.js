import React from 'react'
import { Routes , Route , Navigate } from 'react-router-dom'
import Sidenav from './Components/Layout/Sidenav';
import Login from './Components/Authentication/Login/Login'
import Signup from './Components/Authentication/Signup/Signup'



function App() {
  return (
        <Routes>
          <Route path='/' element= {<Navigate to = "/login" />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/Signup' element={<Signup/>} />
        </Routes>
  );
}

export default App;