import banner from "../utils/img/banner.png";
import arrow from "../utils/img/arrow.png";
import chocolatebowl from "../utils/img/chocolatebowl.png";
import veg from "../utils/img/veg.png";
import plus from "../utils/img/plus.png";

const SpecialMenu = () => {
  return (
    <div className="w-full bg-[#F5F5F5] min-h-[85vh] mb-[8vh]">
      <img src={banner} alt="banner" className="mt-[12vh] p-1 pt-4" />
      <div className="flex justify-between items-center px-6">
        <p>Todays Special</p>
        <div className="border border-l-2 w-1/2 h-0"></div>
        <img src={arrow} alt="arrow" className="h-1 w-2" />
      </div>
      <div className="flex flex-wrap justify-center mt-2">
        <div className="special-card p-1 m-1">
          <img src={chocolatebowl} alt="chocolatebowl" />
          <div className="flex items-center my-1">
            <img src={veg} alt="veg" className="h-4 w-4 mx-2" />
            <p>Chocolate Bowl</p>
          </div>
          <div className="flex items-center justify-around">
            <p>&#x20B9; 299</p>
            <button>
              <div className="add-btn flex">
                <div className="plus-btn flex justify-center items-center p-2 m-1">
                  <img src={plus} alt="plus" className="h-[10px] w-[10px]"/>
                </div>
                <p className="p-1 px-2">ADD</p>
              </div>
            </button>
          </div>
        </div>
        <div className="special-card p-1 m-1">
          <img src={chocolatebowl} alt="chocolatebowl" />
          <div className="flex items-center my-1">
            <img src={veg} alt="veg" className="h-4 w-4 mx-2" />
            <p>Chocolate Bowl</p>
          </div>
          <div className="flex items-center justify-around">
            <p>&#x20B9; 299</p>
            <button>
              <div className="add-btn flex">
                <div className="plus-btn flex justify-center items-center p-2 m-1">
                  <img src={plus} alt="plus" className="h-[10px] w-[10px]"/>
                </div>
                <p className="p-1 px-2">ADD</p>
              </div>
            </button>
          </div>
        </div>
        <div className="special-card p-1 m-1">
          <img src={chocolatebowl} alt="chocolatebowl" />
          <div className="flex items-center my-1">
            <img src={veg} alt="veg" className="h-4 w-4 mx-2" />
            <p>Chocolate Bowl</p>
          </div>
          <div className="flex items-center justify-around">
            <p>&#x20B9; 299</p>
            <button>
              <div className="add-btn flex">
                <div className="plus-btn flex justify-center items-center p-2 m-1">
                  <img src={plus} alt="plus" className="h-[10px] w-[10px]"/>
                </div>
                <p className="p-1 px-2">ADD</p>
              </div>
            </button>
          </div>
        </div>
        <div className="special-card p-1 m-1">
          <img src={chocolatebowl} alt="chocolatebowl" />
          <div className="flex items-center my-1">
            <img src={veg} alt="veg" className="h-4 w-4 mx-2" />
            <p>Chocolate Bowl</p>
          </div>
          <div className="flex items-center justify-around">
            <p>&#x20B9; 299</p>
            <button>
              <div className="add-btn flex">
                <div className="plus-btn flex justify-center items-center p-2 m-1">
                  <img src={plus} alt="plus" className="h-[10px] w-[10px]"/>
                </div>
                <p className="p-1 px-2">ADD</p>
              </div>
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SpecialMenu;
