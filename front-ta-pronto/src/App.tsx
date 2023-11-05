// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
// import LoginForm from './components/LoginForm'
import { LoginPage } from "./pages/Login";
import { RegistrationPage } from "./pages/Registration";
import { Home } from "./pages/homeClient";
import { GrayscaleFilterImg } from "./components/GrayscaleFilterImg";
import { Countdown } from "./components/CountDown";
import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { MyRouter } from "./routes";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <LoginPage></LoginPage> */}
      {/* <RegistrationPage></RegistrationPage> */}
      {/* <Home></Home> */}
      <BrowserRouter>
        <nav>
          <ul className="links">
            <li>
              <Link to="/LoginPage">Login</Link>
            </li>
            <li>
              <Link to="/register">Cadastrar</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      {MyRouter}
      </BrowserRouter>
    </>
  );
}

export default App;
