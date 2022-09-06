import React from "react";

const Button = ({ text, fullWidth = false }) => {
  return (
    <button
      className={`bg-red-600 p-3 text-white text-center rounded cursor-pointer border-0 ${
        fullWidth ? "block w-full" : ""
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
