import React from "react";
import { Link } from "react-router-dom";

const Button = ({ url }) => {
  return (
    <Link to={url} className="text-white py-2 px-4 text rounded bg-red-700">
      Sign in
    </Link>
  );
};

export default Button;
