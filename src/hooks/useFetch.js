import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (keyword) => {
  const apiKey = "k_1wiszdp7";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://imdb-api.com/API/SearchTitle/${apiKey}/${keyword}`)
      .then((response) => setMovies(response.data.results));
  }, [keyword]);

  return movies;
};

export default useFetch;
