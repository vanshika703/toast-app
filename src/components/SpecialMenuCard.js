import veg from "../utils/img/veg.png";
import Button from "./Button";

const SpecialMenuCard = ({ item }) => {
  const { img, name, price } = item;

  return (
    <div className="special-card p-1 m-1">
      {img && <img src={img} alt={img} className="w-[160px]"/>}
      <div className="flex items-center my-1">
        <img src={veg} alt="veg" className="h-4 w-4 mx-2" />
        <p className="">{name}</p>
      </div>
      <div className="flex items-center justify-around">
        <p>&#x20B9;{price}</p>
        <Button item={item}/>
      </div>
    </div>
  );
};

export default SpecialMenuCard;
