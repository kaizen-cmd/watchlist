import React, { useEffect, useState } from "react";
import firebase from "../../firebase";

const ListDetail = ({ match }) => {
  const listTitle = match.params.title;
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchList();
    // eslint-disable-next-line
  }, []);

  const fetchList = () => {
    const listsRef = firebase.database().ref("watchlists");
    listsRef
      .orderByChild("title")
      .equalTo(listTitle)
      .once("value", (snapshot) => {
        const data = snapshot.val();
        var key;
        for (var index in data) {
          key = index;
        }
        setTitle(data[key].title);
        setUsername(data[key].username);
        var movieList = [];
        for (var index2 in data[key].movies) {
          var movie = data[key].movies[index2];
          movieList.push({
            title: movie.title,
            src: movie.src,
            actors: movie.actors,
            rating: movie.rating,
            filmLnegth: movie.filmLnegth,
            genre: movie.genre,
          });
        }
        setMovies(movieList);
      });
  };

  return (
    <>
      <div className="container">
        <div className="d-flex flex-column">
          <div>
            <h2 className="text-danger">
              <u>Title</u>: {title}
            </h2>
          </div>
          <div>
            <h2 className="text-danger">
              <u>Made by</u>: {username}
            </h2>
          </div>
          <div className="d-flex flex-column">
            <div>
              <h2 className="text-danger">
                <u>Movies</u>
              </h2>
            </div>
            <div>
              {movies.map((movie, index) => {
                return (
                  <>
                  <div key={index} className="d-flex mt-3">
                    <div className="h-200 mr-2">
                      <img
                        src={movie.src}
                        alt={movie.title}
                        className="mw-100"
                      />
                    </div>
                    <div className="d-flex flex-column justify-content-between py-2">
                      <div>
                        <h4 className="m-0 font-weight-bold text-light">
                          {movie.title}
                        </h4>
                      </div>
                      <div className="text-left">
                        <h6 className="m-0">
                          <u>Actors</u>: {movie.actors}
                        </h6>
                      </div>
                      <div className="text-left">
                        <h6 className="m-0">
                          <u>Rating</u>: {movie.rating} / 10
                        </h6>
                      </div>
                      <div className="text-left">
                        <h6 className="m-0">
                          <u>Duration</u>: {movie.filmLnegth}
                        </h6>
                      </div>
                      <div className="text-left">
                        <h6 className="m-0">
                          <u>Genre</u>: {movie.genre}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <hr className="border border-light"/>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListDetail;
