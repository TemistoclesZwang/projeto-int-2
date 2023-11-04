// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import LoginForm from './components/LoginForm'
import {LoginPage} from './pages/Login'
import { RegistrationPage } from './pages/Registration'
import { Home } from './pages/home'
import { GrayscaleFilterImg } from './components/GrayscaleFilterImg'
import { Countdown } from './components/CountDown'
import { useState } from 'react'

function App() {

  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <LoginPage></LoginPage> */}
      {/* <RegistrationPage></RegistrationPage> */}
      <Home></Home>

    </>
  )
}

export default App
