import React from "react";
import ReactDOM from "react-dom";
import QRCode from "qrcode.react";
import "./index.css";

export function GenQrCode() {
  return (
    // .são gerados dois qrcode:acompanhamento e pagamento
    // .qr code verifica se é pagamento ou  acompanhar pedido
    <main className="containerQrCode">
      <QRCode
        value="https://reactjs.org/"
        bgColor="rgb(231, 231, 201)"
        fgColor="rgb(21, 39, 33)"
      />
    </main>
  );
}
