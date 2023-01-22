import React, {Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserProfile from '../UserProfile';

export const Login = (props) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState("");

  const [alertText, setAlert] = useState("");
  let navigate = useNavigate ();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      KorisnickoIme: user,
      Lozinka: pass
    };

    function getUserData(data){
      const url = "https://localhost:44357/api/Fin/Unismer";
      axios
        .post(url, data)
        .then((result) => {
          const userData = result.data.split("-");
          UserProfile.setSmer(userData[0]);
          UserProfile.setUni(userData[1]);
        })
    }
    
    const url ='https://localhost:44357/api/Fin/Login';
    axios.post(url, data).then((result)=>{
      if(result.data === 'Пријава успешна'){
        getUserData(data);
        UserProfile.setUser(user);
        UserProfile.setAuth();
        navigate({
          pathname: "/landingpage"
        });
      }else{
        setAlert(result.data);
        var x = document.getElementById("myDIVe");
        x.style.display = "block";
      }
    }).catch((error)=>{
      setAlert(error);
      var x = document.getElementById("myDIVe");
      x.style.display = "block";
    })
  };

  var close = document.getElementsByClassName("closebtn");
  var i;

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function(){ div.style.display = "none"; }, 600);
        }
      }

  return (
    <Fragment>
    <div className="App">
    <div className="auth-form-container">
      <h2>Пријава</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="user">Корисничко име</label>
        <input value ={user} onChange ={(e) => setUser(e.target.value)} placeholder="korisnicko_ime" id="user" name="user" required/> 

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
      <div class="alert" id="myDIVe" style={{display: "none"}}>
        <span class="closebtn">&times;</span>  
        <strong>Упс!</strong> {alertText}
      </div>

      <div class="alert success" id="myDIVs" style={{display: "none"}}>
        <span class="closebtn">&times;</span>  
        <strong>Одлично!</strong> {alertText}
      </div>
    </div>
    </div>
    </Fragment>
  );
};

