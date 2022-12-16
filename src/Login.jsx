import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h2>Пријава</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Е-маил</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="vasmail@gmail.com"
        ></input>
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
        onClick={() => props.onFormSwitch("register")}
      >
        Немаш налог? Региструј се овде.
      </button>
    </div>
  );
};

