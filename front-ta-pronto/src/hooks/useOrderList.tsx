import { useOrderListContext } from "../context/OrderListContext";

export function useOrderList() {
    const { orders } = useOrderListContext();
    return <div><ul>
    {orders.map((order, index) => (
      <li key={index}>
        {/* {order.count} */}
        {order.name}
      </li>
    ))}
  </ul></div>;
  }