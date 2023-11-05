import React, { useState } from 'react';

interface LoginFormProps {
  onLogin: (id: string, password: string) => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [id, setid] = useState('');
  const [password, setPassword] = useState('');

  async function postData() {
    try {
      const response = await fetch('http://localhost:3000/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          password,
        }),
      });
      // const data = await response.json();
      // console.log(data);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onLogin(id, password);
    postData();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">id:</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => setid(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
