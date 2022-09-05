import React from "react";

const Input = ({ type, placeholder, name, value, handleChange }) => {
  return (
    <input
      type={type}
      name={name}
      defaultValue={value}
      className="rounded p-3 w-full block border-0 text-white bg-gray-900 text-white"
      placeholder={placeholder}
      onChange={handleChange}
      required
    />
  );
};

export default Input;
