import React from 'react';
import "./index.css";

// import {LoginForm} from '../../components/LoginForm';
import { SendLoginForm } from '../../components/SendLoginForm';
import { CustomContextProvider } from '../../context/c1';
import { SecondComponent } from '../../context/c2';

export function LoginPage() {


  return (
    <CustomContextProvider>
    <div className='containerLogin'>
      <h2 className='logo'>Tá pronto</h2>
      <SendLoginForm />
      <SecondComponent></SecondComponent>
      //! até aqui está modificando o email
    </div>
    </CustomContextProvider>

  );
};

