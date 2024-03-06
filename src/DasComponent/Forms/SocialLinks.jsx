import React from "react";
import SubmitButton from "../Others/SubmitButton";
import FormTitle from "../Others/FormTitle";

const SocialLinks = () => {
  const inputClass =
    "bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500";
  const lableClass =
    "block mb-2 text-sm font-medium text-white";
  return (
    <div className="dashboard-form-bg flex flex-col">
      <FormTitle text={"Social Link"} />
      <form className="px-10 pb-10">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="facebook" className={lableClass}>
              Facebook
            </label>
            <textarea
              type="text"
              id="facebook"
              className={inputClass}
              placeholder="Facebook Link"
            />
          </div>
          <div>
            <label htmlFor="linkedin" className={lableClass}>
              Linkedin
            </label>
            <textarea
              type="text"
              id="linkedin"
              className={inputClass}
              placeholder="Linkedin Link"
            />
          </div>
          <div>
            <label htmlFor="github" className={lableClass}>
              Github
            </label>
            <textarea
              type="text"
              id="github"
              className={inputClass}
              placeholder="Github Link"
            />
          </div>
          <div>
            <label htmlFor="medium" className={lableClass}>
              Medium
            </label>
            <textarea
              type="text"
              id="medium"
              className={inputClass}
              placeholder="Medium Link"
            />
          </div>
        </div>

        <SubmitButton text={"Submit"} submit={true} />
        <SubmitButton text={"Submit"} submit={false} />
      </form>
    </div>
  );
};

export default SocialLinks;
