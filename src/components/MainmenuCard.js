import veg from "../utils/img/veg.png";
import Button from "./Button";

const MainmenuCard = ({ item }) => {
  const { img, name, price } = item;

  return (
    <div className="flex main-card p-2 m-4 ">
      {img && <img src={img} alt={img} className="w-24 min-h-24" />}
      <div className="flex flex-col px-2 w-full">
        <p className="ml-2 mb-6 mt- text-base">{name}</p>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <img src={veg} alt="veg" className="h-4 w-4 mx-2" />
            <p>&#x20B9; {price}</p>
          </div>
          <Button item={item} />
        </div>
      </div>
    </div>
  );
};

export default MainmenuCard;
