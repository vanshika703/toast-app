import banner from "../utils/img/banner.png";
import uparrow from "../utils/img/arrow.png";
import downarrow from "../utils/img/downarrow.png";

import { SPECIAL_MENU } from "../utils/constants";
import SpecialMenuCard from "./SpecialMenuCard";
import { useState } from "react";

const SpecialMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full bg-[#F5F5F5] min-h-[85vh] mb-[8vh] text-sm  text-[#4A5662] font-medium">
      <img src={banner} alt="banner" className="mt-[12vh] p-1 pt-4" />
      <div className="flex justify-between items-center px-6">
        <p className="text-sm font-normal">Todays Special</p>
        <div className="border border-l-2 w-1/2 h-0"></div>
        <img
          onClick={() => setIsOpen(!isOpen)}
          src={isOpen ? uparrow: downarrow}
          alt="arrow"
          className="h-1 w-2"
        />
      </div>
      {isOpen && (
        <div className="flex flex-wrap justify-center mt-2">
          {SPECIAL_MENU.map((item) => (
            <SpecialMenuCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SpecialMenu;
