import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useOrderListContext } from "../../context/OrderListContext";
import { GenQrCode } from "../../components/GenQrCode";
import "./index.css";
import { BasePage } from "../../components/BasePage";
import { useRenderUniqueOrdersNames } from "../../hooks/useRenderUniqueOrdersNames";

export function Pay() {
  const storedEmail = localStorage.getItem("storedEmail") || "No email found";
  const [redirect, setRedirect] = useState(false);
  const { orders } = useOrderListContext();
  const { uniqueOrdersList } = useRenderUniqueOrdersNames(true);


  const handleOrders = () => {
    setRedirect(true);
  };

  const placeOrder = async () => {
    try {
      const menuIdArray = orders.map((order) => order.id); // Obtendo array de IDs

      const response = await fetch("http://localhost:3000/users/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: storedEmail,
          orderStatus: "preparando",
          menuId: menuIdArray,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao fazer o pedido");
      }
      handleOrders();

      console.log("Pedido feito com sucesso!");
    } catch (error) {
      // console.error(error.message);
    }
  };

  if (redirect) {
    return <Navigate to="/pedidos/true" replace />;
  }

// Cria um conjunto de nomes únicos
  // const menuIdArray = orders.map((order) => order.id); // Obtendo array de IDs
// console.log(menuIdArray);

  return (
    <>
    <BasePage title={"Pagamento"} subtitle={"Efetue seu pagamento abaixo:"}></BasePage>
      <div className="payContainer">
        <div>{uniqueOrdersList}</div>
        {/* {uniqueNames.map((uniqueName, index) => (
          <div key={index} className="payList">
            <span className="orderName">{uniqueName}</span>
            <div className="counterBtn">
              <CounterBtn
                id={orders.find((order) => order.name === uniqueName)?.id || ''}
                name={uniqueName}
              />
              <OrderCounter id={orders.find((order) => order.name === uniqueName)?.id || ''} />
            </div>
          </div>
        ))} */}
        <GenQrCode />
        <button onClick={() => placeOrder()}>Pagar</button>
      </div>
    </>
  );
}