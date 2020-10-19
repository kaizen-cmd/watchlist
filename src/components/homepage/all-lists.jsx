import React, { useContext } from "react";
import { ListsContext } from "../../context/lists-provider";
import ListCard from "./list-card";

const AllLists = () => {
  const [lists] = useContext(ListsContext);

  return (
    <div className="mt-5">
      <h3 className="text-danger">Watchlists created by our lovely users</h3>
      <div className="row">
        {lists.map((list, index) => {
          return (
            <ListCard key={index} title={list.title} username={list.username} />
          );
        })}
      </div>
    </div>
  );
};

export default AllLists;
