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
            <p>Detalhes do pedido:</p>

            <div className="detalhesPedido">
              <div>{uniqueOrdersList}</div>
            </div>

            <GrayscaleFilterImg isColored={timerEnded}></GrayscaleFilterImg>
          </div>
        </div>
      </section>
      <section className="two">
        <h2 className="secao">secao2</h2>
        <div className="container-two">
          <div className="content-1">
            <div className="text-img-two">
              <p>Texto texto texto texto texto</p>
              <div className="img-two"></div>
            </div>
          </div>
          <div className="content-2">
            <div className="text-img-two">
              <p>Texto texto texto texto texto</p>
              <div className="img-two"></div>
            </div>
          </div>
          <div className="content-3">
            <div className="text-img-two">
              <p>Texto texto texto texto texto</p>
              <div className="img-two"></div>
            </div>
          </div>
          <div className="content-4">
            <div className="text-img-two">
              <p>Texto texto texto texto texto</p>
              <div className="img-two"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="three">
        <h2 className="secao">secao3</h2>
        <div className="container-three">
          <div className="content-1">
            <div className="text-img-three">
              <div className="img-three"></div>
            </div>
          </div>
          <div className="content-2">
            <div className="text-img-three">
              <div className="img-three"></div>
            </div>
          </div>
          <div className="content-3">
            <div className="text-img-three">
              <div className="img-three"></div>
            </div>
          </div>
          <div className="content-4">
            <div className="text-img-three">
              <div className="img-three"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
