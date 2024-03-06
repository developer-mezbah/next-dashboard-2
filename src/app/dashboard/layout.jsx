import React from "react";
import Navbar from "@/DasComponent/Navbar/Navbar";
import Footer from "@/DasComponent/Others/Footer";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="bg-bgDark min-h-screen">
        <Navbar />
      </div>
      <div className="w-full mt-[45px]">
        <div className="bg-[url('/images/dashboard-bg.jpg')] bg-fixed bg-center bg-no-repeat bg-cover">
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default layout;
