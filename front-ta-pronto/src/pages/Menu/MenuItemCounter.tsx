interface MenuItemCounterProps {
  menuId: string;
  itemName: string;
  counter: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function MenuItemCounter({
  counter,
  onIncrement,
  onDecrement,
}: MenuItemCounterProps): JSX.Element {
  return (
    <div>
      <button onClick={onDecrement}>-</button>
      <span>{counter}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}
