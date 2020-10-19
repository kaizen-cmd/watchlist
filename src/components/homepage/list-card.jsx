import React from "react";
import { Link } from "react-router-dom";

const ListCard = ({ title, username }) => {
  return (
    <div className="col-lg-3 col-sm-6 p-2">
      <Link to={`/list/${title}`}>
        <div className="list-card shadow-lg bg-light px-1 py-3 hover animate__animated animate__zoomIn">
          <h5 className="m-0 text-dark font-weight-bold">{title}</h5>
          <h6 className="m-0 text-dark font-weight-bold mt-2 email">
            By: {username}
          </h6>
        </div>
      </Link>
    </div>
  );
};

export default ListCard;
