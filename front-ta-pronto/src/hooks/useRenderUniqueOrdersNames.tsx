import { useEffect, useState } from 'react';
import { useOrderListContext } from '../context/OrderListContext';
import { CounterBtn } from '../pages/Menu/CounterBtn';

interface UseUniqueNamesResult {
  uniqueOrdersList: JSX.Element[];
}

export function useRenderUniqueOrdersNames(showButtons: boolean): UseUniqueNamesResult {
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
            {/* <OrderCounter id={orderId} /> */}
            <div className="orderContent">
              <span className="orderName">{uniqueName}</span>
              {showButtons && <CounterBtn id={orderId} name={uniqueName} />}
            </div>
          </div>
        </div>
      );
    });

    setUniqueOrdersList(uniqueOrdersListMapped);
  }, [orders, showButtons]);

  return { uniqueOrdersList };
}
