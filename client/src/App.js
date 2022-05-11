import React, {Fragment} from 'react';
import Login from './components/auth/Login';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';

//redux
import { Provider } from 'react-redux';
import store from './store';



function App() {
  return (
  <Provider store={store}>  
  <Router>
    <Fragment>
      <Alert/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Fragment>
   </Router>
   </Provider>
  );
}

export default App;
