import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
import './index.css';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setid] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const { login, isLoggedIn } = useAuth();

  const handleLogin = () => {
    login();
    setRedirect(true); // Ativa o redirecionamento após o login
  };

  async function postData() {
    try {
      const response = await fetch('http://localhost:3000/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onLogin(email, password);
    postData();
    handleLogin();
    console.log(isLoggedIn);
  }

  // Se o usuário estiver autenticado, redireciona para a página de cardápio
  if (redirect) {
    return <Navigate to="/cardapio" replace />;
  }

  return (
    <form onSubmit={handleSubmit} className='formLogin'>
      <div className='formGroup'>
        <label htmlFor='email'>email:</label>
        <input
          type='text'
          id='email'
          value={email}
          onChange={(e) => setid(e.target.value)}
          className='inputField'
        />
      </div>
      <div className='formGroup'>
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='inputField'
        />
      </div>
      <button type='submit' className='submitLogin'>
        Login
      </button>
    </form>
  );
}
