import React from "react";

function ArrowIcon({ className = "" }) {
  return (
    <svg
      className={`w-[14.59px] h-[14px] ${className}`}
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.73342 6.41666L6.59508 3.29L7.42342 2.46166L11.9618 7L7.42342 11.5383L6.59508 10.71L9.73342 7.58333H2.62842V6.41666H9.73342Z"
        fill="#0284C7"
      />
    </svg>
  );
}

export default ArrowIcon;
