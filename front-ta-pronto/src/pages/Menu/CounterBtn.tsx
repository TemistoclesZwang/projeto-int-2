import React from 'react';
import { useOrderListContext } from '../../context/OrderListContext';

interface CounterProps {
  id: string;
  name: string;
}

export function CounterBtn({ id, name }: CounterProps): JSX.Element {
  const { orders, setOrders } = useOrderListContext();
  const order = orders.find((order) => order.id === id);

  const handleIncrement = () => {
    if (order) {
      const updatedOrders = orders.map((o) =>
        o.id === id ? { ...o, count: (o.count || 0) + 1 } : o
      );
      setOrders(updatedOrders);
    } else {
      setOrders([...orders, { id, name, count: 1 }]);
    }
  };

  const handleDecrement = () => {
    if (order && order.count && order.count > 0) {
      const updatedOrders = orders.map((o) =>
        o.id === id ? { ...o, count: (o.count || 0) - 1 } : o
      );
      setOrders(updatedOrders.filter((o) => o.count !== 0));
    }
  };

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={handleIncrement}>+</button>
      <span>{order ? order.count : 0}</span>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}
