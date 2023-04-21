import plus from "../utils/img/plus.png";
import minus from "../utils/img/minus.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";

const Button = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const { items: cartItems } = useSelector((store) => {
    return store.cart;
  });

  function handleAddItem() {
    dispatch(addItem(item));
  }

  function handleRemoveItem() {
    dispatch(removeItem(item));
  }

  function getQuantity() {
    const index = cartItems.findIndex((cartItem) => item.id === cartItem.id);
    setQuantity(cartItems[index]?.quantity);
  }

  useEffect(() => getQuantity());

  return (
    <button>
      {(quantity && (
        <div className="add-btn flex items-center">
          <div
            className="plus-btn flex justify-center items-center p-2 m-1"
            onClick={handleRemoveItem}
          >
            <img src={minus} alt="minus" className="h-[2px] w-[10px]" />
          </div>
          <p className="p-1 px-2" onClick={handleAddItem}>
            {quantity}
          </p>
          <div className="plus-btn flex justify-center items-center p-2 m-1">
            <img src={plus} alt="plus" className="h-[10px] w-[10px]" />
          </div>
        </div>
      )) || (
        <div className="add-btn flex items-center" onClick={handleAddItem}>
          <div
            className="plus-btn flex justify-center items-center p-2 m-1"
            
          >
            <img src={plus} alt="plus" className="h-[10px] w-[10px]" />
          </div>
          <p className="p-1 px-2">ADD</p>
        </div>
      )}
    </button>
  );
};

export default Button;
