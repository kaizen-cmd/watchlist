import React, { useContext, useState } from "react";
import Axios from "axios";
import { MovieContext } from "../../context/movie-provider";

const SearchMovie = () => {
  const [searchVal, setSearchVal] = useState("");
  const [
    ,
    setSrc,
    ,
    setTitle,
    ,
    setRating,
    ,
    setFilmLength,
    ,
    setActors,
    ,
    setGenre,
  ] = useContext(MovieContext);
  const searchMovie = async (title) => {
    const response = await Axios.get(
      `http://www.omdbapi.com/?apikey=1dc02aaf&t=${title}`
    );
    const data = response.data;
    setSrc(data.Poster);
    setTitle(data.Title);
    setActors(data.Actors);
    setRating(data.imdbRating);
    setFilmLength(data.Runtime);
    setGenre(data.Genre);
    setSearchVal("");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchMovie(searchVal);
      }}
    >
      <div className="d-flex justify-content-center w-100">
        <div className="w-75">
          <input
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.currentTarget.value)}
            required={true}
            placeholder="Movie or series title..."
            className="w-100"
          />
        </div>
        <div>
          <input
            type="submit"
            value="Search"
            className="bg-danger text-light font-weight-bold search-btn"
          />
        </div>
      </div>
    </form>
  );
};

export default SearchMovie;
