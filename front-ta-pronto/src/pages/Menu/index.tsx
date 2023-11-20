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



export function Menu() {
  const { setOrders } = useOrderListContext();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [counters, setCounters] = useState<{ [menuId: string]: number }>({});
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedItemNames, setSelectedItemNames] = useState<string[]>([]);

  const handleValueChange = (novoValor: string | string[]) => {
    if (Array.isArray(novoValor)) {
      const stringSeparatedByComma = novoValor.join(', ');
      setOrders(stringSeparatedByComma);
    } else {
      setOrders(novoValor);
    }
  };

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


  const handleIncrement = (menuId: string, itemName: string) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [menuId]: (prevCounters[menuId] || 0) + 1,
    }));

    setSelectedItems((prevSelectedItems) => {
      const updatedItems = [...prevSelectedItems, menuId];
      return updatedItems;
    });

    setSelectedItemNames((prevSelectedItems) => {
      const updatedItems = [...prevSelectedItems, itemName];
      return updatedItems;
    });
  };

  const handleDecrement = (menuId: string, itemName: string) => {
    if (counters[menuId] && counters[menuId] > 0) {
      setCounters((prevCounters) => ({
        ...prevCounters,
        [menuId]: prevCounters[menuId] - 1,
      }));

      setSelectedItems((prevSelectedItems) => {
        const index = prevSelectedItems.lastIndexOf(menuId);
        if (index !== -1) {
          const updatedItems = [...prevSelectedItems];
          updatedItems.splice(index, 1);
          return updatedItems;
        }
        return prevSelectedItems;
      });

      setSelectedItemNames((prevSelectedItems) => {
        const index = prevSelectedItems.lastIndexOf(itemName);
        if (index !== -1) {
          const updatedItems = [...prevSelectedItems];
          updatedItems.splice(index, 1);
          return updatedItems;
        }
        return prevSelectedItems;
      });
    }
  };


  useEffect(() => {
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems)); //!
    // localStorage.setItem('selectedItemNames', JSON.stringify(selectedItemNames)); //!

    const stringSeparatedByComma = selectedItemNames.join(', '); // Converte o array para uma string separada por vírgulas
    handleValueChange(stringSeparatedByComma); // Chama a função para atualizar os pedidos

    console.log(selectedItems);
    console.log(selectedItemNames);
  }, [selectedItemNames]); // Dispara sempre que há mudanças em selectedItemNames

  return (
    <section className="two">
      <h2 className="secao">Cardápio</h2>
      {/* <ValueChanger novoValor={selectedItemNames}></ValueChanger> */}
      <div className="container-two">
        {menuItems.map((item) => (
          <div className="containerCardapio" key={item.menuId}>
            <div className="infosCardapio">
              <p className="pratos">
                <strong>Nome:</strong> {item.nome} <br />
                <strong>Ingredientes:</strong> {item.ingredientes} <br />
                <strong>Descrição:</strong> {item.descricao} <br />
                <strong>Preço:</strong> R${item.preco.toFixed(2)}
              </p>
              <div className="tools">
                <button onClick={() => handleIncrement(item.menuId, item.nome)}>+</button>
                <span>{counters[item.menuId]}</span>
                <button onClick={() => handleDecrement(item.menuId, item.nome)}>-</button>
              </div>
              <div className="imgCardapio">
                <img src={item.img} className="imgCardapio" alt="cardapio" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
