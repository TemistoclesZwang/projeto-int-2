import { useEffect, useState } from 'react';
import { useOrderListContext } from '../../context/OrderListContext';

interface CounterProps {
  id: string;
  name: string;
}
export function CounterBtn({ id, name }: CounterProps): JSX.Element {
  const { orders, setOrders } = useOrderListContext();
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const itemCount = orders.filter((order) => order.id === id).length;
    setCount(itemCount);
  }, [orders, id]);

  const handleIncrement = () => {
    setOrders([...orders, { id, name }]);
  };

  const handleDecrement = () => {
    const existingOrderIndex = orders.findIndex((order) => order.id === id);

    if (existingOrderIndex !== -1) {
      const updatedOrders = [...orders];
      updatedOrders.splice(existingOrderIndex, 1);
      setOrders(updatedOrders);
    }
  };

  const handleClearAllOrders = () => {
    const filteredOrders = orders.filter((order) => order.id !== id);
    setOrders(filteredOrders);
  };

  return (
    <div className='counterBtnContainer'>
      <button onClick={handleIncrement}>+</button>
      <span>{count}</span>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleClearAllOrders} style={{ background: '#FF6961' }}>
        Excluir
      </button>
    </div>
  );
}
