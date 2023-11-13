import "./index.css";
import React, { useEffect, useState } from 'react';

interface MenuItem {
  menuId: string;
  nome: string;
  ingredientes: string;
  descricao: string;
  preco: number;
}

export function Menu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('http://localhost:3000/users/menuall');
        if (!response.ok) {
          throw new Error('Erro ao buscar o cardápio');
        }
        const data: MenuItem[] = await response.json();
        setMenuItems(data);
      } catch (error) {
        // console.error(error.message);
      }
    };

    fetchMenu();
  }, []);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
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
          email: 'email113@teste',
          orderStatus: 'cancelado',
          menuId,
          // !pegar email e id do login do usuário
          // está sendo devolvido o acess token, extrair dele o Id do usuário
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
                <button onClick={handleIncrement}>+</button>
                <span>{counter}</span>
                <button onClick={handleDecrement}>-</button>
              </div>
              <div className="imgCardapio"></div>
                <button onClick={() => placeOrder(item.menuId)}>Adicionar ao carrinho</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
