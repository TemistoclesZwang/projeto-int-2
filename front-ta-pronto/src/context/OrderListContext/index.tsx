// OrderListContext.tsx

import React, { createContext, useContext, useState } from 'react';

interface Order {
  id: string;
  name: string;
  count: number; // Adicionando o contador na interface Order
}

interface OrderListContextProps {
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
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
  const [orders, setOrders] = useState<Order[]>([]);

  return <OrderListContext.Provider value={{ orders, setOrders }}>{children}</OrderListContext.Provider>;
}
