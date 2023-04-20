import logo from "../utils/img/logo.png"
import img1 from "../utils/img/record_voice_over_black_24dp 1.png"
import img2 from "../utils/img/tag_black_24dp 1.png"

const Header = () => {
  return (
    <div className="header">
      <div className="mt-5 p-4 h-24 flex justify-between">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-8 w-8 mx-2"/>
          <h3>Scared Earth Cafe</h3>
        </div>
        <div className="flex items-center text-center">
          <button className="header-btn mx-2"><img src={img1} alt="person speaking" className="p-2"></img></button>
          <button className="header-btn mx-2"><img src={img2} alt="hashtag" className="p-2"></img></button>
        </div>
      </div>
      <div className="flex justify-around ">
        <p>Special</p>
        <p>Main</p>
        <p>Desserts</p>
        <p>Beverages</p>
      </div>
    </div>
  );
};

export default Header;
