import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { BsClock, BsChevronLeft } from "react-icons/bs";

const Detail = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const apiKey = "k_1wiszdp7";

  useEffect(() => {
    axios
      .get(`https://imdb-api.com/API/Title/${apiKey}/${params.id}`)
      .then((response) => setMovie(response.data));
  }, [params]);

  return (
    <div className="container my-10">
      <Link to="/movies" className="text-white">
        <BsChevronLeft className="w-7 h-7" />
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mb-10">
        <img src={movie.image} alt={movie.title} style={{ width: "100%" }} />
        <div>
          <h3 className="text-2xl mb-3">{movie.title}</h3>
          <p>
            <BsClock /> {movie.runtimeStr}
          </p>
          <p>Genres: {movie.genres}</p>
          <p>Year: {movie.year}</p>
        </div>
      </div>
      <div className="text-gray-500">
        <p className="mb-10">{movie.plot}</p>
        <p>Directors: {movie.directors}</p>
        <p>Stars: {movie.stars}</p>
        <p>Languages: {movie.languages}</p>
      </div>
    </div>
  );
};

export default Detail;
