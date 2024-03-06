"use client";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";

const NavItems = ({ data }) => {
  const [dropDown, setDropdown] = useState(
    data.pageName === "main" ? true : false
  );
  return (
    <>
      <div className="nav-pages px-5 space-y-2 pb-5 block">
        <span className="uppercase text-textColor text-sm opacity-75">
          {data.pageName}
        </span>
        <div
          onClick={() => setDropdown(!dropDown)}
          className="nav-title flex justify-between items-center text-textColor cursor-pointer"
        >
          <div className="flex items-center gap-5">
            <span className="text-xl">{data.icon}</span>
            <div className="flex gap-2 items-center my-2">
              <span className="text-lg">{data.pageTitle}</span>
              <span
                className="text-warning rounded-lg"
                style={{ background: "#7e7e183b", padding: "2px 5px" }}
              >
                {data.subItems.length}
              </span>
            </div>
          </div>
          <span>{dropDown ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
        </div>
        {dropDown && (
          <ul className="navbar-bullet text-textColor pl-5 space-y-1 dropdown-anime">
            {data.subItems?.map((item, i) => (
              <li key={i}>
                <Link href={item.url}>
                  <span className="pl-6 hover:text-white">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default NavItems;
