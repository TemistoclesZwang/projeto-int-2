import React, { createContext, useContext, useState } from 'react';

interface CustomContextProps {
  email: string;
  setNewEmail: React.Dispatch<React.SetStateAction<string>>;
}

const CustomContext = createContext<CustomContextProps | undefined>(undefined);

export function useCustomContext() {
  const context = useContext(CustomContext);
  if (!context) {
    throw new Error('useCustomContext must be used within a CustomContextProvider');
  }
  return context;
}


export function CustomContextProvider({ children }: { children: React.ReactNode }) {
    const storedEmail = localStorage.getItem('storedEmail') || 'Initial email';
    const [email, setNewEmail] = useState(storedEmail);
//.para recuperar o email no formulario de login   
    const contextEmail = {
      email,
      setNewEmail,
    };
  
    return <CustomContext.Provider value={contextEmail}>{children}</CustomContext.Provider>;
  }