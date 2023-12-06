import React from 'react';
import { MenuItem } from './MenuFetcher';

interface MenuFiltersProps {
  menuData: MenuItem[];
  setFilteredMenu: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

export function MenuFilters({ menuData, setFilteredMenu }: MenuFiltersProps): JSX.Element {
  const filterByPriceRange = (minPrice: number, maxPrice: number) => {
    const filtered = menuData.filter((item) => item.preco > minPrice && item.preco < maxPrice);
    setFilteredMenu(filtered);
  };

  const filterLessThan15 = () => {
    const filtered = menuData.filter((item) => item.preco < 15);
    setFilteredMenu(filtered);
  };

  const filterMoreThan20 = () => {
    const filtered = menuData.filter((item) => item.preco > 20);
    setFilteredMenu(filtered);
  };

  const clearFilter = () => {
    setFilteredMenu(menuData); // Voltamos a exibir todos os itens
  };

  return (
    <div className='containerMenuFilter'>
      <button onClick={() => filterByPriceRange(10, 20)}>Entre R$10 e R$20</button>
      <button onClick={filterLessThan15}>Menor que R$15</button>
      <button onClick={filterMoreThan20}>Maior que R$20</button>
      <button onClick={clearFilter}>Limpar Filtro</button>
    </div>
  );
}
