import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, image, url }) => {
  return (
    <div className="card p-4 rounded">
      <img src={image} alt={title} />
      <h3 className="mt-3">
        <Link to={url} className="text-white">
          {title}
        </Link>
      </h3>
    </div>
  );
};

export default Card;
