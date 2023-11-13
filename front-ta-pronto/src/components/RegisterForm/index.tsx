import React, { useState, useEffect } from "react";

interface RegistrationFormProps {
  onSubmit: (formData: any) => void;
}

export function RegistrationForm({ onSubmit }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    typeUser: "cliente", // Adicionei o campo typeUser com um valor padrão 'funcionario'
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  useEffect(() => {
    if (formSubmitted) {
      async function postData() {
        try {
          const response = await fetch("http://localhost:3000/users/novo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error("Erro ao fazer registro:", error);
        } finally {
          setFormSubmitted(false);
        }
      }

      if (
        formData.name &&
        formData.email &&
        formData.password &&
        formData.passwordConfirm &&
        formData.typeUser
      ) {
        console.log(postData);

        postData();
      }
    }
  }, [formSubmitted, formData]);

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
