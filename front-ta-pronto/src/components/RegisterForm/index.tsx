import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import './index.css';
interface UserFormData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  typeUser: string;
}

interface RegistrationFormProps {
  onSubmit: (formData: UserFormData) => void;
}

export function RegistrationForm({ onSubmit }: RegistrationFormProps) {
  const [redirect, setRedirect] = useState(false);
  
  const handleNavigate = () => {
    setRedirect(true); 
  };


  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    typeUser: "funcionario", // Valor padrão para typeUser
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users/novo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP! Status: ${response.status}`);
      }
      handleNavigate();
      const responseData = await response.json();
      // Aqui você pode tratar a resposta, se necessário
      console.log("Resposta do servidor:", responseData);

      // Enviar os dados para o callback onSubmit, se necessário
      onSubmit(formData);
    } catch (error) {
      console.error("Erro ao fazer registro:", error);
    }
  };

  if (redirect) {
    return <Navigate to="/cardapio" replace />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="passwordConfirm">Confirm Password:</label>
        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="typeUserFuncionario">Funcionário:</label>
        <input
          type="radio"
          id="typeUserFuncionario"
          name="typeUser"
          value="funcionario"
          checked={formData.typeUser === "funcionario"}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="typeUserCliente">Cliente:</label>
        <input
          type="radio"
          id="typeUserCliente"
          name="typeUser"
          value="cliente"
          checked={formData.typeUser === "cliente"}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
