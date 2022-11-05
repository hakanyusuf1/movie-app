import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";

const Main = () => {
  const apiKey = "e435e98f7466f90e405d481e12a647c0";
  const [firstApi, setFirstApi] = useState();
  const [search, setSearch] = useState();
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
  const getData = async () => {
    try {
      const { data } = await axios(url);
      console.log(data.results);
      setFirstApi(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getData();
  }, []);
  const key = "6KkONLf_ZKU";

  // !film Arama
  // https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=
  // !film detayları için
  // https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}
  // !görüntü için
  //  https://image.tmdb.org/t/p/w1280${poster_path}
  // src
  return (
    <div>
      <iframe
        width="940"
        height="538"
        src={`https://www.youtube.com/embed/${key}`}
        title="Shooting The Worlds LONGEST Silencers!!! But Do They Work???"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      ;
      <form
        className=" d-flex align-items-center bg-dark"
        onSubmit={handleChange}
      >
        <input
          type="search"
          style={{
            backgroundColor: "lightGray",
            fontSize: "1.5rem",
            height: "3rem",
            outline: "none",
            border: "none",
            textIndent: "2rem",
          }}
          className="movie-search w-75"
          placeholder="Search a movie"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="w-25"
          style={{
            height: "3rem",
            border: "none",
          }}
          type="submit"
        >
          Search
        </button>
      </form>
      <h2 className="text-center">Movies</h2>
      <div className="d-flex flex-wrap   justify-content-center gap-5 my-4">
        {firstApi?.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Main;
