import React, { useEffect, useState } from 'react';
import { useOrderListContext } from '../../context/OrderListContext';

interface CounterProps {
  id: string;
  name: string;
}

export function CounterBtn({ id, name }: CounterProps): JSX.Element {
  const { orders, setOrders } = useOrderListContext();
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // Atualiza o count quando a lista de orders for alterada
    const itemCount = orders.filter((order) => order.id === id).length;
    setCount(itemCount);
  }, [orders, id]);

  const handleIncrement = () => {
      setOrders([...orders, { id, name }]);
      // Atualiza o count utilizando o estado atualizado diretamente
      setCount(count + 1);
    
  };

  const handleDecrement = () => {
    const existingOrderIndex = orders.findIndex((order) => order.id === id);

    if (existingOrderIndex !== -1) {
      // Remove o pedido específico da lista
      const updatedOrders = [...orders];
      updatedOrders.splice(existingOrderIndex, 1);
      setOrders(updatedOrders);

      // Atualiza o count após a remoção do pedido
      const itemCount = updatedOrders.filter((order) => order.id === id).length;
      setCount(itemCount);
    }
  };

  const handleClearAllOrders = () => {
    // Limpa todas as orders
    setOrders([]);
    // Atualiza o count para 0
    setCount(0);
  };

  return (
    <div className='counterBtnContainer'>
      <p>{name}</p>
      <button onClick={handleIncrement}>+</button>
      <span>{count}</span>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleClearAllOrders}>Limpar Orders</button>
    </div>
  );
}