import React from 'react';
import "./index.css";


// import {LoginForm} from '../../components/LoginForm';
import { SendLoginForm } from '../../components/c3';
import { CustomContextProvider } from '../../components/c1';
import { SecondComponent } from '../../components/c2';

export function LoginPage() {


  return (
    <CustomContextProvider>
    <SecondComponent></SecondComponent>

    <div className='containerLogin'>
      <h2 className='logo'>Tá pronto</h2>
      <SendLoginForm />

    </div>
    </CustomContextProvider>

  );
};

