"use client";
import FormTitle from "@/DasComponent/Others/FormTitle";
import PageTitle from "@/DasComponent/Others/PageTitle";
import SubmitButton from "@/DasComponent/Others/SubmitButton";
import { DeleteAlert } from "@/utils/DeleteAlert";
import { ErrorToast, SuccessToast } from "@/utils/FormHelper";
import React from "react";
import Swal from "sweetalert2";

const page = () => {
  const handleSuccess = () => {
    SuccessToast("This is success Toast");
  };
  const handleFail = () => {
    ErrorToast("This is Error Toast");
  };
  const handleMoreSuccess = () => {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
  };
  const sweetDeleteAlert = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
  };
  return (
    <>
      <PageTitle text={"Alert & Warning"} />
      <div className="p-20 flex gap-10">
        <SubmitButton
          onClick={handleSuccess}
          submit={false}
          text={"Success alert"}
        />
        <SubmitButton
          onClick={handleFail}
          submit={false}
          text={"Fail alert"}
          background={"#ff000070"}
        />
      </div>
      <FormTitle text={"More alert"} />
      <div className="p-20 flex gap-10">
        <SubmitButton
          onClick={handleMoreSuccess}
          submit={false}
          text={"Sweet Success alert"}
        />
        <SubmitButton
          onClick={sweetDeleteAlert}
          submit={false}
          text={"Sweet Delete Alert"}
          background={"#ff000070"}
        />
      </div>
    </>
  );
};

export default page;
