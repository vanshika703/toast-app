import arrow from "../utils/img/arrow.png";
import acaibowl from "../utils/img/acaibowl.png";
import veg from "../utils/img/veg.png";
import plus from "../utils/img/plus.png";

const MainMenu = () => {
  return (
    <div className="w-full bg-[#F5F5F5] min-h-[85vh] mb-[8vh]">
      <div className="flex justify-between items-center p-6 mt-[14vh]">
        <p>Acai Bowls</p>
        <div className="border border-l-2 w-1/2 h-0"></div>
        <img src={arrow} alt="arrow" className="h-1 w-2" />
      </div>
      <div className=" mt-2">
        <div className="flex main-card p-2 m-4 ">
          <img src={acaibowl} alt="acaibowl" className="w-24 min-h-24" />
          <div className="flex flex-col px-2 w-full">
            <p className="ml-2 mb-6">Sunrise Acai Bowl</p>
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center">
                <img src={veg} alt="veg" className="h-4 w-4 mx-2" />
                <p>&#x20B9; 299</p>
              </div>
              <button>
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
        <div className="flex main-card p-2 m-4 ">
          <div className="flex flex-col px-2 w-full">
            <p className="ml-2 mb-6">Sunrise Acai Bowl</p>
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center">
                <img src={veg} alt="veg" className="h-4 w-4 mx-2" />
                <p>&#x20B9; 299</p>
              </div>
              <button>
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
        <div className="flex main-card p-2 m-4 ">
          <img src={acaibowl} alt="acaibowl" className="w-24 min-h-24" />
          <div className="flex flex-col px-2 w-full">
            <p className="ml-2 mb-6">Item name in two lines increases height</p>
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center">
                <img src={veg} alt="veg" className="h-4 w-4 mx-2" />
                <p>&#x20B9; 299</p>
              </div>
              <button>
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
      </div>
    </div>
  );
};

export default MainMenu;
