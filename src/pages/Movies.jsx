import React, { useState, useEffect } from "react";
import Button from "../utils/form/Button";
import Card from "../utils/movies/Card";
import { BsSearch } from "react-icons/bs";
import axios from "axios";

const Movies = () => {
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState([]);
  const apiKey = "k_1wiszdp7";

  const search = (e) => {
    e.preventDefault();
    axios
      .get(`https://imdb-api.com/API/SearchTitle/${apiKey}/${keyword}`)
      .then((response) => setMovies(response.data.results));
  };

  return (
    <div className="container">
      <form onSubmit={search} className="flex justify-center mt-7">
        <input
          type="search"
          name=""
          id=""
          placeholder="Search for movies title..."
          className="bg-white py-3 px-3 block rounded grow-1 block w-full max-w-md"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button text={<BsSearch />} />
      </form>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-between my-20">
        {movies.length > 0 &&
          movies.map((movie, index) => (
            <Card
              key={index}
              title={movie.title}
              image={movie.image}
              url={`https://imdb-api.com/API/Title/${apiKey}/${movie.id}`}
            />
          ))}
      </div>
      {movies.length === 0 && (
        <div className="flex justify-center">No Movies Found</div>
      )}
    </div>
  );
};

export default Movies;
