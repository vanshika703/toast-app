import Header from "./Header"
import Footer from "./Footer"
import MainMenu from "./MainMenu"
import SpecialMenu from "./SpecialMenu"
import Cart from "./Cart"
import { Outlet } from "react-router-dom"

const Body = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Body