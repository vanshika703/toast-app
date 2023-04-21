import strike from "../utils/img/strike.png";
import menu from "../utils/img/menu.png";
import cart from "../utils/img/cart.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer flex justify-between p-4 px-8 w-full">
      <button className="footer-btn">
        <img src={strike} alt="strike" className="h-5 w-5 m-auto" />
      </button>
      <button className="footer-btn btn-pressed">
        <img src={menu} alt="menu" className="h-5 w-5 m-auto" />
      </button>
      <Link to="/cart">
        <button className="footer-btn">
          <img src={cart} alt="cart" className="h-5 w-5 m-auto" />
        </button>
      </Link>
    </div>
  );
};

export default Footer;
