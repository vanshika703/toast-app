import veg from "../utils/img/veg.png";
import plus from "../utils/img/plus.png";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { useEffect } from "react";

const CartItem = ({ item }) => {
  
/*   const dispatch = useDispatch();

  function handleRemoveItem(item) {
    dispatch(removeItem(item));
  } */
  const { name, price } = item;
  return (
    <div className="flex justify-between items-center p-2 pt-4">
      <div className="flex items-center justify-center">
        <img src={veg} alt="veg" className="h-4 w-4 mx-2" />
        <div>
          <p className="">{name}</p>
          <p>&#x20B9; {price}</p>
        </div>
      </div>
      <button /* onClick={handleRemoveItem(item)} */>
        <div className="add-btn flex">
          <div className="plus-btn flex justify-center items-center p-2 m-1">
            <img src={plus} alt="plus" className="h-[10px] w-[10px]" />
          </div>
          <p className="p-1 px-2">ADD</p>
        </div>
      </button>
    </div>
  );
};

export default CartItem;
