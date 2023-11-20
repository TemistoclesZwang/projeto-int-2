import "./index.css";
import React, { useEffect, useState } from 'react';
import { OrderListContextProvider, useOrderListContext } from "../../context/OrderListContext";

interface MenuItem {
  menuId: string;
  nome: string;
  ingredientes: string;
  descricao: string;
  preco: number;
  img: string;
}

export function ValueChanger() {
  const { setOrders } = useOrderListContext();

  const handleValueChange = () => {
    setOrders('pizza');
  };

  return (
    <div>
      <button onClick={handleValueChange}>Change Value</button>
    </div>
  );
}

export function Menu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [counters, setCounters] = useState<{ [menuId: string]: number }>({});
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  // const storedItems = localStorage.getItem('selectedItems')|| 'No item found';
  

  // const parsedStoredItems = storedItems ? JSON.parse(storedItems) : [];
  // console.log('array',parsedStoredItems);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('http://localhost:3000/users/menuall');
        if (!response.ok) {
          throw new Error('Erro ao buscar o cardápio');
        }
        const data: MenuItem[] = await response.json();
        setMenuItems(data);

        // Initialize counters for each menu item
        const initialCounters: { [menuId: string]: number } = {};
        data.forEach((item) => {
          initialCounters[item.menuId] = 0;
        });
        setCounters(initialCounters);
      } catch (error) {
        // Handle error
      }
    };
    
    fetchMenu();
  }, []);

  const handleIncrement = (menuId: string) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [menuId]: (prevCounters[menuId] || 0) + 1,
    }));

    setSelectedItems((prevSelectedItems) => {
      const itemCount = counters[menuId] || 0;
      const updatedItems = [...prevSelectedItems];
      for (let i = 0; i < itemCount; i++) {
        updatedItems.push(menuId);
      }
      return updatedItems;
    });
  };

  const handleDecrement = (menuId: string) => {
    if (counters[menuId] && counters[menuId] > 0) {
      setCounters((prevCounters) => ({
        ...prevCounters,
        [menuId]: prevCounters[menuId] - 1,
      }));

      setSelectedItems((prevSelectedItems) => {
        const itemCount = counters[menuId] || 0;
        const updatedItems = [...prevSelectedItems];
        for (let i = 0; i < itemCount; i++) {
          const index = updatedItems.lastIndexOf(menuId);
          if (index !== -1) {
            updatedItems.splice(index, 1);
          }
        }
        return updatedItems;
      });
    }
  };

  useEffect(() => {
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    console.log(selectedItems);
  }, [selectedItems]);

  return (
    // <OrderListContextProvider>
    <section className="two">
      <h2 className="secao">Cardápio</h2>
      <ValueChanger></ValueChanger>

      <div className="container-two">
        {menuItems.map((item) => (
          <div className="containerCardapio" key={item.menuId}>
            <div className="infosCardapio">
              <p className="pratos">
                <strong>Nome:</strong> {item.nome} <br />
                //.guardar os nomes dos itens pedidos para recuperar nos pedidos
                <strong>Ingredientes:</strong> {item.ingredientes} <br />
                <strong>Descrição:</strong> {item.descricao} <br />
                <strong>Preço:</strong> R${item.preco.toFixed(2)}
              </p>
              <div className="tools">
                <button onClick={() => handleIncrement(item.menuId)}>+</button>
                <span>{counters[item.menuId]}</span>
                <button onClick={() => handleDecrement(item.menuId)}>-</button>
              </div>
              <div className="imgCardapio">
                <img src={item.img} className="imgCardapio" alt="cardapio" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    // </OrderListContextProvider>
  );
}
