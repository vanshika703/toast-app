import veg from "../utils/img/veg.png";
import plus from "../utils/img/plus.png";
import { addItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const MainmenuCard = ({ item }) => {
  const { img, name, price } = item;

  const dispatch = useDispatch();
  function handleAddItem(item) {
    dispatch(addItem(item));
    console.log(item);
  }

  return (
    <div className="flex main-card p-2 m-4 ">
      {img && <img src={img} alt={img} className="w-24 min-h-24" />}
      <div className="flex flex-col px-2 w-full">
        <p className="ml-2 mb-6">{name}</p>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <img src={veg} alt="veg" className="h-4 w-4 mx-2" />
            <p>&#x20B9; {price}</p>
          </div>
          <button onClick={() => handleAddItem(item)}>
            <div className="add-btn flex">
              <div className="plus-btn flex justify-center items-center p-2 m-1">
                <img src={plus} alt="plus" className="h-[10px] w-[10px]" />
              </div>
              <p className="p-1 px-2">ADD</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainmenuCard;
