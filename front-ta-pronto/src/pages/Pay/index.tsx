import { GenQrCode } from "../../components/GenQrCode";
import { CustomContextProvider } from "../../context/c1";
import { SecondComponent } from "../../context/c2";
import { Navigate} from "react-router-dom";
import { useState } from "react";
import "./index.css";


export function Pay() {
  const storedEmail = localStorage.getItem('storedEmail') || 'No email found';
  const storedItems = localStorage.getItem('selectedItems') || '[]';
  const [redirect, setRedirect] = useState(false);
  const parsedStoredItems = JSON.parse(storedItems);
  const menuIdArray = Array.isArray(parsedStoredItems) ? parsedStoredItems : [];

  const handleOrders = () => {
    setRedirect(true);
  };
  

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
      handleOrders()

      console.log('Pedido feito com sucesso!');
    } catch (error) {
      // console.error(error.message);
    }
  };
  
  if (redirect) {
    return <Navigate to="/pedidos/true" replace />;
  }
  
  return (
    <CustomContextProvider>
      <section className="containerPay">
        <h2 className="Titulo">Pagamento</h2>
        <div className="containerQrCode">
          <GenQrCode />
          <button onClick={() => placeOrder()}>Pagar</button>
        </div>
      </section>
      <p>{storedEmail}</p>
      <p>items{menuIdArray}</p>
      <SecondComponent />
    </CustomContextProvider>
  );
}
