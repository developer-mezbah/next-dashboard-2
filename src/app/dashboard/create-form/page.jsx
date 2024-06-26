"use client";
import React from "react";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import client_api from "@/utils/api_fetch_fun";
import SubmitButton from "@/DasComponent/Others/SubmitButton";
import { ErrorToast, SuccessToast } from "@/utils/FormHelper";
import Editor from "@/utils/Editor";


const CreateNewBlogComponent = () => {
  const router = useRouter();
  const [editorData, setEditorData] = useState("");
  const [submit, setSubmit] = useState(false);
  let titleRef,
    keywordsRef,
    short_desRef,
    imgRef = useRef();

  const formSubmit = async () => {
    setSubmit(true);
    let title = titleRef.value;
    let keywords = keywordsRef.value;
    let short_des = short_desRef.value;
    let long_des = editorData;
    let img = imgRef.value;
  };

  return (
    <section className="p-10">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="rounded-xl bg-[#36404A] p-[30px]">
        <h2 className="text-xl font-medium text-white">Create new blog</h2>
        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <div className="flex gap-3">
                <input
                  ref={(input) => (titleRef = input)}
                  type="text"
                  placeholder="Title"
                  className="das-input"
                />
                <input
                  ref={(input) => (keywordsRef = input)}
                  type="text"
                  placeholder="Keywords"
                  className="das-input"
                />
              </div>
              <div className="flex gap-3">
                <input
                  ref={(input) => (short_desRef = input)}
                  type="text"
                  placeholder="Short description"
                  className="das-input"
                />
                <input
                  ref={(input) => (imgRef = input)}
                  type="text"
                  placeholder="Image CDN"
                  className="das-input"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base text-white">Description Content Edit</label>
              <div className="flex gap-3 pb-[60px]">
                <Editor data={editorData} onDataChange={setEditorData} />
              </div>
            </div>

            <div className="mt-[40px] block">
              <SubmitButton
                submit={false}
                onClick={formSubmit}
                text="Create Blog"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateNewBlogComponent;
