
import './App.css';
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Navber from './assets/Component/Navber/Navber';

function App() {

  return (
    <>
      <Navber> </Navber>
      <Outlet> </Outlet>
      <Footer> </Footer>
    </>
  )
}

export default App
