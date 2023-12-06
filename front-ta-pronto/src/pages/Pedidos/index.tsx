import  { useState } from "react";
import { GrayscaleFilterImg } from "../../components/GrayscaleFilterImg";
import { Countdown } from "../../components/CountDown";
import { useOrderListContext } from "../../context/OrderListContext";
import { showNotification } from "../../components/SendNotification";
import { useParams } from "react-router-dom";
import { useOrderList } from "../../hooks/useOrderList";
import "./index.css";
import { useUniqueOrderNames } from "../../hooks/useUniqueName";
import { BasePage } from "../../components/BasePage";
import { useRenderUniqueOrdersNames } from "../../hooks/useRenderUniqueOrdersNames";



export function Pedidos() {

  const minutes = 1;
  const [timerEnded, setTimerEnded] = useState(false);
  const { parametro }: { parametro?: string } = useParams();
  const valorParametro = parametro === 'true';
  const { uniqueOrdersList } = useRenderUniqueOrdersNames();

  const handleTimerEnd = () => {
    setTimerEnded(true);
    showNotification(true)
  };
  console.log('parametro:', parametro);
  console.log('valorParametro:', valorParametro);

  return (
    <main>
      <BasePage title={"Pedidos"} subtitle={"Veja seus pedidos:"}></BasePage>
      <section className="first">
        <div className="img-fundo"></div>
        <div className="textos-principais">
          <h3 className="titulo-principal">Tempo do pedido</h3>
        </div>
        <div className="conteudo-container">
          <div className="botao-principal">
            <div className="countdown">
              {!timerEnded ? (
                <Countdown
                  initialMinutes={minutes}
                  onTimerEnd={handleTimerEnd}
                  startTimer={valorParametro} //.receber esse parametro pelo react router
                />
              ) : (
                <div>Tá pronto!</div>
              )}
            </div>

            <div className="detalhesPedido">
              <div>{uniqueOrdersList}</div>
            <GrayscaleFilterImg isColored={timerEnded}></GrayscaleFilterImg>
            </div>

          </div>
        </div>
      </section>
      <section className="two">
        <h2 className="secao">Promoções</h2>
      </section>
    </main>
  );
}
