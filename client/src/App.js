import React, {Fragment} from 'react';
import Login from './components/auth/Login';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/auth/Register'

function App() {
  return (
  <Router>
    <Fragment>   
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Fragment>
   </Router>
  );
}

export default App;
