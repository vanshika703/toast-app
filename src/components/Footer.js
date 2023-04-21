import strike from "../utils/img/strike.png";
import menu from "../utils/img/menu.png";
import cart from "../utils/img/cart.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
  const { items } = useSelector((store) => {
    return store.cart;
  });

  return (
    <div className="footer flex justify-between p-4 px-8 w-full">
      <button className="footer-btn">
        <img src={strike} alt="strike" className="h-5 w-5 m-auto" />
      </button>
      <Link to="/">
        <button className="footer-btn btn-pressed">
          <img src={menu} alt="menu" className="h-5 w-5 m-auto" />
        </button>
      </Link>
      <Link to="/cart">
        {" "}
        <p className="absolute ml-5 mb-5 px-1 bg-red-500 text-white text-xs rounded-full">
          {items.length}
        </p>
        <button className="footer-btn">
          <img src={cart} alt="cart" className="h-5 w-5 m-auto" />
        </button>
      </Link>
    </div>
  );
};

export default Footer;
