import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-red-600 p-3 text-white text-center rounded block w-full cursor-pointer border-0">
      {text}
    </button>
  );
};

export default Button;
