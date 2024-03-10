"use client";
import Qulification from "@/DasComponent/Forms/Qulification";
import SocialLinks from "@/DasComponent/Forms/SocialLinks";
import ParallaxEffect from "@/DasComponent/Forms/parallaxEffect";
import FormTitle from "@/DasComponent/Others/FormTitle";
import PageTitle from "@/DasComponent/Others/PageTitle";
import SubmitButton from "@/DasComponent/Others/SubmitButton";

const page = () => {
  return (
    <div className="p-5">
      <PageTitle text={"Home Page content Edit Section"} />
      <div className="space-y-5">
        <SocialLinks />
        {/* <ParallaxEffect /> */}
        <Qulification />
      </div>
    </div>
  );
};

export default page;
