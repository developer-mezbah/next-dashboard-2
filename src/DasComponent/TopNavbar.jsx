"use client"
import { CgMenuRightAlt } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";

const TopNavbar = ({handleNavbar,smallNavbar}) => {
  return (
    <div className="top-navbar bg-white fixed right-0 top-0 h-[65px] w-full flex items-center justify-between px-5" style={smallNavbar? {left: "80px"}: {left: "250px"}}>
      <div onClick={handleNavbar} className="animated-arrow text-3xl font-extrabold cursor-pointer">
        {smallNavbar ?<IoCloseSharp className="text-themeColor" />: <CgMenuRightAlt className="text-themeColor" />}
      </div>
      <div>
        <ul className="bg-black">
          <li>
            <input
              className="text-themeColor"
              type="text"
              name="search"
              placeholder="search"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;
