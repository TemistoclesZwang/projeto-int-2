import React, { useEffect } from 'react';
import { GenQrCode } from "../../components/GenQrCode";
import { CustomContextProvider } from "../../components/c1";
import { SecondComponent } from "../../components/c2";
import { ValueChanger } from "../../components/c3";
import "./index.css";

export function Pay(){
  const storedEmail = localStorage.getItem('storedEmail') || 'No email found';
  const storedItems = localStorage.getItem('selectedItems')|| 'No item found';

  
  const placeOrder = async (menuId: string) => {
    try {
      const response = await fetch('http://localhost:3000/users/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: storedEmail,
          orderStatus: 'cancelado',
          menuId,
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

  useEffect(() => {
    localStorage.setItem('storedItems', JSON.stringify(storedItems));
    console.log(storedItems);
  }, [storedItems]);

  return (
    <CustomContextProvider>
      <section className="containerPay">
        <h2 className="Titulo">Pagamento</h2>
        <div className="containerQrCode">
          <GenQrCode />
          <button onClick={() => placeOrder('teste')}>Adicionar ao carrinho</button>
        </div>
      </section>
      <p>{storedEmail}</p>
      <p>items{storedItems}</p>
      <SecondComponent />
    </CustomContextProvider>
  );
}
