import { useState, useEffect } from 'react';
import { useOrderListContext } from '../../context/OrderListContext';

interface OrderCounterProps {
  id: string;
}

export function OrderCounter({ id }: OrderCounterProps): JSX.Element {
  const { orders } = useOrderListContext();
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // Atualiza o count quando a lista de orders for alterada
    const count = orders.filter((order) => order.id === id).length;
    setCount(count);
  }, [orders, id]);

  return <div>{`${count}`}</div>;
}
