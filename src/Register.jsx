import React, {useState} from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {        
            e.preventDefault();
            console.log(email);
        }

    return(
        <div className="auth-form-container"> 
        <h2>Registracija</h2>
        <form className="reg-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value ={name} onChange ={(e) => setName(e.target.value)}placeholder="Full name" id="name" name="name"/>

            <label htmlFor="email">email</label>
            <input value ={email} onChange ={(e) => setEmail(e.target.value)}type="email" placeholder="yourmail@gmail.com" id="email" name="email"/>
            
            <label htmlFor="password">password</label>
            <input value ={pass} onChange ={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password"/>
            <button type="submit">Registruj se</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Vec imas nalog? Uvalim ti malog.</button>
        </div>
    )
}