import { EmailContext } from "../../components/LoginForm";
import "./index.css";
import React, { useContext, useEffect, useState } from 'react';

interface MenuItem {
  menuId: string;
  nome: string;
  ingredientes: string;
  descricao: string;
  preco: number;
  img: string;
}

export function Menu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [counters, setCounters] = useState<{ [menuId: string]: number }>({});

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
  };

  const handleDecrement = (menuId: string) => {
    if (counters[menuId] && counters[menuId] > 0) {
      setCounters((prevCounters) => ({
        ...prevCounters,
        [menuId]: prevCounters[menuId] - 1,
      }));
    }
  };

  const placeOrder = async (menuId: string) => {
    try {
      const response = await fetch('http://localhost:3000/users/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({

          email: useContext(EmailContext),
          orderStatus: 'cancelado',
          menuId,
          // !pegar email e id do login do usuário
          // e usar esse Id ao fazer o pedido
          // criar componente que verifica se é funcionario ou cliente
            // se cliente redireciona para tela de pedido
            // se funcionario mostra
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer o pedido');
      }

      console.log('Pedido feito com sucesso!');
    } catch (error) {
      // console.error(error.message);
    }
  };

  return (
    <section className="two">
      <h2 className="secao">Cardápio</h2>
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
                <button onClick={() => handleIncrement(item.menuId)}>+</button>
                <span>{counters[item.menuId]}</span>
                <button onClick={() => handleDecrement(item.menuId)}>-</button>
              </div>
              <div className="imgCardapio">
                <img src={item.img} className="imgCardapio" alt="cardapio" />
              </div>
              <button onClick={() => placeOrder(item.menuId)}>Adicionar ao carrinho</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
