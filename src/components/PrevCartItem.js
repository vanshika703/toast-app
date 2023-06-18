import veg from "../utils/img/veg.png";

const PrevCartItem = ({ item }) => {
  const { name, price, quantity } = item;
  return (
    <div className="flex justify-between items-center p-2 pt-4">
      <div className="flex items-center justify-center">
        <img src={veg} alt="veg" className="h-4 w-4 mx-2" />
        <div className="font-normal">
          <p>{name}</p>
          <p>&#x20B9; {price}</p>
        </div>
      </div>
      <p>{quantity}</p>
    </div>
  );
};

export default PrevCartItem;
