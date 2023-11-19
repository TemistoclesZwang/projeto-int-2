import React, { createContext, useContext, useState } from 'react';

interface CustomContextProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
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
  const [value, setValue] = useState('Initial Value');

  const contextValue = {
    value,
    setValue,
  };

  return <CustomContext.Provider value={contextValue}>{children}</CustomContext.Provider>;
}