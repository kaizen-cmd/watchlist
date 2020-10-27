import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ListsContext } from "../../context/lists-provider";
import { MovieContext } from "../../context/movie-provider";
import firebase from "../../firebase";

const ListDropDown = () => {
  const [lists] = useContext(ListsContext);
  const [message, setMessage] = useState("");
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
  const [selected, setSelected] = useState(null);
  const history = useHistory();

  const saveMovieToList = (e) => {
    e.preventDefault();
    if (selected !== null) {
      const listsRef = firebase.database().ref("watchlists");
      var key;
      listsRef
        .orderByChild("title")
        .equalTo(selected)
        .once("value", (snapshot) => {
          for (var i in snapshot.val()) {
            key = i;
          }
        })
        .then(() => {
          const movieObj = {
            title: title,
            src: src,
            rating: rating,
            filmLnegth: filmLength,
            actors: actors,
            genre: genre,
          };
          title !== "" &&
            selected !== null &&
            listsRef.child(key.toString()).child("movies").push(movieObj);
          setMessage(`${title} successfully added to ${selected}`);
          history.push(`/list/${selected}`);
        });
    } else {
      setMessage("Please select an option from the drop down.")
    }
  };

  return (
    <>
      <div className="container text-center mt-4">
        <form
          onSubmit={(e) => {
            saveMovieToList(e);
          }}
        >
          <select
            className="custom-select custom-select-lg"
            required
            onChange={(e) => {
              setSelected(e.currentTarget.value);
            }}
          >
            <option defaultValue>Select a watchlist</option>
            {lists.map((list, index) => {
              return (
                <option
                  key={index}
                  value={list.title}
                  className="py-2 font-weight-bold"
                >
                  {list.title}
                </option>
              );
            })}
          </select>
          <div className="mt-5">
            <button
              type="submit"
              className="text-danger border border-danger font-weight-bold w-100 py-2 add-btn"
            >
              Save {title} to {selected}
            </button>
          </div>
          <div className="mt-4">
            <h4 className="text-success m-0 font-weight-bold">{message}</h4>
          </div>
        </form>
      </div>
    </>
  );
};

export default ListDropDown;
