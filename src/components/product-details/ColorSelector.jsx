"use client";

import { useState } from "react";

const ColorSelector = () => {
  const colors = [
    "#ff1900",
    "#00dd6c",
    "#0022ef",
    "#00d700",
    "#fff",
    "#ffbd00",
  ];
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div className="flex justify-start items-center gap-5">
      <h1 className="text-2xl font-semibold uppercase">Color:</h1>
      <div className="flex justify-start items-center gap-3 bg-[#1f1f1e] py-1 px-2 rounded-full">
        {colors.map((color, index) => (
          <div
            onClick={() => setSelectedColor(color)}
            style={{ backgroundColor: color }}
            key={index}
            className={`h-6 w-6 rounded-full cursor-pointer `}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
