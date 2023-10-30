import React from 'react';
import { RegistrationForm } from '../../components/RegisterForm';

export function RegistrationPage() {
  const handleSubmit = (formData: any) => {
    console.log('Formulário enviado:', formData);
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <RegistrationForm onSubmit={handleSubmit} />
    </div>
  );
}
