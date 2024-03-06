"use client";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";
import TopNavbar from "../TopNavbar";
import { useState } from "react";
import Horizontal from "../Others/Horizontal";
import NavItems from "./NavItems";
import SmallNavbar from "./SmallNavbar";
import { NavData } from "@/utils/NavData";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false)
  const [smallNavbar, setSmaillNavbar] = useState(false);
  const handleNavbar = () => {
    setSmaillNavbar(!smallNavbar);
  };

  const handleMouseMove = () => {
    if(smallNavbar){
      setSmaillNavbar(false)
      setNavToggle(true)
    }
  }
  const handleMouseLeave = () => {
    if(navToggle){
      setSmaillNavbar(true)
      setNavToggle(false)
    }
  }
  return (
    <>
      <TopNavbar handleNavbar={handleNavbar} smallNavbar={smallNavbar} />
      <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={smallNavbar ? "w-[80px] h-full" : "w-[250px] h-full"}>
        <div className={smallNavbar ? "hidden" : "w-[250px]"}>
          <div className="logo py-2">
            <Image
              src={"/images/logo.png"}
              className="mx-auto h-[40px] w-2/5 my-1"
              width={200}
              height={100}
              alt="Logo"
            />
          </div>
          <Horizontal className={"mb-2"} />
          <NavItems data={NavData[0]}/>
          {NavData?.slice(1).map((navData, index) => <NavItems data={navData} key={index}/>)}
        </div>
        {smallNavbar && <SmallNavbar />}
      </div>
    </>
  );
};

export default Navbar;
