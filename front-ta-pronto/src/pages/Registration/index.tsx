import React from 'react';
import { RegistrationForm } from '../../components/RegisterForm';
import { BasePage } from '../../components/BasePage';

export function RegistrationPage() {
  const handleSubmit = (formData: any) => {
    console.log('Formulário enviado:', formData);
  };

  return (
    <div>
      <BasePage title={'Cadastro'} subtitle={'Faça seu cadastro'}></BasePage>
      <RegistrationForm onSubmit={handleSubmit} />
    </div>
  );
}
