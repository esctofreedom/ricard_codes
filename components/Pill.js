import React from "react";

export const Pill = ({ text, color }) => {
  return (
    // reaturn pill with white text
    <div
      className={`text-white text-sm font-medium px-4 py-1 rounded-full  w-min whitespace-nowrap ${color}`}
    >
      {text}
    </div>
  );
};
