import React, { createContext, useContext, useState } from 'react';

interface OrderListContextProps {
  orders: string;
  setOrders: React.Dispatch<React.SetStateAction<string>>;
}

const OrderListContext = createContext<OrderListContextProps | undefined>(undefined);

export function useOrderListContext() {
  const context = useContext(OrderListContext);
  if (!context) {
    throw new Error('useOrderListContext must be used within a OrderListContextProvider');
  }
  return context;
}

export function OrderListContextProvider({ children }: { children: React.ReactNode }) {
    const [orders, setOrders] = useState('null');
    const contextEmail = {
      orders,
      setOrders,
    };
  
    return <OrderListContext.Provider value={contextEmail}>{children}</OrderListContext.Provider>;
  }