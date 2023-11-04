import React, { useState } from "react";
import "./index.css";
import { GrayscaleFilterImg } from "../../components/GrayscaleFilterImg";
import { Countdown } from "../../components/CountDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCartShopping,
  faRectangleList,
  faSliders,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

export function Home() {
  const minutes = 1;
  const [timerEnded, setTimerEnded] = useState(false);

  const handleTimerEnd = () => {
    setTimerEnded(true);
  };

  return (
    <main>
      <section className="first">
        <div className="img-fundo"></div>
        <div className="bar">
          <div className="left">
            <div className="my-mark"></div>
            {/* <div className="txt-bar">Home</div> */}
            <FontAwesomeIcon icon={faUtensils} size="lg" />
            <div className="txt-bar">Pedidos</div>
            <FontAwesomeIcon icon={faRectangleList} size="lg" />
            <div className="txt-bar">Cardápio</div>
            <FontAwesomeIcon icon={faCartShopping} size="lg" />
            <div className="txt-bar">Pagamento</div>
          </div>
          <div className="right">
            <FontAwesomeIcon icon={faBell} size="lg" />
            <div className="txt-bar">Notificações</div>
            <FontAwesomeIcon icon={faSliders} size="lg" />
            <div className="txt-bar">Configurações</div>
          </div>
        </div>
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
                />
              ) : (
                <div>Tá pronto!</div>
              )}
            </div>
            <div className="detalhesPedido">Detalhes do pedido:</div>
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
