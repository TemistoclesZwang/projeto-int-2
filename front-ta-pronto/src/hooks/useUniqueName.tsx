import { useEffect, useState } from 'react';
import { useOrderListContext } from '../context/OrderListContext';

export function useUniqueOrderNames(): string[] {
  const { orders } = useOrderListContext();
  const [uniqueNames, setUniqueNames] = useState<string[]>([]);

  useEffect(() => {
    const uniqueNamesArray = Array.from(new Set(orders.map((order) => order.name)));
    setUniqueNames(uniqueNamesArray);
  }, [orders]);

  return uniqueNames;
}
