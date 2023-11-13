import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { MyRouter } from "./routes";
import {
  faBell,
  faCartShopping,
  faRectangleList,
  faSliders,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { BtnNavBar } from "./components/BtnNavBar";
import { GenQrCode } from "./components/GenQrCode";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
          <BrowserRouter>
        <nav className="navbar">
          <ul className="links">
            <div className="left">
              <BtnNavBar to="/Pedidos" icon={faUtensils} text="Pedidos" />
              <BtnNavBar to="/cardapio" icon={faRectangleList} text="Cardápio" />
              <BtnNavBar to="/pagamento" icon={faCartShopping} text="Pagamento" />
            </div>
            <div className="right">
            <BtnNavBar to="/LoginPage" icon={faBell} text="Notificações" />
            <BtnNavBar to="/register" icon={faSliders} text="Configurações" />
            </div>
          </ul>
        </nav>
        {MyRouter}
      </BrowserRouter>
      {/* <LoginPage></LoginPage> */}
      {/* <RegistrationPage></RegistrationPage> */}
      {/* <Pedidos></Pedidos> */}
      {/* <Menu></Menu> */}
      {/* <GenQrCode></GenQrCode> */}


    </>
  );
}

export default App;
