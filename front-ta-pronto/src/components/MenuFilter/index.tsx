import React, { useState } from 'react';
import { BtnFilter } from '../BtnFilter';
import './index.css';

const menuItems: string[] = [
  'Hamburger',
  'Pizza',
  'Cachorro quente',
  'Pratos',
  'Bebidas',
]; //.essas informações precisam vir do endpoint

export function MenuFilter(): JSX.Element {
  const [startIndex] = useState(0);

  const handleItemClick = (index: number) => {
    console.log(`Item clicked: ${menuItems[index]}`);
  };

  const visibleItems = menuItems.slice(startIndex, startIndex + 5);

  return (
    <div className="MenuFilterContainer">
      <div className="MenuFilterIcons">
        {visibleItems.map((text, index) => (
          <BtnFilter
            key={index}
            text={text}
            onClick={() => handleItemClick(startIndex + index)}
          />
        ))}
      </div>
    </div>
  );
}
