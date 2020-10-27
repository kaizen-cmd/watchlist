import React, { useContext } from "react";
import { ListsContext } from "../../context/lists-provider";
import ListCard from "./list-card";

const AllLists = () => {
  const [lists] = useContext(ListsContext);
  var delay = -0.1;
  return (
    <div className="mt-5">
      <h3 className="text-danger">Watchlists created by our lovely users</h3>
      <div className="row pb-5 pt-3">
        {lists.map((list, index) => {
          delay += 0.1;
          return (
            <ListCard
              key={index}
              title={list.title}
              username={list.username}
              delay={delay}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllLists;
