import { useEffect, useState } from 'react';
import { fetchMenuData, MenuItem } from './MenuFetcher';
import { MenuFilters } from './MenuFilters';
import { AddCartBtn } from './AddCartBtn';
import './index.css'
export function MenuViewer(): JSX.Element {
  const [menuData, setMenuData] = useState<MenuItem[]>([]);
  const [filteredMenu, setFilteredMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetchMenuData()
      .then((data) => {
        setMenuData(data);
        setFilteredMenu(data); // Inicialmente, exibimos todos os itens
      })
      .catch(() => {
        // Tratar erro
      });
  }, []);


  return (
    <div className="mainContainer">
    <MenuFilters menuData={menuData} setFilteredMenu={setFilteredMenu} />
    <ul className="containerItemsMenu">
      {filteredMenu.map((item) => (
        <li key={item.menuId} className="menuItem">
          <img src={item.img} alt={item.nome} />
          <div className="itemDescription">
            <strong>Nome:</strong> {item.nome}<br />
            <strong>Ingredientes:</strong> {item.ingredientes}<br />
            <strong>Descrição:</strong> {item.descricao}<br />
            <strong>Preço:</strong> R${item.preco.toFixed(2)}<br />
            <AddCartBtn id={item.menuId} name={item.nome}></AddCartBtn>
          </div>
        </li>
      ))}
    </ul>
  </div>
  );
}
