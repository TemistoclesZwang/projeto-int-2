import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import hourglass from "../../assets/login/pattern.jpeg";

import "./index.css";


export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { login, isLoggedIn } = useAuth();

  const handleLogin = () => {
    login();
    setRedirect(true); // Ativa o redirecionamento após o login
  };

  async function postData() {
    
    try {
      const response = await fetch("http://localhost:3000/auth/signin", {
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
      console.log('loginform',data);


      // Define o email no contexto após o login
      setEmail(data.email);
      handleLogin();
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
    
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    postData();
    console.log('LoginForm',isLoggedIn);

    
  }

  // Se o usuário estiver autenticado, redireciona para a página de cardápio
  if (redirect) {
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
