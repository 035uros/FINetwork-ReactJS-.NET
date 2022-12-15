import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./Login";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
/*
{currentForm === "login" ? <Login /> :   <Register />}*/
