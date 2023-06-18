import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const Body = () => {
  return (
    <div className="max-w-[500px">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Body