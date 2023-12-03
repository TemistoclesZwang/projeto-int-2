import React, { useEffect, useState } from 'react';
import { fetchMenuData, MenuItem } from './MenuFetcher';
import { CounterBtn } from './CounterBtn';
import { MenuFilters } from './MenuFilters';
import { AddCartBtn } from './AddCartBtn';

export function MenuViewer(): JSX.Element {
  const [menuData, setMenuData] = useState<MenuItem[]>([]);
  const [filteredMenu, setFilteredMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetchMenuData()
      .then((data) => {
        setMenuData(data);
        setFilteredMenu(data); // Inicialmente, exibimos todos os itens
      })
      .catch((error) => {
        // Tratar erro
      });
  }, []);


  return (
    <div>
      <h2>Menu Items:</h2>
      <MenuFilters menuData={menuData} setFilteredMenu={setFilteredMenu} />
      <ul>
        {filteredMenu.map((item) => (
          <li key={item.menuId}>
            <strong>Nome:</strong> {item.nome}<br />
            <strong>Ingredientes:</strong> {item.ingredientes}<br />
            <strong>Descrição:</strong> {item.descricao}<br />
            <strong>Preço:</strong> R${item.preco.toFixed(2)}<br />
            <img src={item.img} alt={item.nome} style={{ maxWidth: '100px' }} /><br />
            <AddCartBtn id={item.menuId} name={item.nome}></AddCartBtn>
          </li>
        ))}
      </ul>
    </div>
  );
}
