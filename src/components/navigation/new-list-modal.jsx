import React, { useContext, useState } from "react";
import { ListsContext } from "../../context/lists-provider";
import firebase from "../../firebase";
import { useHistory } from "react-router-dom";

const NewListModal = () => {
  const [lists, setLists] = useContext(ListsContext);
  const [listName, setListName] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState(null);
  const history = useHistory();

  const createList = (title, username) => {
    const listsRef = firebase.database().ref("watchlists");
    listsRef
      .orderByChild("title")
      .equalTo(title)
      .once("value")
      .then((snapshot) => {
        if (snapshot.exists()) {
          setMessage("fail");
        } else {
          const listObj = {
            title: title,
            username: username,
            movies: [],
          };
          listsRef.push(listObj).then(() => {
            setMessage("success");
            setListName("");
            setUsername("");
            setTimeout(() => {
              document.getElementById("close-btn").click();
              setMessage("");
            }, 300);
            history.push("/#all-lists");
            setLists([...lists, listObj]);
          });
        }
      });
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                New Watch List
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                createList(listName, username);
              }}
            >
              <div className="modal-body">
                <div>
                  <input
                    type="text"
                    className="bg-dark border-light border w-100 text-light"
                    placeholder="Horror movies"
                    value={listName}
                    onChange={(e) => setListName(e.currentTarget.value)}
                    required
                  />
                </div>
                <div className="mt-2">
                  <input
                    type="email"
                    className="bg-dark border-light border w-100 text-light"
                    placeholder="johndoe@gmail.com"
                    value={username}
                    onChange={(e) => setUsername(e.currentTarget.value)}
                    required
                  />
                </div>
                <div className="mt-2">
                  <p
                    className={`font-weight-bold text-${
                      message === "success"
                        ? "success"
                        : message === "fail" && "danger"
                    }`}
                  >
                    {message === "success"
                      ? "Watchlist created successfully"
                      : message === "fail" && "Watchlist already exists!"}
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  id="close-btn"
                >
                  Close
                </button>
                <input
                  type="submit"
                  className="btn btn-danger"
                  value="Create List"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewListModal;
