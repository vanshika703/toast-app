import arrow from "../utils/img/arrow.png";
import MainmenuCard from "./MainmenuCard";
import { MAIN_MENU } from "../utils/constants";




const MainMenu = () => {
  return (
    <div className="w-full bg-[#F5F5F5] min-h-[85vh] mb-[8vh]">
      <div className="flex justify-between items-center p-6 mt-[14vh]">
        <p>Acai Bowls</p>
        <div className="border border-l-2 w-1/2 h-0"></div>
        <img src={arrow} alt="arrow" className="h-1 w-2" />
      </div>
      <div className=" mt-2">
        {
          MAIN_MENU.map((item)=> <MainmenuCard item={item}/>)
        }
        
      </div>
    </div>
  );
};

export default MainMenu;
