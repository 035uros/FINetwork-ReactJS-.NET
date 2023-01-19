import React, {Fragment, useState} from "react";
import { useNavigate  } from "react-router-dom";
import axios from "axios";


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [lastname, setLastname] = useState('');
    const [checkPass, setCheckPass] = useState('');
    let navigate = useNavigate ();

    const handleSubmit = (e) => {  
        if(pass===checkPass){
            e.preventDefault();
            const data = {
                KorisnickoIme:user,
                Ime: name,
                Prezime: lastname,
                Email: email,
                Lozinka: pass
            };

            const url ='https://localhost:44357/api/Fin/Registration';
            axios.post(url, data).then((result)=>{
                alert(result.data);
                if(result.data === 'Унос успешан'){
                    navigate("/login");
                }
            }).catch((error)=>{
                alert(error);
            })
        }else{
            alert("Лозинке се не поклапају");
        }      

            
        }

    return(
        <Fragment>
        <div className="App">
        <div className="auth-form-container"> 
        <h2>Регистрација</h2>
        <form className="reg-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Име</label>
            <input value ={name} onChange ={(e) => setName(e.target.value)}placeholder="Унесите Ваше име" id="name" name="name" required/>

            <label htmlFor="lastname">Презиме</label>
            <input value ={lastname} onChange ={(e) => setLastname(e.target.value)}placeholder="Унесите Ваше презиме" id="lastname" name="lastname" required/>

            <label htmlFor="email">Е-маил</label>
            <input value ={email} onChange ={(e) => setEmail(e.target.value)}type="email" placeholder="vasmail@fink.com" id="email" name="email" required/>

            <label htmlFor="user">Корисничко ме</label>
            <input value ={user} onChange ={(e) => setUser(e.target.value)}placeholder="Унесите Ваше korisnicko_ime" id="user" name="user" required/> 

            <label htmlFor="password">Лозинка</label>
            <input value ={pass} onChange ={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password" required/>

            <label htmlFor="checkPass">Потврдите лозинку</label>
            <input value ={checkPass} onChange ={(e) => setCheckPass(e.target.value)}type="password" placeholder="********" id="checkPass" name="checkPass" required/>

            <button type="submit">Региструј се</button>
        </form>
        <button className="link-btn" onClick={() =>{navigate("/login")}}>Имате налог? Пријавите се.</button>
        </div>
        </div>
        </Fragment>
    )
}

/*  */