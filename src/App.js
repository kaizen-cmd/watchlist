import React from "react";
import HomePage from "./components/homepage/home";
import TopNav from "./components/navigation/topnav";
import { BrowserRouter, Route } from "react-router-dom";
import { MovieProvider } from "./context/movie-provider";
import { ListsProvider } from "./context/lists-provider";
import ListDropDown from "./components/saveToList/list-drop-down";
import ListDetail from "./components/listDetail/list-detail";

function App() {
  return (
    <>
      <MovieProvider>
        <ListsProvider>
          <BrowserRouter>
            <TopNav />
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/choose-list" exact={true} component={ListDropDown} />
            <Route path={`/list/:title`} component={ListDetail} />
          </BrowserRouter>
        </ListsProvider>
      </MovieProvider>
    </>
  );
}

export default App;
