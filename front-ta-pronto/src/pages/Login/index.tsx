import React from 'react';
import "./index.css";


import {LoginForm} from '../../components/LoginForm';

export function LoginPage() {
  const handleLogin = (username: string, password: string) => {
    // Implemente a lógica de autenticação aqui
    // console.log(`Usuário: ${username}, Senha: ${password}`);
  };

  return (
    <div className='containerLogin'>
      <h2 className='logo'>Tá pronto</h2>
      <LoginForm onLogin={handleLogin} />

    </div>
  );
};

