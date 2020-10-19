import React from "react";
import NewListModal from "./new-list-modal";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="d-flex w-100 py-4 px-3 align-items-center top-nav">
      <div className="size-200">
        <Link to="/">
          <img
            src="https://fontmeme.com/permalink/201018/5dfb932b73cf55783d65cd59849ac38f.png"
            alt="netflix-font"
            border="0"
            className="mw-100"
          />
        </Link>
      </div>
      <div className="ml-auto">
        <h5 className="text-light m-0">Powered by Open Movie Database API</h5>
      </div>
      <div className="ml-4">
        <button
          type="button"
          className="btn btn-md btn-danger font-weight-bold px-4 py-2"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          + New List
        </button>
      </div>
      <NewListModal />
    </div>
  );
};

export default TopNav;
