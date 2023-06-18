import leftarrow from "../utils/img/arrow-left.png";
import rightarrow from "../utils/img/arrow-right.png";
import waiter from "../utils/img/icon-waiter.png";
import uparrow from "../utils/img/arrow.png";
import downarrow from "../utils/img/downarrow.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import PrevCartItem from "./PrevCartItem";
import { useState } from "react";
import { clearCart, addOrder } from "../utils/cartSlice";

const Cart = () => {
  const [isCurrentOpen, setIsCurrentOpen] = useState(true);
  const [isPreviousOpen, setIsPreviousOpen] = useState(true);
  const { items: cartItems } = useSelector((store) => {
    return store.cart;
  });

  const { prevOrders } = useSelector((store) => {
    return store.cart;
  });

  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    console.log("Clicked place order");
    dispatch(addOrder(cartItems));
    handleClearCurrentCart();
  };

  function handleClearCurrentCart() {
    dispatch(clearCart());
  }

  function calculateTotalQty() {
    let qty = 0;
    cartItems.forEach((item) => (qty = qty + item.quantity));
    return qty;
  }

  console.log("cartItems", cartItems);
  return (
    <div className="bg-[#F1F1F1] min-h-screen">
      <div className="cart-header flex justify-between items-center p-8">
        <div className="flex items-center justify-between">
          <Link to="/">
            <button className="cart-btn h-8 w-8 mr-4">
              <img src={leftarrow} alt="leftarrow" className="w-5 h-5 m-auto" />
            </button>
          </Link>
          <h3 className="text-xl">Place Order</h3>
        </div>
        <button className="cart-btn h-8 w-8">
          <img src={waiter} alt="waiter" className="w-5 h-5 m-auto" />
        </button>
      </div>
      <div className="flex justify-between items-center p-6">
        <p>Current Orders</p>
        <div className="border border-l-2 w-1/2 h-0"></div>
        <img
          onClick={() => setIsCurrentOpen(!isCurrentOpen)}
          src={isCurrentOpen ? uparrow : downarrow}
          alt="arrow"
          className="h-1 w-2"
        />
      </div>
      {isCurrentOpen && (
        <div className="cart-items p-2 m-2">
          {cartItems?.map((item, i) => (
            <CartItem key={item.id} item={item} />
          ))}
          {cartItems.quantity && cartItems.quantity !== 0 && (
            <p className="text-[#76DFE6] underline p-4">
              Add cooking instruction
            </p>
          )}
        </div>
      )}
      <div className="flex justify-between items-center p-6">
        <p>Previous Orders</p>
        <div className="border border-l-2 w-1/2 h-0"></div>
        <img
          onClick={() => setIsPreviousOpen(!isPreviousOpen)}
          src={isPreviousOpen ? uparrow : downarrow}
          alt="arrow"
          className="h-1 w-2"
        />
      </div>
      {isPreviousOpen && (
        <div className="overflow-scroll h-96">
          {prevOrders?.map((order, i) => {
            return (
              <div className="cart-items p-2 m-2">
                {order.map((item) => {
                  return <PrevCartItem key={item.id} item={item} />;
                })}
              </div>
            );
          })}
        </div>
      )}
      <div
        onClick={handlePlaceOrder}
        className="place-order flex justify-between items-center fixed w-11/12 p-4 m-4 bottom-0 text-white sm:max-w-[360px]"
      >
        <p className="text-xs">{calculateTotalQty()} Items</p>
        <div className="flex items-center">
          <h3>PLACE ORDER</h3>
          <button className="order-btn mx-2">
            <img src={rightarrow} alt="rightarrow" className="w-5 h-5 m-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
