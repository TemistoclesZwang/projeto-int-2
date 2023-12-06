import React, { useState, useEffect } from "react";

import { useCustomContext } from '../../context/c1';
import { useAuth } from "../../context/AuthContext";
import { Link, Navigate } from "react-router-dom";
import hourglass from "../../assets/login/pattern.jpeg";
import "./index.css";


export function SendLoginForm() {
  const { setNewEmail } = useCustomContext();
  const [email, setEmail] = useState(localStorage.getItem('storedEmail') || '');
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { login, isLoggedIn } = useAuth();
  const [displayEmail, setDisplayEmail] = useState('');

  const handleLogin = () => {
    login();
    setRedirect(true); // Ativa o redirecionamento após o login
  };

  async function postData() {
    
    try {
      const response = await fetch("https://apitapronto.onrender.com/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);

      // Define o email no contexto após o login
      // setEmail(data.email);
      const receivedEmail = data.email;
      setEmail(receivedEmail);
      setNewEmail(receivedEmail);
      
      handleLogin();

    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
    
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    postData();
    localStorage.setItem('storedEmail', email); 
    setNewEmail(email);
  };

  useEffect(() => {
    setDisplayEmail(email); 
  }, [email]);

  if (redirect) {
    setNewEmail(email); //.usar props 
    console.log('SendLoginForm',isLoggedIn);
    console.log('testando',displayEmail);
    
    return <Navigate to="/cardapio" replace />;
  }

  return (
    <form onSubmit={handleSubmit} className="formLogin">
    <div className="background-hourglass">
      <img src={hourglass} className="hourglass" alt="Example" />
    </div>
      <div className="formGroup">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="inputField"
        />
      </div>
      <div className="formGroup">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="inputField"
        />
      </div>
      <button type="submit" className="submitLogin">
        Login
      </button>
      <p className="register">
        {" "}
        Não tem uma conta? <Link to="/register/">Registre-se aqui!</Link>
      </p>
    </form>
);
}
