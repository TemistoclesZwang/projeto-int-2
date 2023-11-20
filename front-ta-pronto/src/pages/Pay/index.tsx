import React, { useEffect } from 'react';
import { GenQrCode } from "../../components/GenQrCode";
import { CustomContextProvider } from "../../components/c1";
import { SecondComponent } from "../../components/c2";
import { ValueChanger } from "../../components/c3";
import "./index.css";

export function Pay() {
  const storedEmail = localStorage.getItem('storedEmail') || 'No email found';
  const storedItems = localStorage.getItem('selectedItems') || '[]'; // Se nada for encontrado, assume-se um array vazio

  const parsedStoredItems = JSON.parse(storedItems);
  const menuIdArray = Array.isArray(parsedStoredItems) ? parsedStoredItems : [];

  const placeOrder = async () => {
    try {
      const response = await fetch('http://localhost:3000/users/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: storedEmail,
          orderStatus: 'preparando',
          menuId: menuIdArray,
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
    <CustomContextProvider>
      <section className="containerPay">
        <h2 className="Titulo">Pagamento</h2>
        <div className="containerQrCode">
          <GenQrCode />
          <button onClick={() => placeOrder()}>Adicionar ao carrinho</button>
        </div>
      </section>
      <p>{storedEmail}</p>
      <p>items{menuIdArray}</p>
      <SecondComponent />
    </CustomContextProvider>
  );
}
