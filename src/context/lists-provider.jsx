import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase";

export const ListsContext = createContext();

export const ListsProvider = (props) => {
  var [lists, setLists] = useState([]);

  const fetchLists = () => {
    setLists([]);
    const listsRef = firebase.database().ref("watchlists");
    var all = listsRef.on("value", (snapshot) => {
      const dbLists = snapshot.val();
      for (const index in dbLists) {
        lists.push({
          title: dbLists[index].title,
          username: dbLists[index].username,
        });
      }
      listsRef.off("value", all);
      setLists(lists);
    });
  };

  useEffect(() => {
    fetchLists();
  }, []);

  return (
    <ListsContext.Provider value={[lists, setLists, fetchLists]}>
      {props.children}
    </ListsContext.Provider>
  );
};
