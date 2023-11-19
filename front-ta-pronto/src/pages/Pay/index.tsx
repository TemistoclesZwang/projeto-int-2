import { GenQrCode } from "../../components/GenQrCode";
import "./index.css";

export function Pay(){
  
  const placeOrder = async (menuId: string) => {
    try {
      const response = await fetch('http://localhost:3000/users/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({

          email: 'teste',
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
    return (
        <section className="containerPay">
        <h2 className="Titulo">Pagamento</h2>
        <div className="containerQrCode">
        <GenQrCode></GenQrCode>
        <button onClick={() => placeOrder('teste')}>Adicionar ao carrinho</button>

        </div>
      </section>
    )
}