import React, { useState } from "react";
import { GenQrCode } from "../../components/GenQrCode";
import "./index.css";
import { GrayscaleFilterImg } from "../../components/GrayscaleFilterImg";
import { Countdown } from "../../components/CountDown";
import { OrderListContextProvider, useOrderListContext } from "../../context/OrderListContext";
import { showNotification } from "../../components/SendNotification";
import { useParams } from "react-router-dom";

export function OrderComp() {
    const { orders } = useOrderListContext();
    return <div>Pedidos: {orders}</div>;
  }

export function Pedidos() {

  const minutes = 1;
  const [timerEnded, setTimerEnded] = useState(false);
  const { parametro }: { parametro?: string } = useParams();
  const valorParametro = parametro === 'true';


  const handleTimerEnd = () => {
    setTimerEnded(true);
    showNotification(true)
  };
  console.log('parametro:', parametro);
  console.log('valorParametro:', valorParametro);

  return (
    // <OrderListContextProvider>
    <main>
      <section className="first">
        <div className="img-fundo"></div>
        <div className="textos-principais">
          <h1 className="titulo-principal">Tempo do pedido</h1>
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
            <div className="detalhesPedido">Detalhes do pedido:</div>
            <OrderComp></OrderComp>

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
    // </OrderListContextProvider>
  );
}
