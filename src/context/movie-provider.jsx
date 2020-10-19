import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [src, setSrc] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [filmLength, setFilmLength] = useState("");
  const [actors, setActors] = useState("");
  const [genre, setGenre] = useState("");

  return (
    <MovieContext.Provider
      value={[
        src,
        setSrc,
        title,
        setTitle,
        rating,
        setRating,
        filmLength,
        setFilmLength,
        actors,
        setActors,
        genre,
        setGenre,
      ]}
    >
      {props.children}
    </MovieContext.Provider>
  );
};


