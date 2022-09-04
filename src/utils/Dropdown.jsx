import React, { useState } from "react";

const Dropdown = ({ title, content }) => {
  const [active, setActive] = useState(false);

  const toggleDropdown = () => {
    setActive(!active);
  };

  return (
    <div
      className={`dropdown ${active ? "active" : ""} mt-3`}
      onClick={toggleDropdown}
    >
      <div className="dropdown-header w-full max-w-lg bg-gray-800 rounded p-3 flex justify-between items-center mx-auto cursor-pointer">
        <p>{title}</p>
        <div className="expand-icon">
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className="dropdown-content
         p-3 bg-gray-800 w-full max-w-lg mx-auto"
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Dropdown;
