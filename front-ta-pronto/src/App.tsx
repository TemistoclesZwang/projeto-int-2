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
import { AuthProvider, useAuth } from "./context/AuthContext";
import { useEffect } from "react";
import { CustomContextProvider } from "./components/c1";
import { SecondComponent } from "./components/c2";
import { SendLoginForm } from "./components/c3";


function App() {
  const { login,isLoggedIn } = useAuth(); // Obtenha o estado de login do contexto de autenticação

  const handleLogin = () => {
    login();
  };

  return (
    // <CustomContextProvider>
    <>
    {/* <LoginForm></LoginForm> */}
    {/* <SecondComponent></SecondComponent> */}
      <BrowserRouter>
        {isLoggedIn && ( // Renderize a navbar apenas se o usuário estiver logado
        <nav className="navbar">
            <ul className="links">
              <div className="left">
                <BtnNavBar to="/Pedidos" icon={faUtensils} text="Pedidos" />
                <BtnNavBar
                  to="/cardapio"
                  icon={faRectangleList}
                  text="Cardápio"
                />
                <BtnNavBar
                  to="/pagamento"
                  icon={faCartShopping}
                  text="Pagamento"
                />
              </div>
              <div className="right">
                <BtnNavBar
                  to="/LoginPage"
                  icon={faBell}
                  text="Notificações"
                />
                <BtnNavBar
                  to="/register"
                  icon={faSliders}
                  text="Configurações"
                />
              </div>
            </ul>
          </nav>
        )}
        {MyRouter}
      </BrowserRouter>
    </>
    // </CustomContextProvider>
  );
}

export default App;
