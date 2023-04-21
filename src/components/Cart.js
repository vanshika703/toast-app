import leftarrow from "../utils/img/arrow-left.png";
import rightarrow from "../utils/img/arrow-right.png";
import waiter from "../utils/img/icon-waiter.png";
import arrow from "../utils/img/arrow.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
  const { items: cartItems, total } = useSelector((store) => {
    return store.cart;
  });

  const dispatch = useDispatch();

  function handleremoveItem() {
    dispatch(removeItem());
  }

  return (
    <div className="bg-[#F1F1F1] min-h-screen">
      <div className="cart-header flex justify-between items-center p-8">
        <div className="flex items-center justify-between">
          <Link to="/">
            <button className="cart-btn h-8 w-8 mr-4">
              <img src={leftarrow} alt="leftarrow" className="w-5 h-5 m-auto" />
            </button>
          </Link>
          <h3>Place Order</h3>
        </div>
        <button className="cart-btn h-8 w-8">
          <img src={waiter} alt="waiter" className="w-5 h-5 m-auto" />
        </button>
      </div>
      <div className="flex justify-between items-center p-6">
        <p>Current Orders</p>
        <div className="border border-l-2 w-1/2 h-0"></div>
        <img src={arrow} alt="arrow" className="h-1 w-2" />
      </div>
      <div className="cart-items p-2 m-2">
        {cartItems?.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        {cartItems && (
          <p className="text-[#76DFE6] underline p-4">
            Add cooking instruction
          </p>
        )}
      </div>
      <div className="flex justify-between items-center p-6">
        <p>Previous Orders</p>
        <div className="border border-l-2 w-1/2 h-0"></div>
        <img src={arrow} alt="arrow" className="h-1 w-2" />
      </div>
      <div className="place-order flex justify-between items-center fixed w-11/12 p-4 m-4 bottom-0 text-white">
        <p>4 items</p>
        <div className="flex items-center">
          <h3>Place Order</h3>
          <button className="order-btn mx-2">
            <img src={rightarrow} alt="rightarrow" className="w-5 h-5 m-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
