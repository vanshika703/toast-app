import logo from "../utils/img/logo.png";
import img1 from "../utils/img/record_voice_over_black_24dp 1.png";
import img2 from "../utils/img/tag_black_24dp 1.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <div className=" p-4 flex justify-between mt-[3vh]">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-8 w-8 mx-2" />
          <h3 className="text-base font-semibold text-[#4A5662]">
            Scared Earth Cafe
          </h3>
        </div>
        <div className="flex items-center text-center">
          <button className="header-btn mx-2">
            <img src={img1} alt="person speaking" className="p-2"></img>
          </button>
          <button className="header-btn mx-2">
            <img src={img2} alt="hashtag" className="p-2"></img>
          </button>
        </div>
      </div>
      <div className="menu-category flex justify-around text-[#4a566266] font-medium text-sm">
        <Link to="/">
          <p
            className={
              location.pathname === "/"
                ? "text-[#3CBCB4] border-b-2 border-[#3CBCB4] pb-[1.8vh]"
                : ""
            }
          >
            Special
          </p>
        </Link>
        <Link to="/main">
          <p
            className={
              location.pathname === "/main"
                ? "text-[#3CBCB4] border-b-2 border-[#3CBCB4] pb-[1.8vh]"
                : ""
            }
          >
            Main
          </p>
        </Link>
        <p>Desserts</p>
        <p>Beverages</p>
      </div>
    </div>
  );
};

export default Header;
