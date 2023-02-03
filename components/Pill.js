import React from "react";

export const Pill = ({ text, color }) => {
  return (
    // reaturn pill with white text
    <div
      className={`text-white text-xs font-medium px-3 py-[0.2rem] rounded-full  w-min whitespace-nowrap ${color}`}
    >
      {text}
    </div>
  );
};
