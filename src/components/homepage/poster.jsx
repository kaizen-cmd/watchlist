import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../../context/movie-provider";

const Poster = () => {
  const [
    src,
    ,
    title,
    ,
    rating,
    ,
    filmLength,
    ,
    actors,
    ,
    genre,
    ,
  ] = useContext(MovieContext);

  return (
    <>
      {src ? (
        <div className="w-75 d-flex mx-auto mt-4 flex-column">
          <div className="d-flex flex-row poster-main">
            <div className="w-75 poster-img-div animate__animated animate__fadeIn">
              <img src={src} className="mw-100" alt={title} />
            </div>
            <div className="w-50 d-flex flex-column flex-wrap justify-content-between py-3 poster-info-div animate__animated animate__fadeIn">
              <div>
                <h3 className="m-0 font-weight-bold text-light">{title}</h3>
              </div>
              <div className="text-left">
                <h5 className="m-0">
                  <u>Actors</u>: {actors}
                </h5>
              </div>
              <div className="text-left">
                <h5 className="m-0">
                  <u>Rating</u>: {rating} / 10
                </h5>
              </div>
              <div className="text-left">
                <h5 className="m-0">
                  <u>Duration</u>: {filmLength}
                </h5>
              </div>
              <div className="text-left">
                <h5 className="m-0">
                  <u>Genre</u>: {genre}
                </h5>
              </div>
            </div>
          </div>
          <div className="mt-3 animate__animated animate__fadeIn">
            <Link to="/choose-list">
              <button className="add-btn border border-danger text-danger font-weight-bold add-btn w-100 py-2">
                + Add to watchlist
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <h4 className="font-weight-bold text-light mt-4">
          No movie or tv series with this title :(
        </h4>
      )}
    </>
  );
};

export default Poster;
