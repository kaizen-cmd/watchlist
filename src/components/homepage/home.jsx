import React from "react";
import AllLists from "./all-lists";
import Poster from "./poster";
import SearchMovie from "./searchMovie";

const HomePage = () => {
  return (
    <div className="container mt-4 text-center">
      <SearchMovie />
      <Poster />
      <section id="all-lists">
        <AllLists />
      </section>
    </div>
  );
};

export default HomePage;
