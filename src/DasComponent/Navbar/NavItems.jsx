import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { NavData } from "@/utils/NavData";

const NavItems = () => {
  return (
    <>
      {NavData?.map((data, index) => (
        <div key={index} className="nav-pages px-5 space-y-2 pb-5">
          <span className="uppercase text-textColor text-sm opacity-75">
            {data.pageName}
          </span>
          <div className="nav-title flex justify-between items-center text-textColor cursor-pointer">
            <div className="flex items-center gap-5">
              <span className="text-xl">{data.icon}</span>
              <div className="flex gap-2 items-center my-2">
                <span className="text-lg">{data.pageTitle}</span>
                <span
                  className="text-warning rounded-lg"
                  style={{ background: "#7e7e183b", padding: "2px 5px" }}
                >
                  12
                </span>
              </div>
            </div>
            <span>
              <IoIosArrowForward />
            </span>
          </div>
          <ul className="navbar-bullet text-textColor pl-5 space-y-1">
            {data.subItems?.map((item, i) => (
              <li key={i}>
                <Link href={item.url}>
                  <span className="pl-6 hover:text-white">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default NavItems;
