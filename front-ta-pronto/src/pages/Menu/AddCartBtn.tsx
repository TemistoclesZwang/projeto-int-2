import { useOrderListContext } from '../../context/OrderListContext';

type OrderButtonProps = {
  id: string;
  name: string;
};

export function AddCartBtn({ id, name }: OrderButtonProps): JSX.Element {
  const { orders, setOrders } = useOrderListContext();

  const handleButtonClick = () => {
    const newOrder = {
      id,
      name,
    };

    setOrders([...orders, newOrder]);
  };

  return (
    <button onClick={handleButtonClick}>
      Add ao carrinho
    </button>
  );
}
