import { useState } from 'react';
import "./index.css";

interface BtnFilterProps {
  text: string;
  onClick: () => void;
}

export function BtnFilter({ text, onClick }: BtnFilterProps): JSX.Element {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    onClick();
  };

  return (
    <button
      className={`iconButton ${selected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
