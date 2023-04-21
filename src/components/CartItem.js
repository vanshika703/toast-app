import veg from "../utils/img/veg.png";
import Button from "./Button";

const CartItem = ({ item }) => {
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
      <Button item={item} />
    </div>
  );
};

export default CartItem;
