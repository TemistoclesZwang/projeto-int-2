import { useEffect, useState } from 'react';
import { useOrderListContext } from '../context/OrderListContext';
// import { Order } from 'seu/caminho/de/interface'; // Certifique-se de importar corretamente a interface Order
import { OrderCounter } from '../pages/Menu/OrderCounter';
import { CounterBtn } from '../pages/Menu/CounterBtn';

interface UseUniqueNamesResult {
  uniqueOrdersList: JSX.Element[];
}

export function useRenderUniqueOrdersNames(): UseUniqueNamesResult {
  const { orders } = useOrderListContext();
  const [uniqueOrdersList, setUniqueOrdersList] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const uniqueNames = Array.from(new Set(orders.map((order) => order.name)));
    const uniqueOrdersListMapped = uniqueNames.map((uniqueName, index) => {
      const order = orders.find((order) => order.name === uniqueName);
      const orderId = order?.id || '';

      return (
        <div key={index} className="payList">
          <div className="counterBtn">
            <OrderCounter id={orderId} />
            <CounterBtn
                id={orderId}
                name={uniqueName}
              />
            <span className="orderName">{uniqueName}</span>
          </div>
        </div>
      );
    });

    setUniqueOrdersList(uniqueOrdersListMapped);
  }, [orders]);

  return { uniqueOrdersList };
}
