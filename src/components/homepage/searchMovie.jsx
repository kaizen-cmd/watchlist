import React, { useContext, useState } from "react";
import Axios from "axios";
import { MovieContext } from "../../context/movie-provider";
import loader from "../../loader.gif";

const SearchMovie = () => {
  const [searchBtn, setSearchBtn] = useState("Search");
  const [disableBtn, setDisableBtn] = useState(false);
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

  const searchMovie = async (qtitle) => {
    setDisableBtn(true);
    setSearchBtn(<img src={loader} className="mw-100" alt="loader" />);
    const response = await Axios.get(
      `https://www.omdbapi.com/?apikey=1dc02aaf&t=${qtitle}`
    );
    const data = await response.data;
    setTitle(data.Title);
    if (data.Title === undefined) {
      setTitle("No movies found for this title :(");
      setSrc("");
      setActors("");
      setRating("");
      setFilmLength("");
      setGenre("");
    } else {
      setSrc(data.Poster);
      setActors(data.Actors);
      setRating(data.imdbRating);
      setFilmLength(data.Runtime);
      setGenre(data.Genre);
    }
    setSearchVal("");
    setDisableBtn(false);
    setSearchBtn("Search");
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
          <button
            type="submit"
            className="bg-danger text-light font-weight-bold search-btn shadow"
            disabled={disableBtn}
            style={{ width: "200px !important", height: "8.32vh" }}
          >
            {searchBtn}
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchMovie;
