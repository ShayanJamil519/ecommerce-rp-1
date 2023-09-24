import React from "react";

const GenderSelector = ({ handleInputChange, gender }) => {
  return (
    <div className="flex justify-start items-center gap-3 my-5">
      <h1 className="text-base sm:text-xl md:text-2xl font-semibold uppercase">
        Gender:
      </h1>
      <input
        placeholder="Your Gender..."
        type="text"
        className="border-b-[1px]  border-[#1f1f1e] focus:border-b-[#474746] focus:outline-none sm:min-w-[150px]  bg-transparent "
        name="gender"
        value={gender}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default GenderSelector;
