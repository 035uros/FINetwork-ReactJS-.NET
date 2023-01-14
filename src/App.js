
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Register } from './Register';
import { Login } from './Login';
import { ProfileSetUp } from './ProfileSetUp';

function App() {
  
  /*const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }*/



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login to="/login" />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profilesetup" element={<ProfileSetUp flag={false}/>} />
      </Routes>
    </Router>
    /*<div className="App">
      {

        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>*/
  );
}
export default App;
