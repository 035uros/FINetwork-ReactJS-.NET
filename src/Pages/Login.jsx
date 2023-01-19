import React, {Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserProfile from '../UserProfile';

export const Login = (props) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState("");

  let navigate = useNavigate ();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      KorisnickoIme: user,
      Lozinka: pass
    };
    
    const url ='https://localhost:44357/api/Fin/Login';
    axios.post(url, data).then((result)=>{
      if(result.data === 'Пријава успешна'){
        UserProfile.setUser(user);
        UserProfile.setAuth();
        navigate({
          pathname: "/landingpage"
        });
      }else{
        alert(result.data);
      }
    }).catch((error)=>{
      alert(error);
    })
  };

  return (
    <Fragment>
      <div className="App">
    <div className="auth-form-container">
      <h2>Пријава</h2>
      <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="user">Корисничко име</label>
            <input value ={user} onChange ={(e) => setUser(e.target.value)}placeholder="korisnicko_ime" id="user" name="user" required/> 

        <label htmlFor="email">Лозинка</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
        ></input>
        <button type="submit">Пријави се</button>
      </form>
      <button
        className="link-btn"
        onClick={() => {navigate("/register")}}
      >
        Немаш налог? Региструј се овде.
      </button>
    </div>
    </div>
    </Fragment>
  );
};

