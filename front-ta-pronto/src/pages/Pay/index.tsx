import { GenQrCode } from "../../components/GenQrCode";
import "./index.css";

export function Pay(){
    return (
        <section className="containerPay">
        <h2 className="Titulo">Pagamento</h2>
        <div className="containerQrCode">
        <GenQrCode></GenQrCode>
        </div>
      </section>
    )
}