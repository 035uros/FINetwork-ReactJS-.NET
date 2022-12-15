import React, {useState} from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [checkPass, setCheckPass] = useState('');
   


    const handleSubmit = (e) => {        
            e.preventDefault();
            console.log(email);
        }

    return(
        <div className="auth-form-container"> 
        <h2>Регистрација</h2>
        <form className="reg-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Име</label>
            <input value ={name} onChange ={(e) => setName(e.target.value)}placeholder="Унесите Ваше име" id="name" name="name"/>

            <label htmlFor="lastname">Презиме</label>
            <input value ={lastname} onChange ={(e) => setLastname(e.target.value)}placeholder="Унесите Ваше презиме" id="lastname" name="lastname"/>

            <label htmlFor="email">Е-маил</label>
            <input value ={email} onChange ={(e) => setEmail(e.target.value)}type="email" placeholder="vasmail@fink.com" id="email" name="email"/>

          

            <label htmlFor="password">Лозинка</label>
            <input value ={pass} onChange ={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password"/>

            <label htmlFor="checkPass">Потврдите лозинку</label>
            <input value ={checkPass} onChange ={(e) => setCheckPass(e.target.value)}type="password" placeholder="********" id="checkPass" name="checkPass"/>

            <button type="submit">Registruj se</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Имате налог? Пријавите се.</button>
        </div>
    )
}

/*  <label htmlFor="uni">Универзитет</label>
            <input value ={uni} onChange ={(e) => setUni(e.target.value)} placeholder="Изаберите Ваш универзитет" id="uni" name="uni"/>

            <label htmlFor="smer">Смер</label>
            <input value ={smer} onChange ={(e) => setSmer(e.target.value)} placeholder="Изаберите Ваш смер" id="smer" name="smer"/> */
