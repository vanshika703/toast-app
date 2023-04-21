
import veg from "../utils/img/veg.png";
import plus from "../utils/img/plus.png";
import { addItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const SpecialMenuCard = ({ item }) => {
  const { img, name, price } = item;

  const dispatch = useDispatch();
  function handleAddItem(item) {
    dispatch(addItem(item));
    console.log(item);
  }

  return (
    <div className="special-card p-1 m-1">
      {img && <img src={img} alt={img} className="w-[160px]"/>}
      <div className="flex items-center my-1">
        <img src={veg} alt="veg" className="h-4 w-4 mx-2" />
        <p className="">{name}</p>
      </div>
      <div className="flex items-center justify-around">
        <p>&#x20B9;{price}</p>
        <button onClick={() => handleAddItem(item)}>
          <div className="add-btn flex items-center">
            <div className="plus-btn flex justify-center items-center p-2 m-1">
              <img src={plus} alt="plus" className="h-[10px] w-[10px]" />
            </div>
            <p className="p-1 px-2">ADD</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SpecialMenuCard;
