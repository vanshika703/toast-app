import uparrow from "../utils/img/arrow.png";
import downarrow from "../utils/img/downarrow.png";
import MainmenuCard from "./MainmenuCard";
import { MAIN_MENU } from "../utils/constants";
import { useState } from "react";

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full bg-[#F5F5F5] min-h-[85vh] mb-[8vh]">
      <div className="flex justify-between items-center p-6 mt-[14vh]">
        <p className="text-sm">Acai Bowls</p>
        <div className="border border-l-2 w-1/2 h-0"></div>
        <img
          onClick={() => setIsOpen(!isOpen)}
          src={isOpen ? uparrow : downarrow}
          alt="arrow"
          className="h-1 w-2"
        />
      </div>
      {isOpen &&<div className=" mt-2">
        {MAIN_MENU.map((item) => (
          <MainmenuCard key={item.id} item={item} />
        ))}
      </div>}
    </div>
  );
};

export default MainMenu;
